import { useParams } from "react-router-dom";
import { koans } from "../data/koans";// you can later make this import dynamic
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const KoanPage = () => {
  const { topic, workshop } = useParams();
  const exercises = koans[workshop] || [];
  
  if (!exercises.length) {
    return (
      <div className="min-h-screen bg-[#0a0f0d] text-[#e8f5e9] flex items-center justify-center">
        <p className="text-[#7a9681] text-lg">
          ⚠️ No Koans found for <span className="text-[#00ff87]">{topic}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0f0d] text-[#e8f5e9] p-8 space-y-8 lg:ml-64">
      <h1 className="text-3xl font-bold capitalize mb-6">
        {topic.replace("-", " ")} Koans
      </h1>

      {exercises.map((ex) => (
        <KoanCard key={ex.id} {...ex} />
      ))}
    </div>
  );
};

const KoanCard = ({ title, task, initialCode, solution, difficulty }) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="bg-[#121917] p-5 rounded-xl border border-[#00ff87]/10 hover:border-[#00ff87]/20 transition-all">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-[#e8f5e9] mb-1 text-lg">{title}</h3>
          <span className="text-xs uppercase text-[#00ff87]/70 font-medium">{difficulty}</span>
        </div>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="text-[#00ff87] hover:text-[#7af0b1] flex items-center gap-1 transition"
        >
          {showSolution ? (
            <>
              Hide <ChevronUp size={16} />
            </>
          ) : (
            <>
              Show Solution <ChevronDown size={16} />
            </>
          )}
        </button>
      </div>

      <p className="text-[#7a9681] text-sm mt-3">{task}</p>

      <div className="mt-4">
        <p className="text-[#00ff87]/60 text-xs mb-1">Your Code:</p>
        <pre className="bg-[#0a0f0d] text-[#00ff87]/90 p-3 rounded-lg text-xs overflow-auto">
          {initialCode}
        </pre>
      </div>

      {showSolution && (
        <div className="mt-4">
          <p className="text-[#00ff87]/60 text-xs mb-1">Solution:</p>
          <pre className="bg-[#0a0f0d] text-[#aefcd9]/90 p-3 rounded-lg text-xs overflow-auto">
            {solution}
          </pre>
        </div>
      )}
    </div>
  );
};

export default KoanPage;
