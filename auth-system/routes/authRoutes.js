const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const verifyToken = require("../middlewares/authMiddleware");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.post("/refresh-token", authController.refreshToken);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);

router.get("/user/:id", verifyToken, authController.getUser);
router.put("/user/:id", verifyToken, authController.editUser);
router.delete("/user/:id", verifyToken, authController.deleteUser);

module.exports = router;
