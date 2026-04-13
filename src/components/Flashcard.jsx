import React, { useState } from "react";

function Flashcard({ arabic, meaning, pronunciation }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full max-w-sm mx-auto cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-64 transform-style-3d transition-transform duration-500 transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
     
        <div className="absolute w-full h-full backface-hidden bg-slate-800 rounded-2xl flex flex-col justify-center items-center text-white shadow-lg">
          <h2 className="text-3xl font-bold">{arabic}</h2>
          <p className="text-gray-400 mt-2">Tap to reveal</p>
        </div>

       
        <div className="absolute w-full h-full backface-hidden bg-green-600 rounded-2xl flex flex-col justify-center items-center text-white shadow-lg rotate-y-180">
          <h2 className="text-2xl font-semibold">{meaning}</h2>
          <p className="text-sm mt-2">{pronunciation}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;