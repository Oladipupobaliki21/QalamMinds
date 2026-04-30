
// import levels from "../data/levels";
// import DeckCard from "../components/Deckcard";

// function Dashboard() {
//   return (
//     <div className="min-h-screen bg-slate-900 text-white p-6">
      
//       {levels.map((level) => (
//         <div key={level.level} className="mb-8">
//           <h2 className="text-xl font-bold mb-4 text-green-400">
//             {level.level}
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {level.lessons.map((lesson) => (
//               <DeckCard key={lesson.id} lesson={lesson} />
//             ))}
//           </div>
//         </div>
//       ))}

//     </div>
//   );
// }
// export default Dashboard;

import levels from "../data/levels";
import DeckCard from "../components/Deckcard";
import { getProgress } from "../utils/progress";

function Dashboard() {
  const [progress, setProgress] = useState(getProgress());

  // Re-read progress from localStorage every time this page becomes visible
  // (handles returning from quiz via back navigation)
  useEffect(() => {
    const handleFocus = () => setProgress(getProgress());
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  // Also re-read on mount (covers navigate("/") from QuizMode)
  useEffect(() => {
    setProgress(getProgress());
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      
      {levels.map((level) => {
        const isUnlocked = progress[level.level];

        return (
          <div key={level.level} className="mb-8">
            <h2
              className={`text-xl font-bold mb-4 ${
                isUnlocked ? "text-green-400" : "text-gray-500"
              }`}
            >
              {level.level} {isUnlocked ? "🔓" : "🔒"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {level.lessons.map((lesson) => (
                <DeckCard
                  key={lesson.id}
                  lesson={lesson}
                  disabled={!isUnlocked}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Dashboard;