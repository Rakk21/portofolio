import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "tools", "projects", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Beranda", href: "#home", id: "home" },
    { name: "Tentang", href: "#about", id: "about" },
    { name: "Tools", href: "#tools", id: "tools" },
    { name: "Proyek", href: "#projects", id: "projects" },
    { name: "Kontak", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4 md:py-5">
        {/* Logo */}
        <div className="relative group cursor-pointer select-none">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur-md opacity-40 group-hover:opacity-100 transition-all duration-300"></div>
          <h1 className="relative text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-md">
            Portfolio
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`relative px-3 py-2 font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-white after:w-full"
                    : "text-gray-300 hover:text-white after:w-0 hover:after:w-full"
                } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-pink-400 after:transition-all after:duration-300`}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-bold text-white shadow-md hover:scale-105 hover:shadow-purple-500/40 transition-all duration-300"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="bg-gray-900/95 backdrop-blur-xl border-t border-white/10 shadow-xl rounded-b-2xl mx-4 py-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-3 font-semibold text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all ${
                  activeSection === item.id ? "text-white bg-white/10" : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
