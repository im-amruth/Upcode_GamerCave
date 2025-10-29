import { Link } from "react-router-dom";

const Footer = ({ margin = true }) => {

  return (
    <footer
      className={`relative mt-32 border-t border-[#4caf50]/10 bg-[#0a0f0d]/50 backdrop-blur-sm ${margin ? "lg:ml-64" : ""
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[#e8f5e9] font-bold text-lg mb-4">GamerCave</h3>
            <p className="text-[#b9d9be] text-sm">Making student onboarding engaging, interactive, and fun.</p>
          </div>
          <div>
            <h4 className="text-[#e8f5e9] font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#features" className="text-[#b9d9be] hover:text-[#4caf50] transition-colors">Features</a></li>
              <li><a href="/#use-cases" className="text-[#b9d9be] hover:text-[#4caf50] transition-colors">Use Cases</a></li>
              <li><Link to="/games" className="text-[#b9d9be] hover:text-[#4caf50] transition-colors">Games</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#e8f5e9] font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#getting-started" className="text-[#b9d9be] hover:text-[#4caf50] transition-colors">Getting Started</a></li>
              <li><a href="/#tech-stack" className="text-[#b9d9be] hover:text-[#4caf50] transition-colors">Tech Stack</a></li>
              <li><Link to="/community" className="text-[#b9d9be] hover:text-[#4caf50] transition-colors">Community</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#e8f5e9] font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com" className="text-[#b9d9be] hover:text-[#4caf50] transition-colors">GitHub</a></li>
              <li><a href="https://discord.com" className="text-[#b9d9be] hover:text-[#4caf50] transition-colors">Discord</a></li>
              <li><a href="https://twitter.com" className="text-[#b9d9be] hover:text-[#4caf50] transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#4caf50]/10 text-center text-[#7a9681] text-sm">
          <p>© 2025 Upcode GamerCave. Built with React, Vite, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
