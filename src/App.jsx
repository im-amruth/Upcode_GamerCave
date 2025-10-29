import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-[#001a0f] text-white px-6 md:px-20 py-10">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-20">
        <h1 className="text-lg font-semibold">GamerCave</h1>
        <button className="bg-emerald-500 text-black px-4 py-1 rounded-md text-sm font-medium hover:bg-emerald-400 transition">
          Get Started
        </button>
      </nav>

      {/* container */}
      <section className="text-center mb-24">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
          Upcode <br /> <span className="text-emerald-400">Gamer Cave</span>
        </h1>
        <p className="text-gray-300 mt-4 mb-8 max-w-xl mx-auto">
          Step into the cave where gamers and coders unite! <br />
          Guess, play, learn, and grow — with <span className="font-semibold text-white">Upcode GamerCave.</span>
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-emerald-500 px-5 py-2 rounded-lg font-medium hover:bg-emerald-400 transition">
            Get Started
          </button>
          <button className="bg-gray-800 px-5 py-2 rounded-lg font-medium hover:bg-gray-700 transition">
            View Docs
          </button>
        </div>
      </section>

      {/* Overview */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-3">Overview</h2>
        <p className="text-gray-300 mb-3">
          Upcode GamerCave is a front-end React application that brings fun and learning together.
          Users can:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-1">
          <li>Play simple image-based mini games (Guess the Celebrity, Emoji Word Puzzle, etc.)</li>
          <li>Access workshop guides and learning materials.</li>
          <li>Browse programming cheatsheets for quick references.</li>
        </ul>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Features</h2>

        <div className="space-y-8 text-gray-300">
          {/* Mini Games */}
          <div>
            <h3 className="font-semibold text-white mb-2">1. Mini Games</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Guess the Celebrity: Identify famous personalities from images.</li>
              <li>Emoji Word Puzzle: Decode words or phrases made using emojis.</li>
              <li>Logo Guess: Recognize brands from their logos.</li>
            </ul>
          </div>

          {/* Workshop Section */}
          <div>
            <h3 className="font-semibold text-white mb-2">2. Workshop Materials</h3>
            <p>
              A dedicated section that provides:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Guides and PDFs from programming workshops.</li>
              <li>Downloadable PDFs or links to learning materials.</li>
              <li>Embedded videos or slides (optional).</li>
            </ul>
            <p className="mt-2">
              This helps learners practice and revise workshop content easily.
            </p>
          </div>

          {/* Cheatsheet Section */}
          <div>
            <h3 className="font-semibold text-white mb-2">3. Cheatsheet Section</h3>
            <p>Quick and organized reference for major programming languages and tools:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
