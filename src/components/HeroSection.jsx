import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-white">
      <div className="grid items-center h-auto max-w-6xl gap-8 px-4 mx-auto md:grid-cols-2 lg:h-svh">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
            Learn. Build. <br />
            Grow — with EduSelf
          </h1>
          <p className="mb-6 text-gray-600">
            High-quality tech courses — free and premium. Start your learning
            journey today.
          </p>
          <Link
            to="/courses"
            className="px-6 py-3 text-white bg-indigo-600 rounded"
          >
            Explore Courses
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="lg:max-w-lg md:w-auto">
            <div className="flex items-center justify-center mb-4 ">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
