export default function Membership() {
  const plans = [
    {
      title: "Monthly",
      price: "$20",
      features: ["Full Gym Access", "Locker Room Access"],
    },
    {
      title: "06 Months",
      price: "$40",
      features: ["Full Gym Access", "Locker Room Access", "Community Benefits"],
    },
    {
      title: "Annual",
      price: "$70",
      features: [
        "Full Gym Access",
        "Locker Room Access",
        "Community Benefits",
        "Free Guest Passes",
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
        {/*  Badge */}
        <div className="inline-flex items-center gap-2 border border-[#D5A310]/70 rounded-full px-5 py-1.5 text-sm font-medium">
          <span className="text-[#D5A310] font-semibold">Membership</span>
          <span className="text-white">plans</span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="relative rounded-2xl overflow-hidden px-10 py-14 flex flex-col gap-10"
              style={{
                background:
                  "radial-gradient(ellipse at top left, #3a2e00 0%, #1a1500 40%, #0d0d0d 100%)",
                border: "1px solid rgba(161, 120, 0, 0.25)",
              }}
            >
              {/*  Title */}
              <h3 className="text-white text-4xl font-bold tracking-tight">
                {plan.title}
              </h3>

              {/* Price */}
              <p className="text-yellow-500 text-5xl font-extrabold">
                {plan.price}
              </p>

              <div className="h-px bg-[#D5A310]/30 w-full" />

              {/* Features */}
              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-white text-base"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D5A310] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
