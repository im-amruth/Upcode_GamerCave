import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  // const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: "GitHub", link: "https://github.com/amruxh" },
    { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/in/amruthhh" },
    { icon: Twitter, label: "Twitter", link: "https://x.com/amruth_X" },
    { icon: Mail, label: "Email", link: "mailto:amruthhh@outlook.com" }
  ];

  const quickLinks = [
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Skills", path: "#skills" },
    { title: "Journey", path: "#journey" },
    { title: "Contact", path: "#contact" }
  ];

  return (
    <footer className="relative bg-black/70 border-t border-white/10 py-12 px-6 mt-20 overflow-hidden lg:ml-64">
                            {/* MOuse glow component */}
      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
      
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-20 w-[400px] h-[400px] bg-white/1 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-20 w-[300px] h-[300px] bg-white/1.5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className={`transform transition-all duration-500 translate-x-0 opacity-100`}>
              <h1 className="text-2xl font-bold bg-linear-to-r from-(--accent-primary) to-(--accent-secondary) bg-clip-text text-transparent">
                GamerCave
              </h1>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Full Stack Developer crafting modern web experiences with passion and precision.
            </p>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>in Kerala</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="text-white/60 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-white/5 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-110">
                    <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                </a>
              ))}
            </div>
            <p className="text-white/50 text-sm mt-6">
              Open to freelance opportunities and collaborations.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Signature */}
        <div className="mt-8 text-center">
          <p className="text-white/30 text-xs font-mono">
            Designed & Built by Amruth Krishna
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;