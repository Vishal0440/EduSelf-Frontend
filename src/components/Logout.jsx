import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const { logout } = useAuth();

  const handleLogout = () => {
    try {
      logout();
      toast.success("Logout successfully");
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <button
      className="px-3 py-2 text-white bg-red-500 rounded-md cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default Logout;
