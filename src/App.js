import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import AllCourse from "./components/AllCourse";
import Contact from "./pages/Contact";
import CourseDetail from "./pages/CourseDetail";
import Login from "./pages/Login";
import { AuthProvider, useAuth } from "./context/AuthContext";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import AdminPanel from "./admin/AdminPanel";

function AppRoutes() {
  const { user } = useAuth(); // ✅ now safely inside the AuthProvider

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/courses"
              element={user ? <AllCourse /> : <Navigate to="/signup" />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/book/:id" element={<CourseDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route
              path="*"
              element={<div className="p-8 text-center">Page not found</div>}
            />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
