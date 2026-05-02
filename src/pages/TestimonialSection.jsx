import { motion } from "framer-motion";
import vishalImg from "../assets/vishal.jpg";
import raviImg from "../assets/ravi.jpg";
import gauravImg from "../assets/gaurav.jpg";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Vishal Prasad",
      role: "Student, EduSelf",
      feedback:
        "EduSelf has completely changed how I learn. The resources are top-notch and the experience is seamless!",
      image: vishalImg,
    },
    {
      name: "Ravi Yadav",
      role: "Teacher",
      feedback:
        "The platform is intuitive, fast, and reliable. It really makes education feel exciting and accessible.",
      image: raviImg,
    },
    {
      name: "Pandey Gaurav",
      role: "Teacher",
      feedback:
        "I can easily manage my courses and students. The support team is amazing and always helpful.",
      image: gauravImg,
    },
  ];

  return (
    <section className="px-6 py-16 bg-gradient-to-b from-gray-50 to-white md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-3xl font-bold text-gray-800 md:text-4xl"
        >
          What Our Users Say
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="flex flex-col items-center p-6 text-center duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
            >
              <img
                src={t.image}
                alt={t.name}
                className="object-cover w-20 h-20 mb-4 border-4 border-indigo-100 rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
              <p className="mb-2 text-sm text-indigo-500">{t.role}</p>
              <p className="text-sm italic text-gray-600">“{t.feedback}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
