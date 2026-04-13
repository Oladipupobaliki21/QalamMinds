
import levels from "../data/levels";
import DeckCard from "../components/Deckcard";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      
      {levels.map((level) => (
        <div key={level.level} className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-green-400">
            {level.level}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {level.lessons.map((lesson) => (
              <DeckCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}
export default Dashboard;