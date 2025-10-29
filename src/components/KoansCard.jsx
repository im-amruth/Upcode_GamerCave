import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const difficultyColors = {
  easy: "text-green-400",
  medium: "text-yellow-400",
  hard: "text-red-400",
};

const KoanCard = ({ title, description, difficulty, path }) => (
  <Link
    to={path}
    className="group bg-[#121917] border border-[#00ff87]/10 rounded-xl p-5 hover:border-[#00ff87]/30 transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_#00ff87]/10"
  >
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-[#e8f5e9] font-semibold text-base">{title}</h3>
      <span className={`text-xs font-medium ${difficultyColors[difficulty]}`}>
        {difficulty}
      </span>
    </div>
    <p className="text-[#7a9681] text-sm leading-relaxed">{description}</p>
    <div className="flex items-center mt-3 text-[#00ff87] text-sm group-hover:translate-x-1 transition-all">
      <ArrowRight size={14} className="mr-1" /> Start
    </div>
  </Link>
);

export default KoanCard;
