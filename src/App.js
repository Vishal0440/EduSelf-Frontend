import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
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

function AppContent() {
  const { user } = useAuth();
  const location = useLocation();

  // ✅ hide Navbar & Footer on admin pages
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminPage && <Navbar />}

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

      {!isAdminPage && <Footer />}
      <Toaster position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}
