const User = require("../models/User");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");

const createToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "15m" });
};

const createRefreshToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });
};

exports.signup = async (req, res) => {
  const { email, password, name } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) return res.status(400).json({ message: "User already exists" });

  const user = await User.create({ email, password, name });
  res.status(201).json({ message: "User created", user });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = createToken(user);
  const refreshToken = createRefreshToken(user);
  user.refreshToken = refreshToken;
  await user.save();

  res.cookie("token", token, { httpOnly: true });
  res.cookie("refreshToken", refreshToken, { httpOnly: true });
  res.json({ message: "Logged in", user });
};

exports.logout = async (req, res) => {
  res.clearCookie("token");
  res.clearCookie("refreshToken");
  res.json({ message: "Logged out" });
};

exports.refreshToken = async (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) return res.sendStatus(403);

  try {
    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(payload.id);
    if (!user || user.refreshToken !== refreshToken) throw new Error("Invalid");

    const token = createToken(user);
    res.cookie("token", token, { httpOnly: true });
    res.json({ message: "Token refreshed" });
  } catch (err) {
    res.status(403).json({ message: "Invalid refresh token" });
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "10m" });
  const resetUrl = `${process.env.CLIENT_URL}/reset-password/${token}`;

  await sendEmail(email, "Reset Password", resetUrl);
  res.json({ message: "Password reset link sent" });
};

exports.resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.password = newPassword;
  await user.save();
  res.json({ message: "Password reset successful" });
};

exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

exports.editUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};
