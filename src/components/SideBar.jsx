import { ArrowLeft, Gamepad, Home, Sheet, Users, Workflow, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Gamepad, label: 'Games', href: '/games' },
    { icon: Workflow, label: 'Workshop', href: '/workshop' },
    { icon: Sheet, label: 'CheatSheet', href: '/cheatsheet' },
    { icon: Users, label: 'Community', href: '/community' },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#121917] border-r border-[#00ff87]/10 z-50 transition-transform duration-300 flex flex-col
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0`}
      >
        {/* Header Section */}
        <div className="p-6 border-b border-[#00ff87]/10">
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/"
              className="p-2 rounded-lg hover:bg-[#1a2622] transition-all duration-300 group"
              title="Go back to home"
            >
              <ArrowLeft className="w-5 h-5 text-[#00ff87] group-hover:-translate-x-0.5 transition-transform duration-300" />
            </Link>

            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-[#1a2622] text-[#7a9681] hover:text-[#00ff87] transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex gap-3 items-center justify-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ff87] to-[#4ade80] flex items-center justify-center shadow-lg shadow-[#00ff87]/20">
              <Gamepad className="w-6 h-6 text-[#0a0f0d]" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00ff87] to-[#4ade80] bg-clip-text text-transparent">
              GamerCave
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto px-4 py-4 scrollbar-thin scrollbar-thumb-[#00ff87]/20 scrollbar-track-transparent">
          <div className="px-3 mb-2">
            <span className="text-xs font-semibold text-[#7a9681] uppercase tracking-wider">
              Navigation
            </span>
          </div>

          <nav className="space-y-1 mb-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative ${
                    isActive
                      ? 'bg-[#00ff87]/10 text-[#00ff87] font-medium shadow-lg shadow-[#00ff87]/5'
                      : 'text-[#7a9681] hover:text-[#00ff87] hover:bg-[#1a2622]'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#00ff87] rounded-r-full" />
                  )}

                  <item.icon
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isActive ? '' : 'group-hover:scale-110'
                    }`}
                  />
                  <span className="flex-1">{item.label}</span>

                  {item.badge && (
                    <span className="px-2 py-0.5 bg-[#00ff87]/20 text-[#00ff87] text-xs font-bold rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#00ff87]/10 bg-[#0d1410] text-center">
          <p className="text-xs text-[#7a9681]">© 2025 GamerCave</p>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
