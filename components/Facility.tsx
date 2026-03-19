"use client";
import { motion } from "framer-motion";
export default function Facility() {
  const images = [
    { src: "/images/fac1.png", alt: "  rack" },
    { src: "/images/fac2.png", alt: " room " },
    { src: "/images/fac3.png", alt: " weightplates " },
    { src: "/images/fac4.png", alt: " treadmill " },
    { src: "/images/fac5.png", alt: " equipment " },
    { src: "/images/fac6.png", alt: "Woman in gym " },
  ];

  return (
    <section id="facility" className="bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
        {/* badge */}
        <div className="inline-flex items-center gap-1 border border-[#D5A310]/70 rounded-full px-5 py-1.5 text-sm font-medium">
          <span className="text-[#D5A310] font-semibold">Facility</span>
          <span className="text-white">&amp; Community</span>
        </div>

        {/* image gallery */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-3 gap-4 w-full"
        >
          {images.map((img) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              key={img.alt}
              className="relative overflow-hidden aspect-[4/3] group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 group-hover:rotate-1"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
