import React, { useState, useEffect, useRef } from 'react';
import { Zap, Trophy, ArrowLeft, RefreshCw, Clock, Target, TrendingUp, Award, Play, Pause, Star } from 'lucide-react';

const TypingRacerGame = () => {
  const [gameState, setGameState] = useState('menu'); // menu, playing, paused, finished
  const [selectedDifficulty, setSelectedDifficulty] = useState('medium');
  const [currentText, setCurrentText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [correctChars, setCorrectChars] = useState(0);
  const [incorrectChars, setIncorrectChars] = useState(0);
  const [totalCharsTyped, setTotalCharsTyped] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const inputRef = useRef(null);

  const textSamples = {
    easy: [
      "The quick brown fox jumps over the lazy dog near the riverbank.",
      "A journey of a thousand miles begins with a single step forward.",
      "Practice makes perfect when you put in consistent effort every day.",
      "Success is not final and failure is not fatal in the long run.",
      "The only way to do great work is to love what you do always."
    ],
    medium: [
      "Technology has revolutionized the way we communicate and interact with each other in modern society.",
      "Programming requires logical thinking, problem-solving skills, and attention to detail for success.",
      "The internet has transformed how we access information and connect with people worldwide instantly.",
      "Learning new skills requires dedication, persistence, and a willingness to embrace challenges daily.",
      "Innovation drives progress forward by challenging conventional thinking and exploring new possibilities."
    ],
    hard: [
      "Quantum computing leverages superposition and entanglement to solve complex computational problems exponentially faster than classical computers.",
      "Artificial intelligence algorithms utilize neural networks and deep learning to recognize patterns and make intelligent decisions autonomously.",
      "Blockchain technology employs cryptographic principles to create decentralized, immutable ledgers that revolutionize digital transactions securely.",
      "Cybersecurity professionals continuously adapt their strategies to counteract sophisticated threats and vulnerabilities in networked systems.",
      "Bioinformatics combines computational biology with data science to analyze biological data and uncover genetic patterns efficiently."
    ]
  };

  const difficulties = {
    easy: { time: 90, color: 'green', label: 'Easy', minWpm: 30 },
    medium: { time: 60, color: 'yellow', label: 'Medium', minWpm: 50 },
    hard: { time: 45, color: 'red', label: 'Hard', minWpm: 70 }
  };

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setGameState('finished');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameState, timeLeft]);

  useEffect(() => {
    if (gameState === 'playing' && userInput.length > 0 && startTime) {
      const timeElapsed = (Date.now() - startTime) / 1000 / 60; // in minutes
      const wordsTyped = userInput.trim().split(/\s+/).length;
      const calculatedWpm = Math.round(wordsTyped / timeElapsed);
      setWpm(calculatedWpm);
    }
  }, [userInput, startTime, gameState]);

  useEffect(() => {
    if (totalCharsTyped > 0) {
      const calculatedAccuracy = Math.round((correctChars / totalCharsTyped) * 100);
      setAccuracy(calculatedAccuracy);
    }
  }, [correctChars, totalCharsTyped]);

  const startGame = () => {
    const randomText = textSamples[selectedDifficulty][
      Math.floor(Math.random() * textSamples[selectedDifficulty].length)
    ];
    setCurrentText(randomText);
    setUserInput('');
    setTimeLeft(difficulties[selectedDifficulty].time);
    setStartTime(Date.now());
    setWpm(0);
    setAccuracy(100);
    setCorrectChars(0);
    setIncorrectChars(0);
    setTotalCharsTyped(0);
    setGameState('playing');
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleInput = (e) => {
    if (gameState !== 'playing') return;

    const value = e.target.value;
    const newChar = value[value.length - 1];
    const currentPosition = value.length - 1;

    if (newChar !== undefined) {
      setTotalCharsTyped(prev => prev + 1);
      
      if (newChar === currentText[currentPosition]) {
        setCorrectChars(prev => prev + 1);
      } else {
        setIncorrectChars(prev => prev + 1);
      }
    }

    setUserInput(value);

    // Check if completed
    if (value === currentText) {
      setGameState('finished');
      if (wpm > highScore) {
        setHighScore(wpm);
      }
    }
  };

  const getCharacterClass = (index) => {
    if (index >= userInput.length) {
      return 'text-[#7a9681]';
    }
    return userInput[index] === currentText[index] 
      ? 'text-[#00ff87] bg-[#00ff87]/10' 
      : 'text-red-400 bg-red-400/10';
  };

  const restartGame = () => {
    setGameState('menu');
  };

  const getRating = () => {
    if (wpm >= difficulties[selectedDifficulty].minWpm + 30) return 3;
    if (wpm >= difficulties[selectedDifficulty].minWpm + 15) return 2;
    if (wpm >= difficulties[selectedDifficulty].minWpm) return 1;
    return 0;
  };

  // Menu Screen
  if (gameState === 'menu') {
    return (
      <div className="min-h-screen bg-[#0a0f0d] text-[#e8f5e9] flex items-center justify-center p-4">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -bottom-80 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00ff87]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl w-full">
          <button
            onClick={() => window.location.href = '/games'}
            className="mb-4 flex items-center gap-2 text-[#b9d9be] hover:text-[#00ff87] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Games
          </button>

          <div className="bg-[#1a2622]/50 rounded-2xl border border-[#00ff87]/20 p-8">
            {/* Title */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#00ff87]/10 rounded-2xl mb-4">
                <Zap className="w-10 h-10 text-[#00ff87]" />
              </div>
              <h1 className="text-5xl font-bold text-[#e8f5e9] mb-2">Typing Racer</h1>
              <p className="text-[#b9d9be]">Test your typing speed and accuracy</p>
            </div>

            {/* High Score */}
            {highScore > 0 && (
              <div className="text-center mb-8 p-4 bg-[#00ff87]/5 border border-[#00ff87]/20 rounded-xl">
                <div className="flex items-center justify-center gap-2">
                  <Trophy className="w-5 h-5 text-[#00ff87]" />
                  <span className="text-[#b9d9be]">Personal Best:</span>
                  <span className="text-2xl font-bold text-[#00ff87]">{highScore} WPM</span>
                </div>
              </div>
            )}

            {/* Difficulty Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-[#e8f5e9] mb-4 text-center">Select Difficulty</h3>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(difficulties).map(([key, diff]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedDifficulty(key)}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      selectedDifficulty === key
                        ? 'border-[#00ff87] bg-[#00ff87]/10'
                        : 'border-[#00ff87]/20 bg-[#0d1410] hover:border-[#00ff87]/40'
                    }`}
                  >
                    <div className={`text-2xl font-bold mb-2 ${
                      diff.color === 'green' ? 'text-green-400' :
                      diff.color === 'yellow' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {diff.label}
                    </div>
                    <div className="text-sm text-[#7a9681] mb-1">{diff.time} seconds</div>
                    <div className="text-xs text-[#7a9681]">Target: {diff.minWpm}+ WPM</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-[#0d1410] rounded-xl p-6 border border-[#00ff87]/10 mb-8">
              <h3 className="font-semibold text-[#e8f5e9] mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#00ff87]" />
                How to Play
              </h3>
              <ul className="space-y-2 text-sm text-[#b9d9be]">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff87] mt-0.5">•</span>
                  <span>Type the displayed text as quickly and accurately as possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff87] mt-0.5">•</span>
                  <span>Correct characters turn green, mistakes turn red</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff87] mt-0.5">•</span>
                  <span>Complete before time runs out to get your score</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff87] mt-0.5">•</span>
                  <span>Higher WPM (Words Per Minute) and accuracy = better rating</span>
                </li>
              </ul>
            </div>

            {/* Start Button */}
            <button
              onClick={startGame}
              className="w-full py-4 bg-[#00ff87] hover:bg-[#4caf50] text-[#0a0f0d] font-bold text-lg rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#00ff87]/50 hover:shadow-[#00ff87]/70 hover:scale-105"
            >
              <Play className="w-6 h-6" />
              Start Race
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Finished Screen
  if (gameState === 'finished') {
    const rating = getRating();
    const isNewHighScore = wpm > highScore;

    return (
      <div className="min-h-screen bg-[#0a0f0d] text-[#e8f5e9] flex items-center justify-center p-4">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -bottom-80 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00ff87]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-3xl w-full">
          <div className="bg-[#1a2622]/50 rounded-2xl border border-[#00ff87]/20 p-8">
            <div className="text-center mb-8">
              <Trophy className="w-20 h-20 text-[#00ff87] mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-[#e8f5e9] mb-2">Race Complete!</h1>
              {isNewHighScore && (
                <p className="text-[#00ff87] font-semibold">🎉 New Personal Best!</p>
              )}
            </div>

            {/* Rating Stars */}
            <div className="flex justify-center gap-2 mb-8">
              {[1, 2, 3].map(star => (
                <Star 
                  key={star} 
                  className={`w-10 h-10 ${star <= rating ? 'text-[#00ff87] fill-[#00ff87]' : 'text-[#7a9681]'}`}
                />
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#0d1410] rounded-xl p-6 border border-[#00ff87]/10 text-center">
                <Zap className="w-8 h-8 text-[#00ff87] mx-auto mb-2" />
                <div className="text-4xl font-bold text-[#00ff87] mb-1">{wpm}</div>
                <div className="text-sm text-[#7a9681]">Words Per Minute</div>
              </div>
              <div className="bg-[#0d1410] rounded-xl p-6 border border-[#00ff87]/10 text-center">
                <Target className="w-8 h-8 text-[#00ff87] mx-auto mb-2" />
                <div className="text-4xl font-bold text-[#00ff87] mb-1">{accuracy}%</div>
                <div className="text-sm text-[#7a9681]">Accuracy</div>
              </div>
              <div className="bg-[#0d1410] rounded-xl p-6 border border-[#00ff87]/10 text-center">
                <TrendingUp className="w-8 h-8 text-[#00ff87] mx-auto mb-2" />
                <div className="text-4xl font-bold text-[#00ff87] mb-1">{correctChars}</div>
                <div className="text-sm text-[#7a9681]">Correct Characters</div>
              </div>
              <div className="bg-[#0d1410] rounded-xl p-6 border border-[#00ff87]/10 text-center">
                <Award className="w-8 h-8 text-[#00ff87] mx-auto mb-2" />
                <div className="text-4xl font-bold text-[#00ff87] mb-1">{difficulties[selectedDifficulty].label}</div>
                <div className="text-sm text-[#7a9681]">Difficulty</div>
              </div>
            </div>

            {/* Performance Message */}
            <div className="bg-[#00ff87]/5 border border-[#00ff87]/20 rounded-xl p-4 mb-8 text-center">
              <p className="text-[#b9d9be]">
                {wpm >= difficulties[selectedDifficulty].minWpm + 30
                  ? '🔥 Outstanding! You\'re a typing master!'
                  : wpm >= difficulties[selectedDifficulty].minWpm + 15
                  ? '⚡ Great job! Keep up the practice!'
                  : wpm >= difficulties[selectedDifficulty].minWpm
                  ? '👍 Good work! You met the target!'
                  : '💪 Keep practicing to improve your speed!'}
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button
                onClick={startGame}
                className="w-full py-3 bg-[#00ff87] hover:bg-[#4caf50] text-[#0a0f0d] font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Race Again
              </button>
              <button
                onClick={restartGame}
                className="w-full py-3 bg-[#1a2622] hover:bg-[#0d1410] text-[#e8f5e9] font-semibold rounded-xl border border-[#00ff87]/20 transition-all duration-300"
              >
                Back to Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Playing Screen
  return (
    <div className="min-h-screen bg-[#0a0f0d] text-[#e8f5e9]">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-80 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00ff87]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0f0d]/90 backdrop-blur-lg border-b border-[#00ff87]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#00ff87]/10 rounded-lg">
                <Zap className="w-6 h-6 text-[#00ff87]" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#e8f5e9]">Typing Racer</h1>
                <p className="text-sm text-[#7a9681] capitalize">{selectedDifficulty} Mode</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                timeLeft <= 10 
                  ? 'bg-red-500/10 border-red-500/30 animate-pulse' 
                  : 'bg-[#1a2622] border-[#00ff87]/10'
              }`}>
                <Clock className={`w-5 h-5 ${timeLeft <= 10 ? 'text-red-400' : 'text-[#00ff87]'}`} />
                <span className={`text-2xl font-bold font-mono ${timeLeft <= 10 ? 'text-red-400' : 'text-[#e8f5e9]'}`}>
                  {timeLeft}s
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-[#1a2622]/50 rounded-xl p-4 border border-[#00ff87]/10 text-center">
            <div className="text-3xl font-bold text-[#00ff87] mb-1">{wpm}</div>
            <div className="text-sm text-[#7a9681]">WPM</div>
          </div>
          <div className="bg-[#1a2622]/50 rounded-xl p-4 border border-[#00ff87]/10 text-center">
            <div className="text-3xl font-bold text-[#00ff87] mb-1">{accuracy}%</div>
            <div className="text-sm text-[#7a9681]">Accuracy</div>
          </div>
          <div className="bg-[#1a2622]/50 rounded-xl p-4 border border-[#00ff87]/10 text-center">
            <div className="text-3xl font-bold text-[#00ff87] mb-1">
              {userInput.length}/{currentText.length}
            </div>
            <div className="text-sm text-[#7a9681]">Characters</div>
          </div>
        </div>

        {/* Text Display */}
        <div className="bg-[#1a2622]/50 rounded-2xl border border-[#00ff87]/10 p-8 mb-6">
          <div className="text-2xl leading-relaxed font-mono">
            {currentText.split('').map((char, index) => (
              <span key={index} className={getCharacterClass(index)}>
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-[#1a2622]/50 rounded-2xl border border-[#00ff87]/10 p-6">
          <label className="block text-sm font-semibold text-[#b9d9be] mb-3">
            Type here:
          </label>
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={handleInput}
            className="w-full p-4 bg-[#0d1410] border border-[#00ff87]/20 rounded-xl text-[#e8f5e9] text-xl font-mono focus:outline-none focus:border-[#00ff87]/40 transition-all"
            placeholder="Start typing..."
            autoFocus
          />
        </div>

        {/* Quit Button */}
        <div className="mt-6 text-center">
          <button
            onClick={restartGame}
            className="px-6 py-2 bg-[#1a2622] hover:bg-[#0d1410] text-[#b9d9be] hover:text-[#e8f5e9] border border-[#00ff87]/20 rounded-lg transition-all"
          >
            Quit Race
          </button>
        </div>
      </main>
    </div>
  );
};

export default TypingRacerGame;