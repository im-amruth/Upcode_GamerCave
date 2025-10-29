import { Code, Gamepad2 } from "lucide-react";
import GameCard from "../components/GameCard";

  const gameCards = [
    {
      title: "Emoji Guess Game",
      Icon: Gamepad2,
      previewImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      gamePath: "/games/emoji",
      subtitle: "Classic arcade shooter",
      body: "Defend Earth from alien invaders in this retro-style game built with JavaScript and Canvas."
    },
    {
      title: "Logo Guess Game",
      Icon: Code,
      previewImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      gamePath: "/games/logo",
      subtitle: "Programming puzzle game",
      body: "Solve coding challenges to progress through levels and unlock new abilities."
    },
    {
      title: "Celebrity Guess Game",
      Icon: Gamepad2,
      previewImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
      gamePath: "/games/celebrity",
      subtitle: "2D platformer adventure",
      body: "Jump, run, and explore a vibrant pixel art world with challenging obstacles."
    },
    {
      title: "Memory Game",
      Icon: Gamepad2,
      previewImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
      gamePath: "/games/memory",
      subtitle: "2D platformer adventure",
      body: "Jump, run, and explore a vibrant pixel art world with challenging obstacles."
    },
  ];


const Games = () => {
  return (
    <div className="min-h-screen lg:ml-64 bg-[#0a0f0d] text-[#e8f5e9] flex justify-between items-start p-8 flex-wrap space-y-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-80 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-(--accent-primary)/5 rounded-full blur-3xl"></div>
      </div>
      {gameCards.map((game, i) => (
        <GameCard {...game} key={i} />
      ))}
    </div>
  )
}

export default Games
