import { useState, useEffect } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Ganti URL ini dengan path gambar kamu
  const heroImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse" 
             style={{ animationDuration: '8s', animationDelay: '4s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/50 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="hero relative pt-24 pb-12 flex flex-col md:flex-row items-center justify-between px-8 md:px-20 gap-12 md:gap-20 min-h-screen">
        {/* Text Content - Left Side */}
        <div 
          className={`text-left max-w-xl space-y-6 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}
        >
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300 font-medium">Available for work</span>
          </div>

          {/* Main Heading with Gradient */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-white">Halo, Saya</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Raka Aditya
            </span>
          </h2>

          {/* Job Title */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-200">
              UI/UX Designer & Web Developer
            </h3>
            <div className="flex gap-2 md:gap-3 flex-wrap">
              <span className="px-2 md:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-xs md:text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                Design
              </span>
              <span className="px-2 md:px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-xs md:text-sm font-medium border border-purple-500/30 hover:bg-purple-500/30 transition-colors">
                Development
              </span>
              <span className="px-2 md:px-3 py-1 bg-pink-500/20 text-pink-300 rounded-lg text-xs md:text-sm font-medium border border-pink-500/30 hover:bg-pink-500/30 transition-colors">
                Innovation
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed text-sm md:text-base lg:text-lg">
            Saya merancang pengalaman digital yang intuitif dan fungsional —
            menggabungkan desain estetika dengan logika pengembangan untuk
            menciptakan solusi yang bermakna.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
            <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden text-sm md:text-base">
              <span className="relative z-10">Lihat Portofolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            
            <button className="group border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 backdrop-blur-sm text-sm md:text-base">
              Download CV
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-6 md:gap-8 pt-6 border-t border-gray-700/50">
            <div className="group cursor-pointer">
              <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">5+</div>
              <div className="text-xs md:text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">50+</div>
              <div className="text-xs md:text-sm text-gray-400">Projects Done</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-pink-400 transition-colors">30+</div>
              <div className="text-xs md:text-sm text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Image Section - Right Side */}
        <div 
          className={`mt-10 md:mt-0 relative transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}
        >
          {/* Glow Effect Behind Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl filter blur-3xl opacity-40 animate-pulse"></div>
          
          {/* Main Image Container */}
          <div className="relative group">
            {/* Animated Decorative Border */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 blur-sm animate-gradient bg-[length:200%_auto]"></div>
            
            {/* Image - Ganti heroImage dengan path gambar kamu */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
              <img
                src={heroImage}
                alt="Hero"
                className="w-[280px] md:w-[380px] lg:w-[450px] h-auto relative z-10"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Floating Info Cards */}
            <div className="absolute -left-4 md:-left-6 top-8 md:top-12 bg-white/10 backdrop-blur-md px-3 md:px-4 py-2 md:py-3 rounded-xl border border-white/20 shadow-xl animate-float hover:bg-white/20 transition-colors cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-2 md:w-3 h-2 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold text-xs md:text-sm">Available</span>
              </div>
            </div>

            <div className="absolute -right-4 md:-right-6 bottom-16 md:bottom-20 bg-white/10 backdrop-blur-md px-3 md:px-4 py-2 md:py-3 rounded-xl border border-white/20 shadow-xl animate-float hover:bg-white/20 transition-colors cursor-pointer" 
                 style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl">✨</span>
                <span className="text-white font-semibold text-xs md:text-sm">Creative</span>
              </div>
            </div>

            <div className="absolute -left-6 md:-left-8 bottom-24 md:bottom-32 bg-white/10 backdrop-blur-md px-3 md:px-4 py-2 md:py-3 rounded-xl border border-white/20 shadow-xl animate-float hover:bg-white/20 transition-colors cursor-pointer" 
                 style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl">💻</span>
                <span className="text-white font-semibold text-xs md:text-sm">Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default App;