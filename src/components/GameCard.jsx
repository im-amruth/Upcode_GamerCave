import { Layout, Play } from "lucide-react";

const GameCard = ({
    title,
    Icon = Layout,
    previewImage,
    gamePath,
    subtitle,
    body,
}) => {
    return (
        <div className="group relative w-full max-w-sm">
            {/* Glow effect on hover */}
            <div className="absolute -inset-0.5 bg-linear-to-r from-white/10 to-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            {/* Preview Image */}
            <div
                className="relative w-full h-full
        bg-linear-to-br from-white/[0.07] to-white/2
        backdrop-blur-sm border border-white/10 
        shadow-[0_8px_32px_rgba(0,0,0,0.4)]
        transition-all duration-500 
        text-slate-200 rounded-2xl p-3
        hover:border-white/20
        hover:-translate-y-1 space-y-4"
            >
                {previewImage && (
                    <div className="relative h-48 rounded-t-lg overflow-hidden bg-(--bg-secondary)">
                        <img
                            src={previewImage}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#1a2622] to-transparent opacity-60"></div>
                    </div>
                )}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-32 bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
                {/* Card Header */}
                <div className="flex items-start gap-4 mb-4">
                    {Icon && (
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                            <Icon className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
                        </div>
                    )}
                    <div className="flex-1">
                        <h3 className="text-white text-lg font-semibold mb-1 group-hover:text-white transition-colors">
                            {title}
                        </h3>
                        {subtitle && (
                            <p className="text-white/50 text-sm font-mono">{subtitle}</p>
                        )}
                    </div>
                </div>

                {/* Card Content */}
                <div className="mb-6">
                    <p className="text-white/70 text-sm leading-relaxed">{body}</p>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent mb-4"></div>

                {/* Card Footer */}
                <div className="flex gap-3">
                    {gamePath && (
                        <a
                            href={gamePath}
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 
                       border border-white/20 rounded-lg
                       text-white/80 text-sm font-medium
                       hover:bg-white/5 hover:border-white/30 hover:text-white
                       transition-all duration-300
                       group/btn"
                        >
                            <Play className="w-4 h-4 group-hover/btn:rotate-90 transition-transform" />
                            Play
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GameCard;
