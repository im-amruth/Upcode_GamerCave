import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageGame = ({ gameData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [showAnswer, setShowAnswer] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [gameComplete, setGameComplete] = useState(false);

  const current = gameData[currentIndex];

  // Reset on new question
  useEffect(() => {
    setTimeLeft(current?.time || 10);
    setShowAnswer(false);
    setFeedback("");
  }, [currentIndex]);

  // Timer countdown (fixed)
  useEffect(() => {
    if (showAnswer) return; // ⛔ Stop timer if answer is shown
    if (timeLeft <= 0) {
      setFeedback("⏰ Time's up!");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setFeedback("⏰ Time's up!");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, showAnswer, currentIndex]);


  const handleShowAnswer = () => {
    setShowAnswer(true);
    setFeedback("");
    setTimeLeft(0);
  };

  const handleNext = () => {
    if (currentIndex < gameData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setGameComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setGameComplete(false);
  };

  // Progress Percentage
  const progressPercent = ((currentIndex + 1) / gameData.length) * 100;

  if (gameComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-emerald-950 via-green-950 to-teal-950 p-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative text-center bg-linear-to-br from-emerald-900/90 to-teal-900/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-emerald-500/30 max-w-md"
        >
          <motion.div
            className="text-7xl mb-6"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            🎉
          </motion.div>
          <h2 className="text-4xl font-bold bg-linear-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent mb-3">
            Game Complete!
          </h2>
          <p className="text-emerald-200 text-lg mb-8">
            You’ve mastered all {gameData.length} questions!
          </p>
          <button
            onClick={handleRestart}
            className="px-8 py-3 font-bold rounded-full bg-linear-to-r from-emerald-500 to-teal-500 text-white hover:scale-110 hover:shadow-lg hover:from-emerald-400 hover:to-teal-400 transition-all duration-300"
          >
             Play Again
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0f0d] flex items-center justify-center p-4">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.95 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-2xl bg-linear-to-br from-emerald-900/40 to-teal-900/40 rounded-3xl border border-emerald-500/20 shadow-xl p-6 backdrop-blur-lg"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold shadow-lg">
              {currentIndex + 1}
            </div>
            <div>
              <div className="text-sm text-emerald-300 font-semibold">Question</div>
              <div className="text-xs text-emerald-400/70">
                {currentIndex + 1} of {gameData.length}
              </div>
            </div>
          </div>

          {/* Timer */}
          <div
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-bold text-lg border-2 transition-all duration-300 ${timeLeft <= 3
                ? "border-red-500 text-red-400 bg-red-500/10 animate-pulse"
                : "border-emerald-500 text-emerald-300 bg-emerald-500/10"
              }`}
          >
            ⏱️ {timeLeft}s
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-emerald-900/50 rounded-full overflow-hidden mb-6">
          <motion.div
            className="h-full bg-linear-to-r from-emerald-400 to-teal-400"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Image */}
        <div className="mb-6 relative group">
          <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>
          <motion.img
            src={showAnswer && current.original_image ? current.original_image : current.image}
            alt={`Image ${current.id}`}
            className="relative z-10 w-full h-72 object-contain rounded-2xl border-2 border-emerald-500/30 bg-emerald-950/50 p-3 shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Feedback */}
        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-6 text-center"
            >
              <div
                className={`inline-block px-6 py-3 rounded-full font-bold text-lg ${feedback.includes("Time")
                    ? "bg-orange-500/20 text-orange-300 border border-orange-500"
                    : "bg-emerald-500/20 text-emerald-300 border border-emerald-500"
                  }`}
              >
                {feedback}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Answer */}
        <AnimatePresence>
          {(current.answer && showAnswer) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center mb-6"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-teal-500 rounded-xl blur-md opacity-50"></div>
                <input
                  type="text"
                  value={current.answer}
                  readOnly
                  className="relative w-full px-8 py-4 text-center text-2xl font-bold border-2 border-emerald-400 rounded-xl bg-linear-to-br from-emerald-950 to-teal-950 text-emerald-100 shadow-xl"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Buttons */}
        <div className="flex gap-4">
          {!showAnswer ? (
            <button
              onClick={handleShowAnswer}
              className="flex-1 py-4 bg-linear-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-full hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 hover:scale-105 shadow-lg"
            >
               Show Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 py-4 bg-linear-to-r from-teal-500 to-emerald-500 text-white font-bold rounded-full hover:from-teal-400 hover:to-emerald-400 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {currentIndex < gameData.length - 1 ? " Next" : " Finish"}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ImageGame;
