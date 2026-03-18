"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["home", "about", "services", "contact"];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[100%] max-w-8xl sm:pr-20 sm:pl-20">
      <div className="flex items-center justify-between bg-[#111111] rounded-full px-6 shadow-lg border border-gray-800">

        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="Gym Logo"
          className="h-16 w-16 object-contain"
        />

        {/* Desktop nav */}
        <div className="hidden md:flex text-white items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setActive(item)}
              className={`text-sm font-medium transition ${
                active === item
                  ? "text-[#D5A310]"
                  : "hover:text-yellow-400"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile nav */}
        <div className="md:hidden sm:hidden lg:hidden text-white">
          {isOpen ? (
            <X size={28} onClick={() => setIsOpen(false)} />
          ) : (
            <Menu size={28} onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[70%] bg-[#111111] z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start gap-8 p-8 text-white mt-20">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => {
                setActive(item);
                setIsOpen(false); 
              }}
              className={`text-lg font-medium ${
                active === item
                  ? "text-[#D5A310]"
                  : "hover:text-[#D5A310]"
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