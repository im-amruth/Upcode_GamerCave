import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Docs = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-(--bg-primary) text-(--text-primary) overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-80 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-(--accent-primary)/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0f0d]/90 backdrop-blur-lg shadow-lg shadow-(--accent-primary)/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`transform transition-all duration-500 ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
              <h1 className="text-2xl font-bold text-(--text-primary)">
                GamerCave
              </h1>
            </div>
            
            <nav className={`hidden md:flex items-center gap-8 transform transition-all duration-500 delay-100 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
              <a href="#features" className="text-[#b9d9be] hover:text-(--accent-primary) transition-colors">Features</a>
              <a href="#community" className="text-[#b9d9be] hover:text-(--accent-primary) transition-colors">Community</a>
              <a href="#docs" className="text-[#b9d9be] hover:text-(--accent-primary) transition-colors">Docs</a>
            </nav>

            <div className={`transform transition-all duration-500 delay-200 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
              <Link to="/dashboard" className="px-6 py-2.5 bg-(--accent-primary) hover:bg-(--accent-secondary) text-[#0a0f0d] font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-(--accent-primary)/50">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-[#1a2622] border border-(--accent-primary)/20 rounded-full text-sm text-(--accent-secondary) transform transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--accent-primary) opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-(--accent-primary)"></span>
              </span>
              <span>Now in Beta</span>
            </div>

            {/* Main Heading */}
            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight transform transition-all duration-700 delay-100 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="block bg-linear-to-r from-(--accent-primary)/10 via-(--text-primary) to-(--accent-tertiary)/30 bg-clip-text text-transparent mt-2">
                Upcode GamerCave
              </span>
            </h1>

            {/* Description */}
            <p className={`text-lg sm:text-xl md:text-2xl text-[#b9d9be] max-w-3xl mx-auto leading-relaxed transform transition-all duration-700 delay-200 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Your ultimate destination for gamers, coders, and creators. 
              <span className="block mt-2 text-(--accent-secondary)">Dive into a world where coding meets gaming!</span>
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 transform transition-all duration-700 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Link to="/dashboard" className="w-full sm:w-auto px-8 py-4 bg-(--accent-primary) hover:bg-(--accent-secondary) text-[#0a0f0d] font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-(--accent-primary)/50 text-lg">
                Get started
              </Link>
              <Link to="/games" className="w-full sm:w-auto px-8 py-4 bg-[#1a2622] hover:bg-[#121917] backdrop-blur-sm border border-(--accent-primary)/20 text-[#e8f5e9] font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:border-(--accent-primary)/40 text-lg">
                Explore Games
              </Link>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto transform transition-all duration-700 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="text-center p-4 bg-[#1a2622]/50 rounded-xl border border-(--accent-primary)/10">
                <div className="text-3xl md:text-4xl font-bold text-(--accent-primary)">10K+</div>
                <div className="text-[#7a9681] mt-1 text-sm md:text-base">Active Users</div>
              </div>
              <div className="text-center p-4 bg-[#1a2622]/50 rounded-xl border border-(--accent-primary)/10">
                <div className="text-3xl md:text-4xl font-bold text-(--accent-primary)">500+</div>
                <div className="text-[#7a9681] mt-1 text-sm md:text-base">Projects</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1 p-4 bg-[#1a2622]/50 rounded-xl border border-(--accent-primary)/10">
                <div className="text-3xl md:text-4xl font-bold text-(--accent-primary)">24/7</div>
                <div className="text-[#7a9681] mt-1 text-sm md:text-base">Support</div>
              </div>
            </div>
          </div>
        </div>

        </main>
    </div>
  );
};

export default Docs;