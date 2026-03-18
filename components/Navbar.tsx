"use client";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="flex items-center justify-between bg-[#111111] rounded-full px-6 shadow-lg border border-gray-800">

        <div className="flex items-center">
          <img src="/images/logo.png" alt="Gym Logo" className="h-20 w-20 object-contain" />
        </div>

        <div className="text-white flex items-center gap-8">
          {["home", "about", "services", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setActive(item)}
              className={`text-sm font-medium transition ${
                active === item ? "text-[#D5A310]" : "hover:text-yellow-400"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}