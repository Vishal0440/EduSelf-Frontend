import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function AdminLogin({ onLogin }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login, setLogin] = useState({ username: "", password: "" });

  const handleLogin = () => {
    if (login.username === "admin" && login.password === "admin0440") {
      localStorage.setItem("adminLoggedIn", "true");
      setIsLoggedIn(true);
      onLogin(true);
      toast.success("✅ Logged in successfully!");
    } else {
      toast.error("❌ Invalid username or password");
    }
  };

  useEffect(() => {
    const logged = localStorage.getItem("adminLoggedIn");
    if (logged === "true") {
      setIsLoggedIn(true);
      onLogin(true);
    }
  }, [onLogin]);

  if (isLoggedIn) return null;

  return (
    <div className="flex items-center justify-center w-full h-svh bg-gray-50">
      <div className="w-full max-w-sm p-6 text-center bg-white shadow-xl rounded-2xl">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          🔐 Admin Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={login.username}
          onChange={(e) => setLogin({ ...login, username: e.target.value })}
          className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
          className="w-full p-3 mb-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          onClick={handleLogin}
          className="w-full py-2 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
