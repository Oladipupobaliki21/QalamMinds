import React from "react";
import Navbar from "../components/Navbar";
import ProgressCard from "../components/ProgressCard";
import DeckCard from "../components/Deckcard";
// import Flashcard from "../components/Flashcard";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <Navbar />

      <ProgressCard />

      <div>
        <h2 className="text-lg font-semibold mb-4">Your Decks</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DeckCard title="Arabic Vocabulary" count={3} />
         
        
        </div>
      </div>
        {/* <Flashcard
         arabic="كتاب"
         meaning="Book"
        pronunciation="Kitab"
        /> */}
      <button className="fixed bottom-6 right-6 bg-yellow-400 text-black px-5 py-3 rounded-full shadow-lg">
        + New Deck
      </button>
    </div>
  );
}

export default Dashboard;