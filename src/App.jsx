import { useState, useEffect } from 'react';

// Mock data - ganti dengan import asli: import Image, { listTools, listProyek } from './data'
const Image = {
  HeroImage: "/assets/rak.jpg",
};


const listTools = [
  { id: 1, gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", nama: "VS Code", ket: "Code Editor" },
  { id: 2, gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", nama: "React JS", ket: "Framework" },
  { id: 3, gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", nama: "Next JS", ket: "Framework" },
  { id: 4, gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", nama: "Tailwind", ket: "Framework" },
  { id: 5, gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", nama: "Bootstrap", ket: "Framework" },
  { id: 6, gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", nama: "Javascript", ket: "Language" },
  { id: 7, gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", nama: "Node JS", ket: "Runtime" },
  { id: 8, gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", nama: "Github", ket: "Repository" },
];

const listProyek = [
  { id: 1, gambar: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800", nama: "Website Sekolah", desk: "Platform pendidikan modern dengan fitur interaktif dan responsif", tools: ["HTML", "CSS", "Javascript", "AOS"] },
  { id: 2, gambar: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800", nama: "Company Profile", desk: "Website profesional untuk meningkatkan brand awareness perusahaan", tools: ["HTML", "CSS", "Javascript", "Swiper"] },
  { id: 3, gambar: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800", nama: "Web Pernikahan 2.0", desk: "Undangan digital elegan dengan animasi yang memukau", tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"] },
  { id: 4, gambar: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800", nama: "Website Course", desk: "Platform pembelajaran online yang user-friendly", tools: ["Vite", "ReactJS", "Bootstrap"] },
  { id: 5, gambar: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800", nama: "Web Portfolio", desk: "Showcase karya dengan desain modern dan interaktif", tools: ["HTML", "CSS", "Javascript", "Bootstrap"] },
  { id: 6, gambar: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800", nama: "Company Profile 2.0", desk: "Website bisnis dengan animasi smooth menggunakan teknologi terbaru", tools: ["NextJS", "TailwindCSS", "Framermotion"] },
];

function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['home', 'about', 'tools', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/15 rounded-full filter blur-3xl animate-pulse" 
             style={{ animationDuration: '8s', animationDelay: '4s' }}></div>
      </div>

      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            {/* Left Content */}
            <div className={`flex-1 max-w-2xl space-y-6 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-gray-300 font-medium">Available for work</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="text-white">Halo, Saya</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Raka Aditya
                </span>
              </h1>

              <div className="space-y-3">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-200">
                  UI/UX Designer & Web Developer
                </h2>
                <div className="flex gap-3 flex-wrap">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors cursor-pointer">
                    Design
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium border border-purple-500/30 hover:bg-purple-500/30 transition-colors cursor-pointer">
                    Development
                  </span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-lg text-sm font-medium border border-pink-500/30 hover:bg-pink-500/30 transition-colors cursor-pointer">
                    Innovation
                  </span>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-2xl">
                Saya merancang pengalaman digital yang intuitif dan fungsional — menggabungkan desain estetika dengan logika pengembangan untuk menciptakan solusi yang bermakna.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#projects" className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden text-center">
                  <span className="relative z-10">Lihat Portofolio</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
                
                <a href="#contact" className="group border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 backdrop-blur-sm text-center">
                  Hubungi Saya
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>

              <div className="flex gap-8 pt-6 border-t border-gray-700/50">
                <div className="group cursor-pointer">
                  <div className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">50+</div>
                  <div className="text-sm text-gray-400">Projects Done</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-3xl font-bold text-white group-hover:text-pink-400 transition-colors">30+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className={`flex-1 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl filter blur-3xl opacity-40 animate-pulse"></div>
                
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 blur-sm"></div>
                  
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img src={Image.HeroImage} alt="Raka Aditya" className="w-full h-auto relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="absolute -left-6 top-12 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 shadow-xl animate-float">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white font-semibold text-sm">Available</span>
                    </div>
                  </div>

                  <div className="absolute -right-6 bottom-20 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">✨</span>
                      <span className="text-white font-semibold text-sm">Creative</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tentang <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Saya</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Passion dalam menciptakan pengalaman digital yang memorable
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    🎨
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Creative Design</h3>
                    <p className="text-gray-400">Menciptakan desain yang tidak hanya indah, tapi juga fungsional dan user-friendly</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    💻
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Clean Code</h3>
                    <p className="text-gray-400">Menulis kode yang bersih, terstruktur, dan mudah di-maintain untuk jangka panjang</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    🚀
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Fast Performance</h3>
                    <p className="text-gray-400">Optimasi performa untuk memberikan pengalaman pengguna yang cepat dan responsif</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
              
              {[
                { skill: 'UI/UX Design', level: 90, color: 'blue' },
                { skill: 'Frontend Development', level: 85, color: 'purple' },
                { skill: 'React & Next.js', level: 88, color: 'pink' },
                { skill: 'Responsive Design', level: 95, color: 'cyan' }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white font-semibold">{item.skill}</span>
                    <span className="text-gray-400">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: isVisible ? `${item.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS SECTION */}
      <section id="tools" className="min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tools & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Teknologi yang saya gunakan untuk membangun project
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {listTools.map((tool, index) => (
              <div
                key={tool.id}
                className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform p-3">
                    <img src={tool.gambar} alt={tool.nama} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{tool.nama}</h3>
                    <p className="text-gray-400 text-sm">{tool.ket}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="min-h-screen py-20 px-6 md:px-12 lg:px-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Project <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Beberapa project yang telah saya kerjakan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listProyek.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.gambar} 
                    alt={project.nama}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.nama}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {project.desk}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-lg text-xs border border-blue-500/20">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button className="w-full mt-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Mari bekerja sama untuk mewujudkan project Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  📧
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Email</h3>
                  <p className="text-gray-400">raka@example.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  📱
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Phone</h3>
                  <p className="text-gray-400">+62 812-3456-7890</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Nama Lengkap"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
            
            <input 
              type="text" 
              placeholder="Subject"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
            />
            
            <textarea 
              rows={5}
              placeholder="Pesan Anda"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
            ></textarea>
            
            <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50">
              Kirim Pesan
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-white/10 bg-gray-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Raka Aditya. Made with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Portfolio;