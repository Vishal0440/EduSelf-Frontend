import { motion } from "framer-motion";
import { Lightbulb, BookOpen, Users } from "lucide-react";

export default function About() {
  return (
    <section className="px-6 py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 md:px-12">
      <div className="flex flex-col items-center max-w-6xl gap-12 mx-auto md:flex-row">
        {/* Left: Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <img
            src="https://img.freepik.com/premium-vector/woman-reading-book-drinking-hot-coffee-learn-sains-math-artist-modern-vector-flat-illustration_720185-23.jpg"
            alt="Learning Illustration"
            className="w-full shadow-2xl rounded-3xl"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="mb-4 text-4xl font-extrabold text-indigo-700 md:text-5xl">
            About <span className="text-gray-900">EduSelf</span>
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            EduSelf helps learners gain{" "}
            <span className="font-semibold text-indigo-600">
              practical, job-ready skills
            </span>{" "}
            through curated courses, guided projects, and interactive
            assessments. Whether you're a beginner or a professional, EduSelf
            empowers you to learn by doing and grow with confidence.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 text-center bg-white shadow-md rounded-2xl"
            >
              <Lightbulb className="w-8 h-8 mx-auto mb-2 text-indigo-500" />
              <h4 className="font-semibold text-gray-800">
                Interactive Learning
              </h4>
              <p className="text-sm text-gray-600">
                Engage with hands-on activities that make learning fun.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 text-center bg-white shadow-md rounded-2xl"
            >
              <BookOpen className="w-8 h-8 mx-auto mb-2 text-indigo-500" />
              <h4 className="font-semibold text-gray-800">Curated Courses</h4>
              <p className="text-sm text-gray-600">
                High-quality content crafted by educators and industry experts.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 text-center bg-white shadow-md rounded-2xl"
            >
              <Users className="w-8 h-8 mx-auto mb-2 text-indigo-500" />
              <h4 className="font-semibold text-gray-800">
                Collaborative Growth
              </h4>
              <p className="text-sm text-gray-600">
                Connect, share, and grow with a global learner community.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
