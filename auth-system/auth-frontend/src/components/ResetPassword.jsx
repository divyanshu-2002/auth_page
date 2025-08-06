import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const { token } = useParams();

  const handleReset = async (e) => {
    e.preventDefault();
    await axios.post("/api/auth/reset-password", { token, newPassword });
    alert("Password reset successful!");
  };

  return (
    <form onSubmit={handleReset}>
      <h2>Reset Password</h2>
      <input placeholder="New Password" onChange={(e) => setNewPassword(e.target.value)} />
      <button type="submit">Reset</button>
    </form>
  );
}
