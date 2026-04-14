
import { useNavigate } from "react-router-dom";

function DeckCard({ lesson, disabled }) {
  const navigate = useNavigate();

  const handleStudy = () => {
    if (!disabled) {
      navigate("/study", { state: { lesson } });
    }
  };

  return (
    <div
      className={`p-4 rounded-2xl shadow-md transition ${
        disabled
          ? "bg-slate-700 opacity-50 cursor-not-allowed"
          : "bg-slate-800 hover:scale-105 cursor-pointer"
      }`}
    >
      <h3 className="text-lg font-semibold">{lesson.title}</h3>

      <p className="text-gray-400 text-sm mb-3">
        {lesson?.cards?.length || 0} cards
      </p>

      <button
        onClick={handleStudy}
        disabled={disabled}
        className="bg-green-500 hover:bg-green-600 w-full py-2 rounded-lg disabled:bg-gray-500"
      >
        {disabled ? "Locked 🔒" : "Study"}
      </button>
    </div>
  );
}

export default DeckCard;