import React, { useState, useEffect } from "react";


// FlipCards Component
function FlipCards({ level, onRestart }) {
  const emojiSet = [
    "🍎", "🍌", "🍇", "🍉", "🍓", "🍒", "🍍", "🥝", "🍑", "🍋",
    "🍈", "🥭", "🍅", "🥕", "🌽", "🥥", "🍆", "🥬", "🍄", "🫐"
  ];

  const difficultyMap = {
    easy: 4,
    medium: 16,
    hard: 30,
  };

  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [time, setTime] = useState(0);

  // Timer
  useEffect(() => {
    const timer = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  // Setup cards
  useEffect(() => {
    const pairs = emojiSet.slice(0, difficultyMap[level]);
    const shuffled = [...pairs, ...pairs]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji }));
    setCards(shuffled);
  }, [level]);

  const handleFlip = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first].emoji === cards[second].emoji) {
        setMatched((prev) => [...prev, first, second]);
        setTimeout(() => setFlipped([]), 700);
      } else {
        setTimeout(() => setFlipped([]), 900);
      }
    }
  };

  const isFlipped = (index) => flipped.includes(index) || matched.includes(index);

  const gridClass =
    level === "easy" ? "grid-cols-4" :
    level === "medium" ? "grid-cols-4" :
    "grid-cols-6";

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-950 via-green-950 to-teal-950 flex flex-col items-center justify-center p-4">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
        <div className="relative bg-linear-to-br from-emerald-900/50 to-teal-900/50 backdrop-blur-xl rounded-2xl shadow-2xl px-8 py-4 border-2 border-emerald-500/20 flex items-center gap-8">
          <h1 className="text-3xl font-bold text-(--text-primary)">
            Level: {level.toUpperCase()}
          </h1>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/20 text-emerald-300 border-2 border-emerald-500/50 font-bold text-lg">
            <span className="text-2xl">⏱</span>
            <span>{time}s</span>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-4xl">
        <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur-2xl"></div>
        <div className="relative bg-linear-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-xl rounded-3xl p-8 border-2 border-emerald-500/20">
          <div className={`grid ${gridClass} gap-4`}>
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="relative cursor-pointer group"
                style={{ perspective: "1000px" }}
                onClick={() => handleFlip(index)}
              >
                <div
  className={`relative w-full transition-transform duration-500 transform-gpu ${
    isFlipped(index) ? "rotate-y-180" : ""
  }`}
  style={{
    transformStyle: "preserve-3d",
    aspectRatio: "1 / 1",
  }}
>

                  {/* Front */}
                  <div
                    className="absolute inset-0 bg-linear-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-lg flex items-center justify-center text-6xl border-2 border-emerald-400/50 group-hover:border-emerald-300 transition-all group-hover:shadow-emerald-500/50"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    ❓
                  </div>
                  {/* Back */}
                  <div
                    className="absolute inset-0 bg-linear-to-br from-teal-700 to-emerald-700 rounded-2xl shadow-lg flex items-center justify-center text-6xl border-2 border-teal-400/50"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    {card.emoji}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={onRestart}
          className="px-10 py-4 font-bold rounded-full bg-linear-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-400 hover:to-teal-400 transform transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 hover:scale-110 text-lg"
        >
          Restart
        </button>
      </div>
    </div>
  );
}

// Main MemoryGame Component
function MemoryGame() {
  const [difficulty, setDifficulty] = useState(null);

  if (difficulty) {
    return <FlipCards level={difficulty} onRestart={() => setDifficulty(null)} />;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-950 via-green-950 to-teal-950 flex flex-col items-center justify-center p-4 relative overflow-hidden" style={{fontFamily: 'orbitron'}}>
      {/* Floating demo cards */}
      <div className="absolute top-20 left-10 text-8xl animate-bounce opacity-20 blur-sm">
        😍
      </div>
      <div className="absolute bottom-20 right-10 text-8xl animate-bounce opacity-20 blur-sm" style={{ animationDelay: "0.5s" }}>
        🤖
      </div>

      <div className="relative z-10">
        <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
        <div className="relative bg-linear-to-br from-emerald-900/90 to-teal-900/90 backdrop-blur-xl rounded-3xl shadow-2xl p-12 text-center max-w-2xl border-2 border-emerald-500/30">
          <div className="mb-6">
            <h1 className="text-6xl font-bold mb-4 bg-linear-to-r from-emerald-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent animate-pulse">
              Memory Match Game
            </h1>
          </div>
          
          <p className="text-2xl mb-8 text-emerald-200 font-semibold">
            Choose your difficulty level
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              className="px-8 py-4 font-bold rounded-full bg-linear-to-r from-green-500 to-emerald-500 text-white hover:from-green-400 hover:to-emerald-400 transform transition-all duration-300 shadow-lg hover:shadow-green-500/50 hover:scale-110 text-lg min-w-32"
              onClick={() => setDifficulty("easy")}
            >
               EASY
            </button>
            <button
              className="px-8 py-4 font-bold rounded-full bg-linear-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-400 hover:to-teal-400 transform transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 hover:scale-110 text-lg min-w-32"
              onClick={() => setDifficulty("medium")}
            >
               MEDIUM
            </button>
            <button
              className="px-8 py-4 font-bold rounded-full bg-linear-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-400 hover:to-cyan-400 transform transition-all duration-300 shadow-lg hover:shadow-teal-500/50 hover:scale-110 text-lg min-w-32"
              onClick={() => setDifficulty("hard")}
            >
               HARD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemoryGame;