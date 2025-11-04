import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vvzvn1w", // Replace with your actual EmailJS service ID
        "template_3wxko2h", // Replace with your template ID
        formData,
        "PNaWo44vq6FYHjI2s" // Replace with your public key
      )
      .then(
        () => {
          setSent(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-4xl px-6 mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-4xl font-extrabold text-gray-800"
        >
          Get in Touch
        </motion.h2>
        <p className="mb-10 text-gray-600">
          We'd love to hear from you! Whether you have a question, feedback, or
          just want to say hi — send us a message below.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="p-8 bg-white shadow-xl bg-opacity-70 backdrop-blur-lg rounded-3xl"
        >
          {sent ? (
            <p className="text-lg font-medium text-green-600">
              ✅ Message sent successfully! We'll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 transition-all border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                  placeholder="Your Name"
                  required
                />
                <input
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 transition-all border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                  placeholder="Your Email"
                  required
                />
              </div>
              <textarea
                name="message"
                onChange={handleChange}
                value={formData.message}
                className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 transition-all border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                rows={5}
                placeholder="Write your message here..."
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 text-lg font-medium text-white transition-all bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Decorative background blobs */}
      <div className="absolute w-64 h-64 bg-indigo-300 rounded-full blur-3xl opacity-20 -top-10 -left-10"></div>
      <div className="absolute w-64 h-64 bg-purple-300 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>
    </section>
  );
}
