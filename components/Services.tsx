export default function Services() {
  const services = [
    {
      title: "Personal Training",
      description:
        "Get one-on-one guidance from expert trainers tailored to your fitness goals for faster, more effective results.",
      icon: (
        <img src="/images/personaltrain.png" alt="" />
      ),
    },
    {
      title: "Weight Training",
      description:
        "Build strength and muscle with structured weight programs designed for all experience levels.",
      icon: (
        <img src="images/weighttrain.png" alt="" />
      ),
    },
    {
      title: "Yoga Classes",
      description:
        "Enhance flexibility, balance, and mental clarity through guided yoga sessions in a calming environment.",
      icon: (
        <img src="images/yoga.png" alt="" />
      ),
    },
  ];

  return (
    <section id="services" className="bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">

        {/* Section Badge */}
        <div className="inline-flex items-center gap-1 border border-[#D5A310]/70 rounded-full px-5 py-1.5 text-sm font-medium">
          <span className="text-[#D5A310] font-semibold">Our</span>
          <span className="text-white">Services</span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#111111] border border-gray-800 rounded-2xl flex flex-col items-center text-center px-8 py-12 gap-6 hover:border-yellow-700/50 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="opacity-90">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-[#D5A310] text-xl font-semibold">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}