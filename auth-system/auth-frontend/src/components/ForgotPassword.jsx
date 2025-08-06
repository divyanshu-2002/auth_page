import React from "react";
import { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleForgot = async (e) => {
    e.preventDefault();
    await axios.post("/api/auth/forgot-password", { email });
    alert("Reset link sent!");
  };

  return (
    <form onSubmit={handleForgot}>
      <h2>Forgot Password</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Send Reset Link</button>
    </form>
  );
}
