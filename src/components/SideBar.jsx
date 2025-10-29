import { Gamepad, Home, Settings, Sheet, Trophy, Users, Workflow, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Gamepad, label: 'Games', href: '/games' },
    { icon: Workflow, label: 'Workshop', href: '/workshop' },
    { icon: Sheet, label: 'CheatSheet', href: '/cheatsheet' },
    { icon: Users, label: 'Community', href: '/community' },
    { icon: Trophy, label: 'Achievements', href: '/achievements' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-[#121917] border-r border-[#00ff87]/10 z-50 transition-transform duration-300 
      ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
      lg:translate-x-0`}
    >
      <div className="p-6">
        {/* === Logo Section === */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00ff87] to-[#4ade80] bg-clip-text text-transparent">
            GamerCave
          </h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-[#7a9681] hover:text-[#00ff87]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* === Navigation === */}
        <nav className="space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-[#00ff87]/10 text-[#00ff87] font-medium'
                    : 'text-[#7a9681] hover:text-[#00ff87] hover:bg-[#1a2622]'
                }`}
                onClick={() => setSidebarOpen(false)} // auto-close on mobile click
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* === Footer / User Info === */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#00ff87]/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#00ff87]/20 rounded-full flex items-center justify-center">
            <span className="text-[#00ff87] font-bold">U</span>
          </div>
          <div>
            <p className="text-[#e8f5e9] font-medium text-sm">User</p>
            <p className="text-[#7a9681] text-xs">Beta stage</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;

