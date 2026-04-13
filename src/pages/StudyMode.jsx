import React, { useState } from "react";
import Flashcard from "../components/FlashCard";

function StudyMode() {
  const cards = [
    {
      id: 1,
      arabic: "كتاب",
      meaning: "Book",
      pronunciation: "Kitab",
    },
    {
      id: 2,
      arabic: "قلم",
      meaning: "Pen",
      pronunciation: "Qalam",
    },
    {
      id: 3,
      arabic: "مدرسة",
      meaning: "School",
      pronunciation: "Madrasa",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [known, setKnown] = useState([]);
  const [unknown, setUnknown] = useState([]);

  const currentCard = cards[currentIndex];

  const handleKnow = () => {
    setKnown([...known, currentCard.id]);
    nextCard();
  };

  const handleDontKnow = () => {
    setUnknown([...unknown, currentCard.id]);
    nextCard();
  };

  const nextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("🎉 You have completed this deck!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 flex flex-col items-center justify-center">
      
     
      <p className="mb-4 text-gray-400">
        Card {currentIndex + 1} of {cards.length}
      </p>

      
      <Flashcard
        arabic={currentCard.arabic}
        meaning={currentCard.meaning}
        pronunciation={currentCard.pronunciation}
      />

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleDontKnow}
          className="bg-red-500 px-5 py-2 rounded-lg"
        >
          Don't Know
        </button>

        <button
          onClick={handleKnow}
          className="bg-green-500 px-5 py-2 rounded-lg"
        >
          Know
        </button>
      </div>

      {/* Stats */}
      <div className="mt-6 text-sm text-gray-400">
        Known: {known.length} | Unknown: {unknown.length}
      </div>
    </div>
  );
}

export default StudyMode;