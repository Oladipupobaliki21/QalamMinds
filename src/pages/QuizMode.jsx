
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateProgress } from "../utils/progress";

function QuizMode() {
  const location = useLocation();
  const navigate = useNavigate();

  const lesson = location.state?.lesson;
  const cards = lesson?.cards || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const currentCard = cards[currentIndex];

  // ✅ FIX: Run unlock logic AFTER quiz ends
  useEffect(() => {
    if (showResult && lesson) {
      const percentage = Math.round((score / cards.length) * 100);
      const passed = percentage >= 60;

      if (passed) {
        updateProgress(lesson.level);
      }
    }
  }, [showResult, score, cards.length, lesson]);



  // Generate options safely
  const generateOptions = () => {
    if (!currentCard) return [];

    if (cards.length < 4) {
      return cards.map((card) => card.meaning);
    }

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

  const options = generateOptions();

  const handleAnswer = (option) => {
    if (selected) return;

    setSelected(option);

    if (option === currentCard.meaning) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      setSelected(null);

      if (currentIndex < cards.length - 1) {
        setCurrentIndex((prev) => prev + 1);
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
    const passed = percentage >= 60;

    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center text-center p-6">

        <h1 className="text-3xl font-bold mb-4">
          {passed ? "🎉 You Passed!" : "😢 Try Again"}
        </h1>

        <p className="text-lg mb-2">
          Score: {score} / {cards.length}
        </p>

        <p
          className={`text-2xl font-semibold ${
            passed ? "text-green-400" : "text-red-400"
          }`}
        >
          {percentage}%
        </p>

        <p className="mt-2 text-gray-400">
          {passed
            ? "Great job! You can move to the next level."
            : "Review the lesson and try again."}
        </p>

        <div className="flex gap-4 mt-6">
          <button
            onClick={() => window.location.reload()}
            className="bg-yellow-400 text-black px-5 py-2 rounded-lg"
          >
            Retry
          </button>

          <button
            onClick={() => navigate("/", { replace: true })}
            className="bg-green-500 px-5 py-2 rounded-lg"
          >
            Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 flex flex-col items-center justify-center">

      <h2 className="mb-4 text-xl font-semibold">
        {lesson.title} Quiz
      </h2>

      {/* Progress bar */}
      <div className="w-full max-w-sm bg-slate-700 h-2 rounded-full mb-6">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{
            width: `${((currentIndex + 1) / cards.length) * 100}%`,
          }}
        ></div>
      </div>

      <p className="text-sm text-gray-400 mb-2">
        Choose the correct meaning:
      </p>

      <p className="mb-6 text-3xl font-bold">
        {currentCard.arabic}
      </p>

      <div className="grid grid-cols-1 gap-3 w-full max-w-sm">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={`p-3 rounded-lg transition ${
              selected
                ? option === currentCard.meaning
                  ? "bg-green-500"
                  : option === selected
                  ? "bg-red-500"
                  : "bg-slate-700 opacity-50"
                : "bg-slate-700 hover:bg-slate-600"
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