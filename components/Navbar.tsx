export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="flex items-center justify-between bg-[#111111] rounded-full px-6 shadow-lg border border-gray-800">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Gym Logo"
            className="h-20 w-20 object-contain"
          />
        </div>

        {/* Nav Links */}
        <div className="text-white flex items-center gap-8">
          <a href="#" className=" text-sm font-medium hover:text-yellow-400 transition-colors duration-200">
            Home
          </a>
          <a href="#" className=" text-sm font-medium hover:text-yellow-400 transition-colors duration-200">
            About
          </a>
          <a href="#" className=" text-sm font-medium hover:text-yellow-400 transition-colors duration-200">
            Services
          </a>
          <a href="#" className=" text-sm font-medium hover:text-yellow-400 transition-colors duration-200">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}