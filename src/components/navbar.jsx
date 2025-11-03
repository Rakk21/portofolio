import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Beranda", href: "#home", id: "home" },
    { name: "Tentang", href: "#about", id: "about" },
    { name: "Proyek", href: "#projects", id: "projects" },
    { name: "Kontak", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        active 
          ? "bg-gray-900/95 backdrop-blur-xl shadow-lg shadow-black/50 border-b border-white/10" 
          : "bg-gray-900/60 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4 md:py-5">
        {/* Logo dengan Gradient dan Glow Effect */}
        <div className="relative group cursor-pointer">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-50 group-hover:opacity-100 blur-md transition-all duration-300"></div>
          
          {/* Logo */}
          <h1 className="relative text-xl md:text-2xl font-black tracking-tight">
            <span className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-xl">
              <span className="text-white font-black">
                Portfolio
              </span>
            </span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={`relative px-5 py-2.5 font-semibold text-sm tracking-wide transition-all duration-300 rounded-xl group ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {/* Background hover effect */}
                <span className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/20"
                    : "bg-white/0 group-hover:bg-white/5"
                }`}></span>
                
                {/* Animated underline */}
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 transition-all duration-300 rounded-full ${
                  activeSection === item.id
                    ? "w-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                    : "w-0 group-hover:w-8 bg-gradient-to-r from-blue-400 to-purple-400"
                }`}></span>
                
                <span className="relative z-10">{item.name}</span>
              </a>
            </li>
          ))}
          
          {/* CTA Button */}
          <li>
            <button className="ml-4 relative group overflow-hidden px-6 py-2.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-bold text-sm text-white shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </li>
        </ul>

        {/* Hamburger Button - Mobile */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}></span>
            <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}></span>
            <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute left-0 right-0 top-full transition-all duration-500 ease-out ${
          menuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}>
          <div className="mx-4 mt-2 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <ul className="py-4">
              {menuItems.map((item, index) => (
                <li key={item.name} 
                    className="transition-all duration-300"
                    style={{ 
                      transitionDelay: menuOpen ? `${index * 50}ms` : '0ms',
                      transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)'
                    }}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveSection(item.id);
                    }}
                    className={`flex items-center justify-between px-6 py-4 font-semibold text-base transition-all duration-300 group ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-white border-l-4 border-blue-400"
                        : "text-gray-300 hover:text-white hover:bg-white/5 border-l-4 border-transparent hover:border-purple-400"
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className={`transition-transform duration-300 ${
                      activeSection === item.id ? "translate-x-0" : "translate-x-0 group-hover:translate-x-1"
                    }`}>→</span>
                  </a>
                </li>
              ))}
              
              {/* Mobile CTA */}
              <li className="px-4 pt-4 pb-2">
                <button className="w-full relative group overflow-hidden px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-bold text-base text-white shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
                  <span className="relative z-10">Hire Me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Animated bottom border */}
      {active && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
      )}
    </nav>
  );
};

// Demo wrapper untuk preview
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />
      
      {/* Demo Content */}
      <div className="pt-32 px-8">
        <div id="home" className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Section: Beranda</h2>
        </div>
        <div id="about" className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Section: Tentang</h2>
        </div>
        <div id="projects" className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Section: Proyek</h2>
        </div>
        <div id="contact" className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Section: Kontak</h2>
        </div>
      </div>
    </div>
  );
}

export default App;