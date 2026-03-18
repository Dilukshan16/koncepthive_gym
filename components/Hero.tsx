"use client";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Image */}
      <div className="absolute inset-0 ">
        <motion.img
          src="/images/hero.png"
          alt="Gym"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute items-center justify-center sm:top-[18%] sm:left-[4%] z-10 "
      >
        <h1 className="text-3xl md:text-5xl sm:text-5xl font-bold leading-none tracking-tight">
          <span className="text-[#D5A310]">Transform Your Body</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute mt-20 items-center justify-center sm:bottom-[18%] sm:right-[4%] z-10"
      >
        <p className="text-3xl md:text-5xl sm:text-5xl  font-bold text-white tracking-tight">
          Start Today
        </p>
      </motion.div>
    </section>
  );
}
