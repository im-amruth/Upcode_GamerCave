import {
  Gamepad2,
  Code,
  Users,
  Trophy,
  TrendingUp,
  Star,
  Layout
} from "lucide-react";
import GameCard from '../components/GameCard';
import { Link } from "react-router-dom";
import { koans } from "../data/koans";
import { timeAgo } from "../utils/timeManager";
import { games } from "../data/games";

const StatCard = ({  Icon=Layout, label, value, trend }) => (
  <div className="bg-[#1a2622] border border-[#00ff87]/10 rounded-xl p-6 hover:border-[#00ff87]/30 transition-all duration-300">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-[#7a9681] text-sm mb-1">{label}</p>
        <p className="text-3xl font-bold text-[#e8f5e9]">{value}</p>
        {trend && (
          <div className="flex items-center gap-1 mt-2">
            <TrendingUp className="w-4 h-4 text-[#00ff87]" />
            <span className="text-[#00ff87] text-sm font-medium">{trend}</span>
          </div>
        )}
      </div>
      <div className="p-3 bg-[#00ff87]/10 rounded-xl">
        <Icon className="w-6 h-6 text-[#00ff87]" />
      </div>
    </div>
  </div>
);

const ActivityItem = ({ title, time, type }) => (
  <div className="flex items-center gap-4 p-4 bg-[#1a2622] rounded-xl border border-[#00ff87]/10 hover:border-[#00ff87]/20 transition-all">
    <div className="p-2 bg-[#00ff87]/10 rounded-lg">
      {type === 'code' ? <Code className="w-4 h-4 text-[#00ff87]" /> : <Gamepad2 className="w-4 h-4 text-[#00ff87]" />}
    </div>
    <div className="flex-1">
      <p className="text-[#e8f5e9] font-medium text-sm">{title}</p>
      <p className="text-[#7a9681] text-xs mt-1">{timeAgo(time) || time}</p>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0a0f0d] text-[#e8f5e9]">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00ff87]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#4ade80]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Bar */}

        {/* Dashboard Content */}
        <main className="relative p-4 sm:p-6 lg:p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#e8f5e9] mb-2">Welcome Upcoders! </h2>
            <p className="text-[#7a9681]">Here's what's happening with your projects today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard icon={Gamepad2} label="Total Games" value={games.length} trend="+5 new added" />
            <StatCard icon={Code} label="Workshop Materials" value={koans.length || 4} trend="15+ Koans" />
            <StatCard icon={Users} label="Cheatsheets" value="6" trend="+6" />
            <StatCard icon={Trophy} label="Community" value="10" trend="3 new members" />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Projects Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-[#e8f5e9]">Popular Games</h3>
                <Link to="/games" className="px-4 py-2 bg-[#00ff87] hover:bg-[#4ade80] text-[#0a0f0d] rounded-lg font-medium text-sm transition-all">
                  Explore More
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
                {games.slice(0, 2).map((game, idx) => (
                  <GameCard key={idx} {...game} />
                ))}
              </div>
            </div>

            {/* Activity Sidebar */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#e8f5e9] mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <ActivityItem title="Added more workshop" time="2025-10-29T15:30:00Z" type="code" />
                  <ActivityItem title="Added new koans" time="5 hours ago" type="code" />
                  <ActivityItem title="New game added" time="Yesterday" type="game" />
                  <ActivityItem title="New community members" time="2 days ago" type="code" />
                </div>
              </div>

              <div className="bg-[#1a2622] border border-[#00ff87]/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-[#00ff87]" />
                  <h4 className="font-bold text-[#e8f5e9]">Pro Tip</h4>
                </div>
                <p className="text-[#7a9681] text-sm leading-relaxed">
                  Use keyboard shortcuts to better experience. Press 'F11' to full screen.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
