// import React from "react";

// function DeckCard({ title, count }) {
//   return (
//     <div className="bg-slate-800 p-4 rounded-2xl shadow-md">
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="text-gray-400 text-sm mb-3">{count} cards</p>

//       <button className="bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-lg text-sm font-medium">
//         Study
//       </button>
//     </div>
//   );
// }

// export default DeckCard;

import React from "react";
import { useNavigate } from "react-router-dom";

function DeckCard({ title, count }) {
  const navigate = useNavigate();

  const handleStudy = () => {
   navigate("/study", { state: { title } });
  };

  return (
    <div className="bg-slate-800 p-4 rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm mb-3">{count} cards</p>

      <button
        onClick={handleStudy}
        className="bg-green-500 hover:bg-green-600 w-full py-2 rounded-lg"
      >
        Study
      </button>
    </div>
  );
}

export default DeckCard;