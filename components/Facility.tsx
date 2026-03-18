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
    <section className="bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
        {/* badge */}
        <div className="inline-flex items-center gap-1 border border-[#D5A310]/70 rounded-full px-5 py-1.5 text-sm font-medium">
          <span className="text-[#D5A310] font-semibold">Facility</span>
          <span className="text-white">&amp; Community</span>
        </div>

        {/* image gallery */}
        <div className="grid grid-cols-3 gap-4 w-full">
          {images.map((img) => (
            <div
              key={img.alt}
              className="overflow-hidden rounded-1xl aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
