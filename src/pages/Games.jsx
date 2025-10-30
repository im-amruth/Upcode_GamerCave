import { useState } from 'react';
import { Gamepad2, Trophy, Filter, Star, Users } from "lucide-react";
import GameCard from '../components/GameCard';
import { games } from '../data/games';

const Games = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = ['all', 'puzzle', 'quiz', 'trivia', 'coding', 'skill'];
  const difficulties = ['all', 'Easy', 'Medium', 'Hard'];

  const filteredGames = games.filter(game => {
    const categoryMatch = selectedCategory === 'all' || game.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || game.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <div className="min-h-screen lg:ml-64 bg-[#0a0f0d] text-[#e8f5e9] overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-80 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00ff87]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-40 w-[400px] h-[400px] bg-[#4caf50]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -right-40 w-[500px] h-[500px] bg-[#81c784]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto mb-12">
          {/* Title & Description */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#00ff87]/10 rounded-xl border border-[#00ff87]/20">
                <Gamepad2 className="w-8 h-8 text-[#00ff87]" />
              </div>
              <div>
                <h1 className="text-4xl md:text-3xl font-bold text-[#e8f5e9]">Game Arcade</h1>
                <p className="text-[#b9d9be] mt-1">Challenge yourself with our collection of interactive games</p>
              </div>
            </div>
            <p className="text-[#7a9681] max-w-3xl">
              From brain-teasing puzzles to fast-paced typing challenges, discover games that make learning fun.
              Earn XP, unlock achievements, and compete with friends!
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#1a2622]/50 rounded-xl p-4 border border-[#00ff87]/10">
              <div className="flex items-center gap-2 mb-2">
                <Gamepad2 className="w-5 h-5 text-[#00ff87]" />
                <span className="text-2xl font-bold text-[#e8f5e9]">{games.length}</span>
              </div>
              <p className="text-sm text-[#7a9681]">Total Games</p>
            </div>
            <div className="bg-[#1a2622]/50 rounded-xl p-4 border border-[#00ff87]/10">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-[#00ff87]" />
                <span className="text-2xl font-bold text-[#e8f5e9]">10K+</span>
              </div>
              <p className="text-sm text-[#7a9681]">Active Players</p>
            </div>
            <div className="bg-[#1a2622]/50 rounded-xl p-4 border border-[#00ff87]/10">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-[#00ff87]" />
                <span className="text-2xl font-bold text-[#e8f5e9]">45</span>
              </div>
              <p className="text-sm text-[#7a9681]">Achievements</p>
            </div>
            <div className="bg-[#1a2622]/50 rounded-xl p-4 border border-[#00ff87]/10">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-[#00ff87]" />
                <span className="text-2xl font-bold text-[#e8f5e9]">4.8</span>
              </div>
              <p className="text-sm text-[#7a9681]">Avg Rating</p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-[#1a2622]/50 rounded-xl p-4 border border-[#00ff87]/10">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-[#7a9681]" />
              <span className="text-sm font-semibold text-[#e8f5e9]">Filter by:</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {/* Category Filter */}
              <div className="flex md:items-center gap-2 items-start">
                <span className="text-sm text-[#7a9681]">Category:</span>
                <div className="flex gap-2 flex-wrap ">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${selectedCategory === cat
                          ? 'bg-[#00ff87] text-[#0a0f0d]'
                          : 'bg-[#0d1410] text-[#b9d9be] hover:bg-[#1a2622] border border-[#00ff87]/10'
                        }`}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#7a9681]">Difficulty:</span>
                <div className="flex gap-2 flex-wrap">
                  {difficulties.map(diff => (
                    <button
                      key={diff}
                      onClick={() => setSelectedDifficulty(diff)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${selectedDifficulty === diff
                          ? 'bg-[#00ff87] text-[#0a0f0d]'
                          : 'bg-[#0d1410] text-[#b9d9be] hover:bg-[#1a2622] border border-[#00ff87]/10'
                        }`}
                    >
                      {diff.charAt(0).toUpperCase() + diff.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        <div className="max-w-7xl mx-auto">
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGames.map((game, i) => (
                <GameCard {...game} key={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Gamepad2 className="w-16 h-16 text-[#7a9681] mx-auto mb-4 opacity-50" />
              <p className="text-[#b9d9be] text-lg">No games found matching your filters</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedDifficulty('all');
                }}
                className="mt-4 px-6 py-2 bg-[#00ff87]/10 text-[#00ff87] rounded-lg border border-[#00ff87]/30 hover:bg-[#00ff87]/20 transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-linear-to-r from-[#00ff87]/10 to-[#4caf50]/10 rounded-2xl p-8 border border-[#00ff87]/20 text-center">
            <Trophy className="w-12 h-12 text-[#00ff87] mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#e8f5e9] mb-2">
              Want to Contribute?
            </h2>
            <p className="text-[#b9d9be] mb-6">
              Have an idea for a new game? We're always looking for creative developers to add exciting games to our platform!
            </p>
            <button className="px-8 py-3 bg-[#00ff87] hover:bg-[#4caf50] text-[#0a0f0d] font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#00ff87]/50">
              Submit Your Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;