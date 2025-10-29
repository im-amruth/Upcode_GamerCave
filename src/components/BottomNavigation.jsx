import { Code, Mail, Star, TrendingUp, User } from "lucide-react";
import { useEffect, useState } from "react";

const BottomNavigation = () => {
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { name: "About", path: "#about", icon: User },
    { name: "Projects", path: "#projects", icon: Code },
    { name: "Skills", path: "#skills", icon: Star },
    { name: "Journey", path: "#journey", icon: TrendingUp },
    { name: "Contact", path: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.path.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="md:hidden fixed bottom-6 left-0 right-0 flex justify-center items-center z-50 px-4">
      <nav className="relative bg-black/95 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.6)] p-2">
        {/* Top glow effect */}
        <div className="absolute -top-px left-1/2 -translate-x-1/2 w-32 h-0.5 bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
        
        <div className="flex gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.path.substring(1);
            const Icon = item.icon;
            
            return (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setActiveSection(item.path.substring(1))}
                className={`relative flex flex-col items-center justify-center px-4 py-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {/* Active background glow */}
                {isActive && (
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-lg"></div>
                )}
                
                <Icon className={`relative w-5 h-5 mb-1 transition-transform ${
                  isActive ? "scale-110" : ""
                }`} />
                <span className={`relative text-[10px] font-medium tracking-wide ${
                  isActive ? "font-semibold" : ""
                }`}>
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default BottomNavigation;