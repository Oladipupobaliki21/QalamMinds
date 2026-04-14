import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { updateProgress } from "../utils/progress";

function QuizMode() {
  const location = useLocation();
  const lesson = location.state?.lesson;

  const cards = lesson?.cards || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const currentCard = cards[currentIndex];

  // Generate options
  const generateOptions = () => {
    const options = [currentCard.meaning];

    while (options.length < 4) {
      const random =
        cards[Math.floor(Math.random() * cards.length)].meaning;

      if (!options.includes(random)) {
        options.push(random);
      }
    }

    return options.sort(() => Math.random() - 0.5);
  };

  const options = currentCard ? generateOptions() : [];

  const handleAnswer = (option) => {
    setSelected(option);

    if (option === currentCard.meaning) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelected(null);

      if (currentIndex < cards.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setShowResult(true);
      }
    }, 800);
  };

  if (!lesson) {
    return <p className="text-white p-6">No quiz available</p>;
  }

  // RESULT SCREEN
  if (showResult) {
    const percentage = Math.round((score / cards.length) * 100);
    if (percentage >= 60) {
  updateProgress(lesson.level);
}

    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">Quiz Completed 🎉</h1>

        <p className="text-lg mb-2">Score: {score} / {cards.length}</p>
        <p className="text-green-400 text-xl">{percentage}%</p>

        <button
          onClick={() => window.location.href = "/"}
          className="mt-6 bg-green-500 px-5 py-2 rounded-lg"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 flex flex-col items-center justify-center">

      <h2 className="mb-4 text-xl font-semibold">
        {lesson.title} Quiz
      </h2>

      <p className="mb-6 text-3xl font-bold">
        {currentCard.arabic}
      </p>

      <div className="grid grid-cols-1 gap-3 w-full max-w-sm">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={`p-3 rounded-lg ${
              selected === option
                ? option === currentCard.meaning
                  ? "bg-green-500"
                  : "bg-red-500"
                : "bg-slate-700"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <p className="mt-6 text-gray-400">
        Question {currentIndex + 1} of {cards.length}
      </p>
    </div>
  );
}

export default QuizMode;