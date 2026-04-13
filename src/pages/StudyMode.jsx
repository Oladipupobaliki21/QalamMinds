
import { useLocation } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudyMode() {

  const navigate = useNavigate();
  const location = useLocation();
  const lesson = location.state?.lesson;


  const cards = lesson?.cards || [];

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
      alert("🎉 Lesson completed!");
      navigate("/quiz", { state: { lesson } });
    }
  };

  if (!lesson) {
    return <p className="text-white p-6">No lesson selected</p>;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 flex flex-col items-center justify-center">
      
      <h2 className="mb-4 text-xl font-semibold">
        {lesson.title}
      </h2>

      <p className="mb-4 text-gray-400">
        Card {currentIndex + 1} of {cards.length}
      </p>

      <Flashcard {...currentCard} />

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

      <div className="mt-6 text-sm text-gray-400">
        Known: {known.length} | Unknown: {unknown.length}
      </div>
    </div>
  );
}

export default StudyMode;