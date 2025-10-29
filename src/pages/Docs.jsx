import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Gamepad2, BookOpen, Users, Zap, Layers, Github, Terminal, Puzzle, Trophy, Clock, Heart } from 'lucide-react';
import Footer from '../components/Footer';

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

  const features = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Interactive Gaming",
      description: "Engage with coding mini-games that make learning fun and addictive. Perfect for breaking the ice during onboarding."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Coding Challenges",
      description: "Hands-on coding exercises that help students learn by doing. From basics to advanced concepts."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Workshop Resources",
      description: "Instant access to all workshop materials, cheat sheets, and learning guides in one centralized location."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Connect with fellow learners, share projects, and collaborate on coding challenges together."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Self-Paced Learning",
      description: "Learn at your own speed with modular content that adapts to your skill level and interests."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Achievement System",
      description: "Track your progress with badges and rewards that motivate continuous learning and engagement."
    }
  ];

  const techStack = [
    { name: "React + Vite", icon: <Code />, description: "Fast, modern frontend framework" },
    { name: "Tailwind CSS", icon: <Layers />, description: "Utility-first styling framework" },
    { name: "Lucide React", icon: <Heart />, description: "Beautiful, consistent icons" }
  ];

  const useCases = [
    {
      title: "Student Onboarding",
      description: "Transform boring orientation sessions into engaging, interactive experiences that students actually enjoy.",
      icon: <Users />
    },
    {
      title: "Coding Clubs",
      description: "Serve as a continuous learning hub for coding clubs with expandable content and challenges.",
      icon: <Terminal />
    },
    {
      title: "Hackathons",
      description: "Provide quick access to resources, tools, and mini-challenges during intense coding events.",
      icon: <Zap />
    },
    {
      title: "Academic Programs",
      description: "Support computer science courses with supplementary interactive learning materials.",
      icon: <BookOpen />
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f0d] text-[#e8f5e9] overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-80 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4caf50]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-40 w-[400px] h-[400px] bg-[#81c784]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -right-40 w-[500px] h-[500px] bg-[#66bb6a]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0f0d]/90 backdrop-blur-lg shadow-lg shadow-[#4caf50]/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`transform transition-all duration-500 ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
              <Link to="/" className="text-2xl font-bold text-[#e8f5e9] hover:text-[#4caf50] transition-colors">
                GamerCave
              </Link>
            </div>
            
            <nav className={`hidden md:flex items-center gap-8 transform transition-all duration-500 delay-100 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
              <a href="#features" className="text-[#b9d9be] hover:text-[#4caf50] transition-colors">Features</a>
              <a href="#use-cases" className="text-[#b9d9be] hover:text-[#4caf50] transition-colors">Use Cases</a>
              <a href="#tech-stack" className="text-[#b9d9be] hover:text-[#4caf50] transition-colors">Tech Stack</a>
            </nav>

            <div className={`transform transition-all duration-500 delay-200 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
              <Link to="/dashboard" className="px-6 py-2.5 bg-[#4caf50] hover:bg-[#66bb6a] text-[#0a0f0d] font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#4caf50]/50">
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
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-[#1a2622] border border-[#4caf50]/20 rounded-full text-sm text-[#81c784] transform transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4caf50] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4caf50]"></span>
              </span>
              <span>Now in Beta</span>
            </div>

            {/* Main Heading */}
            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight transform transition-all duration-700 delay-100 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="block text-[#e8f5e9]">
                Upcode GamerCave
              </span>
            </h1>

            {/* Description */}
            <p className={`text-lg sm:text-xl md:text-2xl text-[#b9d9be] max-w-3xl mx-auto leading-relaxed transform transition-all duration-700 delay-200 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Your ultimate destination for gamers, coders, and creators. 
              <span className="block mt-2 text-[#81c784]">Dive into a world where coding meets gaming!</span>
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 transform transition-all duration-700 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Link to="/dashboard" className="w-full sm:w-auto px-8 py-4 bg-[#4caf50] hover:bg-[#66bb6a] text-[#0a0f0d] font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#4caf50]/50 text-lg">
                Get started
              </Link>
              <Link to="/games" className="w-full sm:w-auto px-8 py-4 bg-[#1a2622] hover:bg-[#121917] backdrop-blur-sm border border-[#4caf50]/20 text-[#e8f5e9] font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:border-[#4caf50]/40 text-lg">
                Explore Games
              </Link>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto transform transition-all duration-700 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="text-center p-4 bg-[#1a2622]/50 rounded-xl border border-[#4caf50]/10 hover:border-[#4caf50]/30 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-[#4caf50]">10K+</div>
                <div className="text-[#7a9681] mt-1 text-sm md:text-base">Active Users</div>
              </div>
              <div className="text-center p-4 bg-[#1a2622]/50 rounded-xl border border-[#4caf50]/10 hover:border-[#4caf50]/30 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-[#4caf50]">500+</div>
                <div className="text-[#7a9681] mt-1 text-sm md:text-base">Projects</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1 p-4 bg-[#1a2622]/50 rounded-xl border border-[#4caf50]/10 hover:border-[#4caf50]/30 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-[#4caf50]">24/7</div>
                <div className="text-[#7a9681] mt-1 text-sm md:text-base">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Statement Section */}
        <div className="max-w-6xl mx-auto mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#e8f5e9] mb-4">The Problem We Solve</h2>
            <p className="text-xl text-[#b9d9be] max-w-3xl mx-auto">Traditional onboarding lacks engagement. We're changing that.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a2622]/50 p-8 rounded-2xl border border-red-500/20">
              <div className="text-red-400 font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">✕</span>
                Traditional Onboarding
              </div>
              <ul className="space-y-3 text-[#b9d9be]">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Boring presentations that lose attention</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Low engagement and motivation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Scattered resources and materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Students feel disconnected and anxious</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1a2622]/50 p-8 rounded-2xl border border-[#4caf50]/20">
              <div className="text-[#4caf50] font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#4caf50]/20 flex items-center justify-center">✓</span>
                GamerCave Solution
              </div>
              <ul className="space-y-3 text-[#b9d9be]">
                <li className="flex items-start gap-2">
                  <span className="text-[#4caf50] mt-1">•</span>
                  <span>Interactive games make learning fun</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4caf50] mt-1">•</span>
                  <span>High engagement through gamification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4caf50] mt-1">•</span>
                  <span>Centralized hub for all resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4caf50] mt-1">•</span>
                  <span>Students feel connected and motivated</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="max-w-6xl mx-auto mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#e8f5e9] mb-4">Powerful Features</h2>
            <p className="text-xl text-[#b9d9be] max-w-2xl mx-auto">Everything you need to make onboarding engaging and effective</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-[#1a2622]/50 p-6 rounded-2xl border border-[#4caf50]/10 hover:border-[#4caf50]/30 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-[#4caf50] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#e8f5e9] mb-2">{feature.title}</h3>
                <p className="text-[#b9d9be]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div id="use-cases" className="max-w-6xl mx-auto mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#e8f5e9] mb-4">Scalable for Every Need</h2>
            <p className="text-xl text-[#b9d9be] max-w-2xl mx-auto">From onboarding to continuous learning, GamerCave grows with you</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-[#1a2622]/50 p-8 rounded-2xl border border-[#4caf50]/10 hover:border-[#4caf50]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-[#4caf50] bg-[#4caf50]/10 p-3 rounded-lg">
                    {useCase.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#e8f5e9] mb-2">{useCase.title}</h3>
                    <p className="text-[#b9d9be]">{useCase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div id="tech-stack" className="max-w-6xl mx-auto mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#e8f5e9] mb-4">Built with Modern Tech</h2>
            <p className="text-xl text-[#b9d9be] max-w-2xl mx-auto">Fast, scalable, and ready for hackathons</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="bg-[#1a2622]/50 p-8 rounded-2xl border border-[#4caf50]/10 hover:border-[#4caf50]/30 transition-all duration-300 text-center group hover:transform hover:scale-105"
              >
                <div className="text-[#4caf50] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 flex items-center justify-center">
                    {React.cloneElement(tech.icon, { size: 48 })}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#e8f5e9] mb-2">{tech.name}</h3>
                <p className="text-[#b9d9be]">{tech.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#1a2622]/50 p-8 rounded-2xl border border-[#4caf50]/10">
            <h3 className="text-2xl font-bold text-[#e8f5e9] mb-4">Why This Stack?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-[#b9d9be]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={20} className="text-[#4caf50]" />
                  <span className="font-semibold text-[#e8f5e9]">Fast Development</span>
                </div>
                <p className="text-sm">Rapid prototyping perfect for hackathons</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Layers size={20} className="text-[#4caf50]" />
                  <span className="font-semibold text-[#e8f5e9]">Highly Scalable</span>
                </div>
                <p className="text-sm">Modular design that grows with your needs</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Heart size={20} className="text-[#4caf50]" />
                  <span className="font-semibold text-[#e8f5e9]">Easy Maintenance</span>
                </div>
                <p className="text-sm">Clean code that's simple to update</p>
              </div>
            </div>
          </div>
        </div>

        
      </main>

      <Footer margin={false} />
    </div>
  );
};

export default Docs;