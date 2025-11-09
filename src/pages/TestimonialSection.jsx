import { motion } from "framer-motion";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Vishal Prasad",
      role: "Student, EduSelf",
      feedback:
        "EduSelf has completely changed how I learn. The resources are top-notch and the experience is seamless!",
      image:
        "https://scontent.fjga1-1.fna.fbcdn.net/v/t39.30808-1/540268499_3223291767840387_4325541016561998594_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Ap5M4rhHRUsQ7kNvwFWDzRO&_nc_oc=Adm1Cnqg1LEUJgx9cHWpi73M6qb4sbeQ33cYODd6zIl7iDjxloRNdJ_ojWW9LSiKr53ikqAYquTLiQs0-oJEg-uP&_nc_zt=24&_nc_ht=scontent.fjga1-1.fna&_nc_gid=Z2aSP5oXaRRHzsqHzG81wQ&oh=00_AfhaSBGkDrIpcueN2AHoTyxdTSkf4aK7Y301pzaJS3Vw_A&oe=69168462",
    },
    {
      name: "Ravi Yadav",
      role: "Teacher",
      feedback:
        "The platform is intuitive, fast, and reliable. It really makes education feel exciting and accessible.",
      image:
        "https://scontent.fjga1-2.fna.fbcdn.net/v/t1.6435-9/30743617_2050198038561284_7257774640318119936_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=x6grO7m1vz8Q7kNvwHZ_ajq&_nc_oc=AdlFqbbfcTwG86IAO0-DNkpMTpoLYFsK9iC-6UKdLawYBBaoL8A7GONIrwsyPI7PXihbNYgbW7Se-EgqU6TEbcp_&_nc_zt=23&_nc_ht=scontent.fjga1-2.fna&_nc_gid=KtcIl-MwnZY1CVXfr81ItA&oh=00_Afht3UFbtj5mWHI9pRADac6bgFJuMaHX4VlrVuBfIF7wXg&oe=69381473",
    },
    {
      name: "Pandey Gaurav",
      role: "Teacher",
      feedback:
        "I can easily manage my courses and students. The support team is amazing and always helpful.",
      image:
        "https://scontent.fjga1-2.fna.fbcdn.net/v/t1.6435-9/81272961_2478996092341432_4933555828276854784_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=zGeThDYUJScQ7kNvwG-w4EC&_nc_oc=Adn5LsDUNkJHjH3BKzG4Qhv0qQDxaKR7_sQQFk6F8kMHo95ciLo3Z_qkun-MKR7uqQGwP2U8luizjnEd5KqbTjdf&_nc_zt=23&_nc_ht=scontent.fjga1-2.fna&_nc_gid=FttcvC-Omak48yELgxdykg&oh=00_AfhawuTaogDxDe07CqHU08HFkooeApN6tfCsmE7J7TunLg&oe=69381030",
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
