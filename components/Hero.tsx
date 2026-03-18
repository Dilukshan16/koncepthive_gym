export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Image */}
      <div className="absolute inset-0 ">
        <img
          src="/images/hero.png"
          alt="Gym"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <div className="absolute items-center justify-center sm:top-[18%] sm:left-[4%] z-10 ">
        <h1 className="text-3xl md:text-5xl sm:text-5xl font-bold leading-none tracking-tight">
          <span className="text-[#D5A310]">Transform Your Body</span>
        </h1>
      </div>

      <div className="absolute mt-20 items-center justify-center sm:bottom-[18%] sm:right-[4%] z-10">
        <p className="text-3xl md:text-5xl sm:text-5xl  font-bold text-white tracking-tight">
          Start Today
        </p>
      </div>
    </section>
  );
}
