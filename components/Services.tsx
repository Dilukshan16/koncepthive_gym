"use client";
import { motion } from "framer-motion";
export default function Services() {
  const services = [
    {
      title: "Personal Training",
      description:
        "Get one-on-one guidance from expert trainers tailored to your fitness goals for faster, more effective results.",
      icon: (
        <img
          src="/images/personaltrain.png"
          alt=""
          className="w-15 h12 sm:w-20 h-20"
        />
      ),
    },
    {
      title: "Weight Training",
      description:
        "Build strength and muscle with structured weight programs designed for all experience levels.",
      icon: (
        <img
          src="/images/weighttrain.png"
          alt=""
          className="w-15 h12 sm:w-20 h-20"
        />
      ),
    },
    {
      title: "Yoga Classes",
      description:
        "Enhance flexibility, balance, and mental clarity through guided yoga sessions in a calming environment.",
      icon: (
        <img src="/images/yoga.png" alt="" className="w-15 h12 sm:w-20 h-20" />
      ),
    },
  ];

  return (
    <section id="services" className="bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
        {/*  Badge */}
        <div className="inline-flex items-center gap-1 border border-[#D5A310]/70 rounded-full px-5 py-1.5 text-sm font-medium">
          <span className="text-[#D5A310] font-semibold">Our</span>
          <span className="text-white">Services</span>
        </div>

        {/* Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.4 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {services.map((service) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              key={service.title}
              className="bg-[#111111] border border-gray-800 rounded-2xl flex flex-col items-center text-center px-8 py-12 gap-6 hover:border-yellow-700/50 transition-colors duration-300
              hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(213,163,16,0.15)] 
              hover:border-yellow-700/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="opacity-90"
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-[#D5A310] text-xl font-semibold">
                {service.title}
              </h3>

              {/* Des */}
              <p className="text-gray-300 text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
