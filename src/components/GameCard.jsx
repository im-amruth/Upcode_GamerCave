import { useState } from "react";
import { Clock, Users } from "lucide-react";

const GameCard = ({ title, Icon, previewImage, gamePath, subtitle, body, difficulty, players, playtime }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-[#1a2622]/50 rounded-2xl border border-[#00ff87]/10 overflow-hidden hover:border-[#00ff87]/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={previewImage} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0f0d] via-[#0a0f0d]/50 to-transparent"></div>
        
        {/* Difficulty Badge */}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
          difficulty === 'Easy' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
          difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
          'bg-red-500/20 text-red-400 border border-red-500/30'
        }`}>
          {difficulty}
        </div>

        {/* Icon */}
        <div className="absolute top-3 left-3 p-2 bg-[#00ff87]/20 backdrop-blur-sm rounded-lg border border-[#00ff87]/30">
          <Icon className="w-5 h-5 text-[#00ff87]" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#e8f5e9] mb-2 group-hover:text-[#00ff87] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[#00ff87] mb-2">{subtitle}</p>
        <p className="text-sm text-[#b9d9be] mb-4 line-clamp-2">{body}</p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-[#7a9681] mb-4">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{players}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{playtime}</span>
          </div>
        </div>

        {/* Play Button */}
        <button 
          onClick={() => window.location.href = gamePath}
          className={`w-full py-2.5 rounded-lg font-semibold transition-all duration-300 ${
            isHovered 
              ? 'bg-[#00ff87] text-[#0a0f0d] shadow-lg shadow-[#00ff87]/50' 
              : 'bg-[#00ff87]/10 text-[#00ff87] border border-[#00ff87]/30'
          }`}
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default GameCard;