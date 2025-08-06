import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

export default function Dashboard() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const res = await axios.get("/api/auth/user/689267438efc80d1f50dd558");
      setUser(res.data);
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  const handleLogout = async () => {
    await axios.post("/api/auth/logout");
    navigate("/login");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.name}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
