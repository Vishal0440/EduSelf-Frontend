import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullName: data.fullName, // ✅ fixed key name
      email: data.email,
      password: data.password,
    };

    console.log("Sending userInfo:", userInfo);

    try {
      const res = await axios.post(
        "https://eduself-backend.onrender.com/user/signup",
        userInfo
      );

      if (res.data) {
        toast.success("✅ SignUp successful!");
        navigate("/login"); // optional redirect
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    } catch (err) {
      toast.error(
        "SignUp Error: " + (err.response?.data?.message || err.message)
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-50 to-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-2xl rounded-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h2>
        <p className="text-center text-gray-500">Sign up to get started</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            {...register("fullName", { required: true })}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          {errors.fullName && (
            <span className="text-red-500">Full name is required</span>
          )}

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          {errors.email && (
            <span className="text-red-500">Valid email is required</span>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}

          <button
            type="submit"
            className="w-full py-3 text-white transition-colors bg-purple-600 rounded-xl hover:bg-purple-700"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="px-1 font-semibold text-purple-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
