import { 
  Bell, 
  Gamepad, 
  Home, 
  Menu, 
  Search, 
  Settings, 
  Sheet, 
  Users, 
  Workflow 
} from "lucide-react";
import { useLocation } from "react-router-dom";

const Header = ({ setSidebarOpen }) => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Gamepad, label: "Games", href: "/games" },
    { icon: Workflow, label: "Workshop", href: "/workshop" },
    { icon: Sheet, label: "CheatSheet", href: "/cheatsheet" },
    { icon: Users, label: "Community", href: "/community" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const selectedNav = navItems.find((item) => item.href === location.pathname) || navItems[0];
  const SelectedIcon = selectedNav.icon;

  return (
    <header className="sticky top-0 z-40 lg:ml-64 bg-[#0a0f0d]/80 backdrop-blur-lg border-b border-[#00ff87]/10 shadow-md transition-all duration-300">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        
        {/* Sidebar toggle (mobile only) */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden text-[#7a9681] hover:text-[#00ff87] transition-all duration-300"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Active Page Indicator */}
        <div className="flex items-center gap-3 text-[#00ff87] font-semibold text-lg tracking-wide">
          <SelectedIcon className="w-5 h-5 text-[#00ff87]" />
          <span className="capitalize">{selectedNav.label}</span>
          <div className="h-1 w-10 bg-[#00ff87]/40 rounded-full ml-2 animate-pulse"></div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          {/* Search Icon */}
          {/* <button className="p-2 bg-[#1a2622]/80 rounded-xl border border-[#00ff87]/10 hover:border-[#00ff87]/30 hover:bg-[#1a2622]/90 transition-all duration-300">
            <Search className="w-5 h-5 text-[#00ff87]" />
          </button> */}

          {/* Notifications */}
          <button className="relative p-2 bg-[#1a2622]/80 rounded-xl border border-[#00ff87]/10 hover:border-[#00ff87]/30 hover:bg-[#1a2622]/90 transition-all duration-300">
            <Bell className="w-5 h-5 text-[#00ff87]" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#00ff87] rounded-full animate-ping"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
