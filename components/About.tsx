export default function About() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Left — Stacked Images */}
        <div className="relative w-full md:w-[45%] h-[700px] flex-shrink-0">
          {/* Top image */}
          <div className="absolute top-0 left-0 w-[62%] rounded-2xl overflow-hidden border border-yellow-600/40 shadow-xl z-10">
            <img
              src="/images/about1.png"
              alt="Athlete squatting"
              className="w-full h-[380px] object-cover"
            />
          </div>
          {/* Bottom image — offset right and down */}
          <div className="absolute bottom-0 right-0 w-[72%] rounded-2xl overflow-hidden border border-yellow-600/40 shadow-2xl z-20">
            <img
              src="/images/about2.png"
              alt="Athlete doing pull-ups"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>

        {/* Right — Text Content */}
        <div className="w-full md:w-[55%] flex flex-col gap-6">

          {/* Badge */}
          <div className="inline-flex w-fit items-center gap-1 border border-yellow-600/60 rounded-full px-4 py-1.5 text-sm font-medium">
            <span className="text-yellow-500 font-semibold">About</span>
            <span className="text-white">Us</span>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-5 text-gray-200 text-base leading-relaxed">
            <p className="text-lg font-medium text-white">
              We are more than just a gym — we are a lifestyle transformation hub.
            </p>
            <p>
              At our fitness center, we combine cutting-edge equipment, expert trainers,
              and a motivating environment to help you unlock your full potential. Whether
              you're starting your fitness journey or pushing your limits, we provide the
              support, guidance, and energy you need to succeed.
            </p>
            <p>
              Our mission is simple: to empower you to become stronger, healthier, and
              more confident every single day.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mt-4">
            {[
              { value: "500+", label: "Members" },
              { value: "15+", label: "Professional\nTrainers" },
              { value: "5+", label: "Years Experience" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#1a1a0f] border border-yellow-900/40 rounded-2xl px-6 py-4 flex flex-col gap-1 min-w-[130px]"
              >
                <span className="text-white text-xl font-bold">{stat.value}</span>
                <span className="text-gray-300 text-sm font-medium whitespace-pre-line leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}