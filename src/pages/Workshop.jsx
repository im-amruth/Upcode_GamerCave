import { Code, Gamepad2, Cpu, PenTool } from "lucide-react";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Web Development",
    Icon: Code,
    path: "/workshop/web-development",
    body: "Build modern websites using HTML, CSS, and JavaScript.",
  },
  {
    title: "Game Development",
    Icon: Gamepad2,
    path: "/workshop/game-development",
    body: "Create interactive 2D & 3D games with JavaScript and Unity basics.",
  },
  {
    title: "AI & Machine Learning",
    Icon: Cpu,
    path: "/workshop/ai-ml",
    body: "Learn to integrate AI into real-world projects using Python.",
  },
  {
    title: "UI/UX Design",
    Icon: PenTool,
    path: "/workshop/ui-ux",
    body: "Master the art of beautiful and functional user interfaces.",
  },
];

const Card = ({ title, Icon, path, body }) => (
  <Link
    to={path}
    className="group flex items-start gap-4 p-5 bg-[#121917] rounded-2xl border border-[#00ff87]/10 hover:border-[#00ff87]/30 hover:shadow-[0_0_15px_#00ff87]/20 transition-all duration-300 hover:-translate-y-1"
  >
    <div className="p-3 bg-[#00ff87]/10 rounded-xl group-hover:bg-[#00ff87]/20 transition-colors">
      <Icon className="text-[#00ff87]" size={22} />
    </div>
    <div className="flex-1">
      <p className="text-[#e8f5e9] font-semibold text-base">{title}</p>
      <p className="text-[#7a9681] text-sm mt-1 leading-relaxed">{body}</p>
    </div>
  </Link>
);

const Workshop = () => {
  return (
    <div className="min-h-screen lg:ml-64 bg-[#0a0f0d] text-[#e8f5e9] relative px-6 py-16 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00ff87]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Page Title */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#e8f5e9] mb-3 tracking-wide">
          Workshop Materials
        </h1>
        <p className="text-[#7a9681] text-sm md:text-base">
          Learn, build, and innovate with our hands-on sessions.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((item, i) => (
          <Card {...item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Workshop;
