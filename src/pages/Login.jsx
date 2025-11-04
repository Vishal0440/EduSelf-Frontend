import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext"; // ✅ Import Auth Context

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ Access login() from context

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        "https://eduself-backend.onrender.com/user/login",
        userInfo
      );

      if (res.status === 200) {
        toast.success("Login successful!");

        // ✅ Save the logged-in user in Auth Context
        login(res.data.user || res.data);

        // ✅ Redirect after login
        navigate("/courses");
      }
    } catch (err) {
      console.error("Login Error:", err);
      toast.error(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-50 to-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-2xl rounded-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Login Account
        </h2>
        <p className="text-center text-gray-500">Login to get started</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          {errors.email && (
            <span className="text-sm text-red-500">Valid email required</span>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          {errors.password && (
            <span className="text-sm text-red-500">Password is required</span>
          )}

          <button
            type="submit"
            className="w-full py-3 text-white transition-colors bg-purple-600 rounded-xl hover:bg-purple-700"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="px-1 font-semibold text-purple-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
