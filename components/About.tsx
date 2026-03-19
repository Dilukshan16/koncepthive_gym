"use client";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* image */}
        <div className="relative w-full md:w-[45%] h-[700px] flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute top-0 left-0 w-[62%] rounded-2xl overflow-hidden border border-yellow-600/40 shadow-xl z-10"
          >
            <img
              src="/images/about1.png"
              alt="gym1"
              className="w-full h-[380px] object-cover sm:object-fill"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute bottom-0 right-0 w-[72%] rounded-2xl overflow-hidden border border-yellow-600/40 shadow-2xl z-20"
          >
            <img
              src="/images/about2.png"
              alt="gym2"
              className="w-full h-[420px] object-cover sm:object-fill"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-[55%] flex flex-col gap-6"
        >
          {/* Badge */}
          <div className="inline-flex w-fit items-center gap-1 border border-[#D5A310]/60 rounded-full px-4 py-1.5 text-sm font-medium">
            <span className="text-[#D5A310] font-semibold">About</span>
            <span className="text-white">Us</span>
          </div>

          {/* para */}
          <div className="flex flex-col gap-5 text-gray-200 text-base leading-relaxed">
            <p className="text-lg font-medium text-white">
              We are more than just a gym — we are a lifestyle transformation
              hub.
            </p>
            <p>
              At our fitness center, we combine cutting-edge equipment, expert
              trainers, and a motivating environment to help you unlock your
              full potential. Whether you're starting your fitness journey or
              pushing your limits, we provide the support, guidance, and energy
              you need to succeed.
            </p>
            <p>
              Our mission is simple: to empower you to become stronger,
              healthier, and more confident every single day.
            </p>
          </div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="flex flex-wrap gap-4 mt-4"
          >
            {[
              { value: "500+", label: "Members" },
              { value: "15+", label: "Professional\nTrainers" },
              { value: "5+", label: "Years Experience" },
            ].map((stat) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                key={stat.label}
                className="bg-[#1a1a0f] border border-yellow-900/40 rounded-2xl px-6 py-4 flex flex-col gap-1 min-w-[130px] hover:scale-105 transition-transform duration-300"
              >
                <span className="text-white text-xl font-bold">
                  {stat.value}
                </span>
                <span className="text-gray-300 text-sm font-medium whitespace-pre-line leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
