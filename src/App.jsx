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

export default function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionClick = (option) => {
    if (!showAnswer) setSelected(option);
  };

  const handleNext = () => {
    // Check if the answer was correct
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    // Show correct/wrong answers for 1.5 sec before going to next question
    setShowAnswer(true);
    setTimeout(() => {
      setShowAnswer(false);
      setSelected("");
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const handleRestart = () => {
    setScore(0);
    setCurrent(0);
    setSelected("");
    setShowResult(false);
    setShowAnswer(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col justify-center items-center text-white p-6">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">🧠 Trivia Quiz</h1>

        {!showResult ? (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Q{current + 1}. {questions[current].question}
              </h2>

              <div className="grid grid-cols-1 gap-3">
                {questions[current].options.map((option, index) => {
                  let optionStyle = "bg-white/20 hover:bg-white/30";
                  if (showAnswer) {
                    if (option === questions[current].answer)
                      optionStyle = "bg-green-600";
                    else if (option === selected && option !== questions[current].answer)
                      optionStyle = "bg-red-600";
                    else optionStyle = "bg-white/10";
                  } else if (selected === option) {
                    optionStyle = "bg-pink-600";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className={`py-3 px-4 rounded-lg text-lg font-medium transition-all duration-300 ${optionStyle}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <p className="text-sm opacity-75">
                Question {current + 1} of {questions.length}
              </p>
              <button
                onClick={handleNext}
                disabled={!selected || showAnswer}
                className={`px-6 py-2 rounded-lg text-white font-semibold ${
                  selected && !showAnswer
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gray-500 cursor-not-allowed"
                }`}
              >
                {current + 1 === questions.length ? "Finish" : "Next"}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🎉 Quiz Complete!</h2>
            <p className="text-xl mb-6">
              You scored{" "}
              <span className="text-pink-400 font-bold">
                {score}/{questions.length}
              </span>
            </p>
            <button
              onClick={handleRestart}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-all"
            >
              Play Again 🔁
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
