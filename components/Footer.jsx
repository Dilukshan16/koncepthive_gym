export default function Footer() {
  return (
    <footer
      style={{ background: "#1e1a00" }}
      className="text-white px-6 md:px-16 py-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* logo and description */}
        <div className="flex flex-col gap-4 max-w-xl">
          <img
            src="/images/logo.png"
            alt="Fitness Logo"
            className="h-16 w-16 object-contain"
          />
          <p className="text-gray-300 text-sm leading-relaxed">
            Transform your body and mind with a premium fitness experience
            designed to push your limits and redefine your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* social links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white text-base font-semibold">Follow us on</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com"
                aria-label="Facebook"
                className="hover:text-yellow-500 transition-colors"
              >
                <img src="/images/Facebook.png" alt="" />
              </a>

              <a
                href="https://www.twitter.com"
                aria-label="Twitter"
                className="hover:text-yellow-500 transition-colors"
              >
                <img src="/images/Twitter.png" alt="" />
              </a>

              <a
                href=" https://www.instagram.com"
                aria-label="Instagram"
                className="hover:text-yellow-500 transition-colors"
              >
                <img src="/images/Instagram.png" alt="" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white text-base font-semibold">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {[
                "Home",
                "About Us",
                "Services",
                "Facilities",
                "Membership plan",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 text-sm hover:text-yellow-500 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* newsletter */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white text-base font-semibold">
              Stay Up To Date
            </h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border border-yellow-700/60 rounded-l-md px-4 py-3 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
              />
              <button
                type="button"
                className="px-5 py-3 text-white text-sm font-bold tracking-wider rounded-r-md hover:opacity-90 transition-opacity"
                style={{ background: "#7a6200" }}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-900/30 pt-6 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Fitness. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
