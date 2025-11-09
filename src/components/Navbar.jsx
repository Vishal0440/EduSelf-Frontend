import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth(); // ✅ only call useAuth once
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="flex items-center justify-between max-w-6xl px-4 py-4 mx-auto">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold text-indigo-600">EduSelf</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="items-center hidden gap-6 md:flex">
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>
          <Link to="/courses" className="hover:text-indigo-600">
            Courses
          </Link>
          <Link to="/contact" className="hover:text-indigo-600">
            Contact
          </Link>
          <Link to="/about" className="hover:text-indigo-600">
            About
          </Link>

          {user ? (
            <button
              onClick={logout}
              className="px-3 py-1 text-white transition bg-indigo-600 rounded hover:bg-indigo-700"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-3 py-1 transition border rounded hover:bg-indigo-100"
            >
              User Login
            </Link>
          )}
          <Link
            to="/admin"
            className="px-3 py-1 transition bg-green-300 border rounded hover:bg-green-500"
          >
            Admin Panel
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="px-4 pt-2 pb-4 space-y-2 font-medium text-center shadow-md bg-gradient-to-r from-indigo-200 to-white md:hidden">
          <Link
            to="/"
            className="block hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="block hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Courses
          </Link>
          <Link
            to="/contact"
            className="block hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="block hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          {user ? (
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="w-full px-3 py-1 text-white transition bg-indigo-600 rounded hover:bg-indigo-700"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="inline-block w-20 px-3 py-1 transition border rounded bg-slate-300 hover:bg-indigo-50"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
