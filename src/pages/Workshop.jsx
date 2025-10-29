import { Code, Gamepad2 } from "lucide-react";

  const gameCards = [
    {
      title: "Emoji Guess Game",
      Icon: Gamepad2,
      previewImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      gamePath: "/games/emoji",
      subtitle: "Classic arcade shooter",
      body: "Defend Earth from alien invaders in this retro-style game built with JavaScript and Canvas."
    }
  ];


const Workshop = () => {
  return (
    <div className="min-h-screen lg:ml-64 bg-[#0a0f0d] text-[#e8f5e9] flex justify-between items-start p-8">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-80 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-(--accent-primary)/5 rounded-full blur-3xl"></div>
      </div>
      {gameCards.map((game, i) => (
        <GameCard {...game} key={i} />
      ))}
    </div>
  )
}

export default Workshop
