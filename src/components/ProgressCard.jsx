import React from "react";

function ProgressCard() {
  return (
    <div className="bg-slate-800 p-5 rounded-2xl shadow-lg mb-6">
      <h2 className="text-lg font-semibold mb-2">Your Progress</h2>
      <p className="text-sm text-gray-400 mb-3">
        12 cards studied • 7 mastered
      </p>

      <div className="w-full bg-slate-700 h-3 rounded-full">
        <div className="bg-green-500 h-3 rounded-full w-[60%]"></div>
      </div>
    </div>
  );
}

export default ProgressCard;