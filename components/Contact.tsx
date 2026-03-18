export default function Contact() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* get in touch card */}
        <div
          className="rounded-2xl px-12 py-16 flex flex-col justify-center gap-10"
          style={{ border: "1px solid rgba(161, 120, 0, 0.4)" }}
        >
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-white text-2xl font-semibold">Get in Touch</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ready to start your journey? Contact us today or visit our
              facility during opening hours.
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-4">
            {/* location */}
            <div className="flex items-center gap-4">
              <img src="/images/location.png" alt="location" />
              <span className="text-gray-200 text-sm">
                Nelson place, Colombo 04
              </span>
            </div>

            {/* phone */}
            <div className="flex items-center gap-4">
              <img src="/images/phone.png" alt="phone" />
              <span className="text-gray-200 text-sm">+9476 125 452 36</span>
            </div>

            {/* clock */}
            <div className="flex items-center gap-4">
              <img src="/images/clock.png" alt="clock" />
              <span className="text-gray-200 text-sm">
                Mon - Sun 5.00AM – 11.00PM
              </span>
            </div>
          </div>
        </div>

        {/* form card */}
        <div
          className="rounded-2xl px-10 py-12 flex flex-col gap-6"
          style={{ border: "1px solid rgba(161, 120, 0, 0.4)" }}
        >
          <h2 className="text-white text-2xl font-semibold text-center">
            Send Us a Message
          </h2>

          <div className="flex flex-col gap-4 mt-2">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent border border-gray-700 rounded-xl px-5 py-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-700 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border border-gray-700 rounded-xl px-5 py-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-700 transition-colors"
              />
            </div>

            <textarea
              placeholder="Message..."
              rows={7}
              className="bg-transparent border border-gray-700 rounded-xl px-5 py-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-700 transition-colors resize-none"
            />

            {/*  Button */}
            <button
              type="button"
              className="w-full py-4 rounded-xl text-white text-base font-semibold tracking-wide hover:opacity-90 transition-opacity cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, #7a6000 0%, #b8960c 50%, #7a6000 100%)",
              }}
            >
              Send now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
