"use client";
import toast from "react-hot-toast";
import { useState } from "react";
export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setErrors({});

    setLoading(true);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "c32e9505-3b95-46f1-bdb0-f1774d313ff3",
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });
    setLoading(false);
    const result = await response.json();
    if (result.success) {
      toast.success("Message sent successfully!");
      e.currentTarget.reset();
    } else {
      toast.error("Something went wrong!");
    }
  }
  return (
    <section id="contact" className="bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* get in touch  */}
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

        {/* form */}
        <div
          className="rounded-2xl px-10 py-12 flex flex-col gap-6"
          style={{ border: "1px solid rgba(161, 120, 0, 0.4)" }}
        >
          <h2 className="text-white text-2xl font-semibold text-center">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                minLength={3}
                pattern="^[A-Za-z\s]+$"
                title="Name should contain only letters"
                className="bg-transparent border border-gray-700 rounded-xl px-5 py-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-700 transition-colors
                focus:shadow-[0_0_10px_rgba(213,163,16,0.3)] transition-all"
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                className="bg-transparent border border-gray-700 rounded-xl px-5 py-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-700 transition-colors
                focus:shadow-[0_0_10px_rgba(213,163,16,0.3)] transition-all"
              />
            </div>

            <textarea
              placeholder="Message..."
              name="message"
              required
              minLength={10}
              rows={7}
              className="bg-transparent border border-gray-700 rounded-xl px-5 py-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-700 transition-colors resize-none
              focus:shadow-[0_0_10px_rgba(213,163,16,0.3)] transition-all"
            />

            {/*  Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white text-base font-semibold tracking-wide hover:opacity-90 transition-opacity cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, #7a6000 0%, #b8960c 50%, #7a6000 100%)",
              }}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                "Send now"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
