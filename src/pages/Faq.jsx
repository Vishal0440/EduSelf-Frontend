import {
  FaLaptopCode,
  FaGraduationCap,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Faq() {
  const features = [
    {
      icon: <FaLaptopCode size={40} className="text-indigo-600" />,
      title: "Practical Learning",
      description:
        "Hands-on projects and interactive courses to build real-world skills.",
    },
    {
      icon: <FaGraduationCap size={40} className="text-indigo-600" />,
      title: "Expert Mentors",
      description:
        "Learn from industry professionals with years of experience.",
    },
    {
      icon: <FaProjectDiagram size={40} className="text-indigo-600" />,
      title: "Guided Projects",
      description:
        "Step-by-step project guidance to turn theory into practice.",
    },
    {
      icon: <FaUsers size={40} className="text-indigo-600" />,
      title: "Community Support",
      description:
        "Join a supportive community to collaborate and grow together.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-6xl px-6 mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-4xl font-extrabold text-gray-800"
        >
          Why Choose <span className="text-indigo-600">Eduself?</span>
        </motion.h2>
        <p className="mb-12 text-gray-600">
          Empowering learners with practical skills, guided projects, and a
          supportive community.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 text-left transition-shadow bg-white shadow-xl rounded-3xl hover:shadow-2xl"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
