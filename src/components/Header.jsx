import { Bell, Menu, Search } from "lucide-react";

const Header = ({
  setSidebarOpen
}) => {

  return (
    <>
      {/* Desktop Header */}
      <header className="sticky top-0 z-40 lg:ml-64 bg-[#0a0f0d]/80 backdrop-blur-lg border-b border-[#00ff87]/10">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-[#7a9681] hover:text-[#00ff87]">
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7a9681]" />
              <input
                type="text"
                placeholder="Search projects, games..."
                className="w-full pl-10 pr-4 py-2 bg-[#1a2622] border border-[#00ff87]/10 rounded-xl text-[#e8f5e9] placeholder-[#7a9681] focus:outline-none focus:border-[#00ff87]/30 transition-colors"
              />
            </div>
          </div>

          <button className="p-2 bg-[#1a2622] rounded-xl border border-[#00ff87]/10 hover:border-[#00ff87]/30 transition-all">
            <Bell className="w-5 h-5 text-[#00ff87]" />
          </button>
        </div>
      </header>

      {/* Desktop Spacer */}
      {/* <div className="hidden md:block h-[73px]"></div> */}
    </>
  );
};

export default Header;
