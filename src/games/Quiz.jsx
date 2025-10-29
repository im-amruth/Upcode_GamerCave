import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "Who developed React.js?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    answer: "Facebook",
  },
  {
    question: "Which programming language is used for styling web pages?",
    options: ["HTML", "jQuery", "CSS", "XML"],
    answer: "CSS",
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    answer: "<script>",
  },
  {
    question: "What year was JavaScript created?",
    options: ["1995", "1990", "2000", "1997"],
    answer: "1995",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    answer: "Blue Whale",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "What is 15 × 5?",
    options: ["60", "70", "75", "80"],
    answer: "75",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Michelangelo",
    ],
    answer: "Leonardo da Vinci",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionClick = (option) => {
    if (!showAnswer) setSelected(option);
  };

  const handleNext = () => {
    if (selected === questions[current].answer) setScore(score + 1);

    setShowAnswer(true);
    setTimeout(() => {
      setShowAnswer(false);
      setSelected("");
      if (current + 1 < questions.length) setCurrent(current + 1);
      else setShowResult(true);
    }, 1200);
  };

  const handleRestart = () => {
    setScore(0);
    setCurrent(0);
    setSelected("");
    setShowResult(false);
    setShowAnswer(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0f0d] flex flex-col justify-center items-center text-white p-6">
      <div className="bg-[#121917]/90 border border-[#00ff87]/20 rounded-2xl shadow-2xl p-8 w-full max-w-xl backdrop-blur-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#00ff87] drop-shadow-[0_0_8px_#00ff87]">
          🧠 Insiders Quiz
        </h1>

        {!showResult ? (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Q{current + 1}. {questions[current].question}
              </h2>

              <div className="grid grid-cols-1 gap-3">
                {questions[current].options.map((option, index) => {
                  let baseStyle =
                    "py-3 px-4 rounded-lg text-lg font-medium transition-all duration-300 border border-[#00ff87]/20";

                  let optionStyle = "bg-[#1a2622] hover:bg-[#1f2e2a]";

                  if (showAnswer) {
                    if (option === questions[current].answer)
                      optionStyle = "bg-[#00ff87]/30 border-[#00ff87]/80";
                    else if (
                      option === selected &&
                      option !== questions[current].answer
                    )
                      optionStyle = "bg-red-600/50 border-red-600";
                    else optionStyle = "bg-[#121917]/60";
                  } else if (selected === option) {
                    optionStyle =
                      "bg-[#00ff87]/40 border-[#00ff87] shadow-[0_0_8px_#00ff87]";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className={`${baseStyle} ${optionStyle}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <p className="text-sm text-gray-400">
                Question {current + 1} / {questions.length}
              </p>
              <button
                onClick={handleNext}
                disabled={!selected || showAnswer}
                className={`px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300 ${
                  selected && !showAnswer
                    ? "bg-[#00ff87]/20 hover:bg-[#00ff87]/30 border border-[#00ff87]/40"
                    : "bg-[#1a2622] border border-[#00ff87]/10 cursor-not-allowed"
                }`}
              >
                {current + 1 === questions.length ? "Finish" : "Next →"}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-[#00ff87] drop-shadow-[0_0_8px_#00ff87]">
              🎉 Quiz Complete!
            </h2>
            <p className="text-xl">
              You scored{" "}
              <span className="text-[#00ff87] font-bold">
                {score}/{questions.length}
              </span>
            </p>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleRestart}
                className="px-6 py-2 rounded-lg font-semibold bg-[#00ff87]/20 hover:bg-[#00ff87]/30 border border-[#00ff87]/40 transition-all"
              >
                🔁 Play Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
