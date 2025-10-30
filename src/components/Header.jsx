import React, { useState } from "react";
import { 
  Bell, 
  Gamepad, 
  Home, 
  Menu, 
  Settings, 
  Sheet, 
  Users, 
  Workflow,
  Trophy,
  MessageCircle,
  Gift,
  Star,
  X
} from "lucide-react";

const Header = ({ setSidebarOpen }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "achievement",
      icon: Trophy,
      title: "New Achievement Unlocked!",
      message: "You've completed 10 games in a row",
      time: "2 min ago",
      read: false,
      color: "emerald"
    },
    {
      id: 2,
      type: "message",
      icon: MessageCircle,
      title: "New Message",
      message: "Alex commented on your workshop project",
      time: "15 min ago",
      read: false,
      color: "teal"
    },
    {
      id: 3,
      type: "reward",
      icon: Gift,
      title: "Daily Reward Available",
      message: "Claim your streak bonus now!",
      time: "1 hour ago",
      read: false,
      color: "green"
    },
    {
      id: 4,
      type: "update",
      icon: Star,
      title: "New Game Added",
      message: "Check out 'Pattern Master' in the games section",
      time: "3 hours ago",
      read: true,
      color: "cyan"
    },
    {
      id: 5,
      type: "community",
      icon: Users,
      title: "Community Challenge",
      message: "Join the weekend coding challenge",
      time: "5 hours ago",
      read: true,
      color: "emerald"
    }
  ]);

  // Mock location for demo
  const location = { pathname: "/dashboard" };

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

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getColorClasses = (color) => {
    const colors = {
      emerald: "from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-400",
      teal: "from-teal-500/20 to-teal-600/20 border-teal-500/30 text-teal-400",
      green: "from-green-500/20 to-green-600/20 border-green-500/30 text-green-400",
      cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-400"
    };
    return colors[color] || colors.emerald;
  };

  return (
    <header className="sticky top-0 z-40 lg:ml-64 bg-[#0a0f0d]/80 backdrop-blur-lg border-b border-[#00ff87]/10 shadow-md transition-all duration-300">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        
        {/* Sidebar toggle (mobile only) */}
        <button
          onClick={() => setSidebarOpen?.(true)}
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
        <div className="flex items-center gap-3 relative">
          {/* Notifications */}
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 bg-[#1a2622]/80 rounded-xl border border-[#00ff87]/10 hover:border-[#00ff87]/30 hover:bg-[#1a2622]/90 transition-all duration-300"
          >
            <Bell className="w-5 h-5 text-[#00ff87]" />
            {unreadCount > 0 && (
              <>
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#00ff87] rounded-full animate-ping"></span>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white text-xs flex items-center justify-center font-bold shadow-lg">
                  {unreadCount}
                </span>
              </>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 z-40"
                onClick={() => setShowNotifications(false)}
              ></div>

              {/* Dropdown Panel */}
              <div className="absolute top-full right-0 mt-2 w-96 max-h-[32rem] overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900/95 to-teal-900/95 backdrop-blur-xl border-2 border-emerald-500/30 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-emerald-800/50 to-teal-800/50 backdrop-blur-sm px-4 py-3 border-b border-emerald-500/20">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-emerald-100">Notifications</h3>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllAsRead}
                        className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                      >
                        Mark all as read
                      </button>
                    )}
                  </div>
                </div>

                {/* Notifications List */}
                <div className="overflow-y-auto max-h-[28rem] custom-scrollbar">
                  {notifications.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-emerald-400/60">
                      <Bell className="w-12 h-12 mb-3 opacity-40" />
                      <p className="text-sm">No notifications</p>
                    </div>
                  ) : (
                    <div className="p-2 space-y-2">
                      {notifications.map((notification) => {
                        const NotifIcon = notification.icon;
                        return (
                          <div
                            key={notification.id}
                            onClick={() => markAsRead(notification.id)}
                            className={`group relative p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                              notification.read 
                                ? 'bg-emerald-950/30 border-emerald-500/10 opacity-70 hover:opacity-100' 
                                : 'bg-gradient-to-br from-emerald-800/40 to-teal-800/40 border-emerald-500/30 hover:border-emerald-400/50 shadow-lg'
                            }`}
                          >
                            <div className="flex gap-3">
                              {/* Icon */}
                              <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${getColorClasses(notification.color)} border flex items-center justify-center`}>
                                <NotifIcon className="w-5 h-5" />
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2 mb-1">
                                  <h4 className="text-sm font-semibold text-emerald-100 truncate">
                                    {notification.title}
                                  </h4>
                                  {!notification.read && (
                                    <div className="flex-shrink-0 w-2 h-2 bg-emerald-400 rounded-full mt-1"></div>
                                  )}
                                </div>
                                <p className="text-xs text-emerald-300/80 mb-2 line-clamp-2">
                                  {notification.message}
                                </p>
                                <span className="text-xs text-emerald-400/60">
                                  {notification.time}
                                </span>
                              </div>

                              {/* Delete Button */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  deleteNotification(notification.id);
                                }}
                                className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-500/20 rounded-lg"
                              >
                                <X className="w-4 h-4 text-red-400" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(16, 185, 129, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(16, 185, 129, 0.5);
        }
      `}</style>
    </header>
  );
};

export default Header;