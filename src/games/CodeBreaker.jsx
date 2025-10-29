import React, { useState, useEffect } from 'react';
import { Code, Zap, Trophy, ArrowLeft, RefreshCw, Lightbulb, CheckCircle, XCircle, Clock, Star } from 'lucide-react';

const CodeBreakerGame = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [output, setOutput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  const levels = [
    {
      id: 1,
      title: "Fix the Variable",
      difficulty: "Easy",
      description: "The code should print 'Hello World', but there's a syntax error. Fix it!",
      brokenCode: `let message = "Hello World"
console.log(message)`,
      correctCode: `let message = "Hello World";
console.log(message);`,
      expectedOutput: "Hello World",
      hint: "Don't forget semicolons in JavaScript!",
      points: 100
    },
    {
      id: 2,
      title: "Complete the Function",
      difficulty: "Easy",
      description: "Write a function that adds two numbers together.",
      brokenCode: `function add(a, b) {
  // Write your code here
}
console.log(add(5, 3));`,
      correctCode: `function add(a, b) {
  return a + b;
}
console.log(add(5, 3));`,
      expectedOutput: "8",
      hint: "Use the return keyword to return the sum of a + b",
      points: 150
    },
    {
      id: 3,
      title: "Array Filtering",
      difficulty: "Medium",
      description: "Filter the array to only include even numbers.",
      brokenCode: `const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(/* Your code here */);
console.log(evens);`,
      correctCode: `const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);`,
      expectedOutput: "2,4,6",
      hint: "Use modulo operator (%) to check if a number is divisible by 2",
      points: 200
    },
    {
      id: 4,
      title: "String Reversal",
      difficulty: "Medium",
      description: "Reverse the given string.",
      brokenCode: `function reverseString(str) {
  // Write your code here
}
console.log(reverseString("hello"));`,
      correctCode: `function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello"));`,
      expectedOutput: "olleh",
      hint: "Convert string to array, reverse it, then join back to string",
      points: 250
    },
    {
      id: 5,
      title: "Object Manipulation",
      difficulty: "Hard",
      description: "Extract all values from the object and return them as an array.",
      brokenCode: `const person = { name: "John", age: 30, city: "NYC" };
// Write code to get all values
console.log(result);`,
      correctCode: `const person = { name: "John", age: 30, city: "NYC" };
const result = Object.values(person);
console.log(result);`,
      expectedOutput: "John,30,NYC",
      hint: "Use Object.values() method",
      points: 300
    },
    {
      id: 6,
      title: "FizzBuzz Logic",
      difficulty: "Hard",
      description: "Complete the FizzBuzz logic for number 15.",
      brokenCode: `function fizzBuzz(n) {
  // Return "Fizz" if divisible by 3
  // Return "Buzz" if divisible by 5
  // Return "FizzBuzz" if divisible by both
  // Otherwise return the number
}
console.log(fizzBuzz(15));`,
      correctCode: `function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n;
}
console.log(fizzBuzz(15));`,
      expectedOutput: "FizzBuzz",
      hint: "Check for both conditions first, then individual conditions",
      points: 350
    }
  ];

  const currentLevelData = levels[currentLevel];

  useEffect(() => {
    if (gameStarted && !gameCompleted) {
      const timer = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameStarted, gameCompleted]);

  useEffect(() => {
    if (currentLevelData) {
      setUserCode(currentLevelData.brokenCode);
      setOutput('');
      setIsCorrect(null);
      setShowHint(false);
    }
  }, [currentLevel]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const runCode = () => {
    if (!gameStarted) setGameStarted(true);
    
    try {
      // Simple code execution simulation
      let result = '';
      const normalizedUserCode = userCode.trim().replace(/\s+/g, ' ');
      const normalizedCorrectCode = currentLevelData.correctCode.trim().replace(/\s+/g, ' ');
      
      // Check if the code structure matches
      const codeMatch = normalizedUserCode === normalizedCorrectCode;
      
      if (codeMatch) {
        result = currentLevelData.expectedOutput;
        setOutput(result);
        setIsCorrect(true);
        
        // Calculate points (reduce for hints used)
        const earnedPoints = currentLevelData.points - (hintsUsed * 50);
        setScore(prev => prev + Math.max(earnedPoints, 50));
        
        // Auto-advance after 2 seconds
        setTimeout(() => {
          if (currentLevel < levels.length - 1) {
            setCurrentLevel(prev => prev + 1);
            setHintsUsed(0);
          } else {
            setGameCompleted(true);
          }
        }, 2000);
      } else {
        // Try to execute and see if output matches
        if (userCode.includes('return') && userCode.includes(currentLevelData.expectedOutput)) {
          result = currentLevelData.expectedOutput;
          setOutput(result);
          setIsCorrect(true);
          const earnedPoints = currentLevelData.points - (hintsUsed * 50);
          setScore(prev => prev + Math.max(earnedPoints, 50));
          
          setTimeout(() => {
            if (currentLevel < levels.length - 1) {
              setCurrentLevel(prev => prev + 1);
              setHintsUsed(0);
            } else {
              setGameCompleted(true);
            }
          }, 2000);
        } else {
          setOutput('Error: Code output does not match expected result');
          setIsCorrect(false);
        }
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
      setIsCorrect(false);
    }
  };

  const useHint = () => {
    setShowHint(true);
    setHintsUsed(prev => prev + 1);
  };

  const resetGame = () => {
    setCurrentLevel(0);
    setScore(0);
    setHintsUsed(0);
    setTimeElapsed(0);
    setGameStarted(false);
    setGameCompleted(false);
    setIsCorrect(null);
    setOutput('');
  };

  if (gameCompleted) {
    const finalScore = score;
    const rating = finalScore > 1500 ? 3 : finalScore > 1000 ? 2 : 1;

    return (
      <div className="min-h-screen bg-[#0a0f0d] text-[#e8f5e9] flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-[#1a2622]/50 rounded-2xl border border-[#00ff87]/20 p-8 text-center">
            <div className="mb-6">
              <Trophy className="w-20 h-20 text-[#00ff87] mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-[#e8f5e9] mb-2">Congratulations!</h1>
              <p className="text-[#b9d9be]">You've completed all levels!</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#0d1410] rounded-xl p-4 border border-[#00ff87]/10">
                <div className="text-3xl font-bold text-[#00ff87] mb-1">{finalScore}</div>
                <div className="text-sm text-[#7a9681]">Total Score</div>
              </div>
              <div className="bg-[#0d1410] rounded-xl p-4 border border-[#00ff87]/10">
                <div className="text-3xl font-bold text-[#00ff87] mb-1">{formatTime(timeElapsed)}</div>
                <div className="text-sm text-[#7a9681]">Total Time</div>
              </div>
              <div className="bg-[#0d1410] rounded-xl p-4 border border-[#00ff87]/10">
                <div className="text-3xl font-bold text-[#00ff87] mb-1">{levels.length}</div>
                <div className="text-sm text-[#7a9681]">Levels Completed</div>
              </div>
              <div className="bg-[#0d1410] rounded-xl p-4 border border-[#00ff87]/10">
                <div className="flex justify-center gap-1 mb-1">
                  {[1, 2, 3].map(star => (
                    <Star 
                      key={star} 
                      className={`w-6 h-6 ${star <= rating ? 'text-[#00ff87] fill-[#00ff87]' : 'text-[#7a9681]'}`}
                    />
                  ))}
                </div>
                <div className="text-sm text-[#7a9681]">Rating</div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={resetGame}
                className="w-full py-3 bg-[#00ff87] hover:bg-[#4caf50] text-[#0a0f0d] font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Play Again
              </button>
              <button
                onClick={() => window.location.href = '/games'}
                className="w-full py-3 bg-[#1a2622] hover:bg-[#0d1410] text-[#e8f5e9] font-semibold rounded-xl border border-[#00ff87]/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Games
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0f0d] text-[#e8f5e9]">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-80 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00ff87]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0f0d]/90 backdrop-blur-lg border-b border-[#00ff87]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.location.href = '/games'}
                className="p-2 hover:bg-[#1a2622] rounded-lg transition-all text-[#b9d9be] hover:text-[#00ff87]"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#00ff87]/10 rounded-lg">
                  <Code className="w-6 h-6 text-[#00ff87]" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[#e8f5e9]">Code Breaker</h1>
                  <p className="text-sm text-[#7a9681]">Debug & Fix Code Challenges</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#1a2622] rounded-lg border border-[#00ff87]/10">
                <Clock className="w-4 h-4 text-[#00ff87]" />
                <span className="text-sm font-mono text-[#e8f5e9]">{formatTime(timeElapsed)}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#1a2622] rounded-lg border border-[#00ff87]/10">
                <Trophy className="w-4 h-4 text-[#00ff87]" />
                <span className="text-sm font-bold text-[#e8f5e9]">{score}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#b9d9be]">
              Level {currentLevel + 1} of {levels.length}
            </span>
            <span className="text-sm text-[#7a9681]">
              {Math.round(((currentLevel + 1) / levels.length) * 100)}% Complete
            </span>
          </div>
          <div className="h-2 bg-[#1a2622] rounded-full overflow-hidden">
            <div 
              className="h-full bg-linear-to-r from-[#00ff87] to-[#4caf50] transition-all duration-500"
              style={{ width: `${((currentLevel + 1) / levels.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Instructions */}
          <div className="space-y-6">
            {/* Level Info */}
            <div className="bg-[#1a2622]/50 rounded-2xl border border-[#00ff87]/10 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-[#e8f5e9] mb-2">
                    {currentLevelData.title}
                  </h2>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    currentLevelData.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    currentLevelData.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    {currentLevelData.difficulty}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#00ff87]">{currentLevelData.points}</div>
                  <div className="text-xs text-[#7a9681]">points</div>
                </div>
              </div>

              <p className="text-[#b9d9be] mb-4">{currentLevelData.description}</p>

              <div className="bg-[#0d1410] rounded-lg p-4 border border-[#00ff87]/10">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-[#00ff87]" />
                  <span className="text-sm font-semibold text-[#e8f5e9]">Expected Output:</span>
                </div>
                <code className="text-[#00ff87] font-mono text-sm">
                  {currentLevelData.expectedOutput}
                </code>
              </div>
            </div>

            {/* Hint */}
            <div className="bg-[#1a2622]/50 rounded-2xl border border-[#00ff87]/10 p-6">
              <button
                onClick={useHint}
                disabled={showHint}
                className="w-full flex items-center justify-between p-4 bg-[#0d1410] hover:bg-[#1a2622] rounded-lg border border-[#00ff87]/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-[#00ff87]" />
                  <span className="font-semibold text-[#e8f5e9]">
                    {showHint ? 'Hint' : 'Need a Hint?'}
                  </span>
                </div>
                {!showHint && <span className="text-sm text-[#7a9681]">-50 points</span>}
              </button>

              {showHint && (
                <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <p className="text-sm text-yellow-200">{currentLevelData.hint}</p>
                </div>
              )}
            </div>

            {/* Output */}
            {output && (
              <div className="bg-[#1a2622]/50 rounded-2xl border border-[#00ff87]/10 p-6">
                <div className="flex items-center gap-2 mb-3">
                  {isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                  <span className="font-semibold text-[#e8f5e9]">Output:</span>
                </div>
                <div className={`p-4 rounded-lg font-mono text-sm ${
                  isCorrect 
                    ? 'bg-green-500/10 border border-green-500/30 text-green-400' 
                    : 'bg-red-500/10 border border-red-500/30 text-red-400'
                }`}>
                  {output}
                </div>
              </div>
            )}
          </div>

          {/* Right Panel - Code Editor */}
          <div className="bg-[#1a2622]/50 rounded-2xl border border-[#00ff87]/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-[#e8f5e9]">Code Editor</h3>
              <button
                onClick={() => setUserCode(currentLevelData.brokenCode)}
                className="text-sm text-[#7a9681] hover:text-[#00ff87] transition-colors"
              >
                Reset Code
              </button>
            </div>

            <textarea
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              className="w-full h-96 p-4 bg-[#0d1410] border border-[#00ff87]/10 rounded-lg text-[#e8f5e9] font-mono text-sm resize-none focus:outline-none focus:border-[#00ff87]/30 transition-all"
              spellCheck={false}
            />

            <button
              onClick={runCode}
              className="w-full mt-4 py-3 bg-[#00ff87] hover:bg-[#4caf50] text-[#0a0f0d] font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Run Code
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CodeBreakerGame;