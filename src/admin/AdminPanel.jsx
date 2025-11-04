// src/pages/AdminPanel.jsx
import React, { useState } from "react";
import AdminLogin from "./AdminLogin";
import BookList from "./BookList";

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("adminLoggedIn") === "true"
  );

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {isLoggedIn ? (
          <BookList onLogout={handleLogout} />
        ) : (
          <AdminLogin onLogin={setIsLoggedIn} />
        )}
      </div>
    </>
  );
}
