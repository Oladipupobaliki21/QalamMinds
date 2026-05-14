// // import { Link } from "react-router-dom";

// // function Home() {
// //   return (
// //     <div className="min-h-screen bg-slate-900 text-white">

// //       {/* NAVBAR */}
// //       <nav className="flex justify-between items-center px-8 py-4 border-b border-slate-700">
// //         <h1 className="text-2xl font-bold text-green-400">
// //           QalamMinds
// //         </h1>

// //         <div className="flex gap-4">
// //           <Link
// //             to="/login"
// //             className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600"
// //           >
// //             Login
// //           </Link>

// //           <Link
// //             to="/signup"
// //             className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600"
// //           >
// //             Sign Up
// //           </Link>
// //         </div>
// //       </nav>

// //       {/* HERO SECTION */}
// //       <section className="flex flex-col items-center justify-center text-center px-6 py-20">

// //         <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
// //           Master Arabic the Smart Way with{" "}
// //           <span className="text-green-400">QalamMinds</span>
// //         </h1>

// //         <p className="mt-6 text-gray-400 max-w-xl text-lg">
// //           Learn vocabulary step-by-step from beginner to advanced using
// //           flashcards, quizzes, and structured lessons inspired by
// //           *Duruusul Lugah*.
// //         </p>

// //         <div className="flex gap-4 mt-8">
// //           <Link
// //             to="/signup"
// //             className="bg-green-500 px-6 py-3 rounded-lg text-lg hover:bg-green-600"
// //           >
// //             Get Started
// //           </Link>

// //           <Link
// //             to="/login"
// //             className="bg-slate-700 px-6 py-3 rounded-lg text-lg hover:bg-slate-600"
// //           >
// //             Login
// //           </Link>
// //         </div>
// //       </section>

// //       {/* FEATURES */}
// //       <section className="px-6 py-16 bg-slate-800">
// //         <h2 className="text-3xl font-bold text-center mb-10">
// //           Why QalamMinds?
// //         </h2>

// //         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

// //           <div className="bg-slate-900 p-6 rounded-xl shadow-md">
// //             <h3 className="text-xl font-semibold mb-2">
// //               📚 Structured Learning
// //             </h3>
// //             <p className="text-gray-400">
// //               Follow a guided path from beginner to advanced levels.
// //             </p>
// //           </div>

// //           <div className="bg-slate-900 p-6 rounded-xl shadow-md">
// //             <h3 className="text-xl font-semibold mb-2">
// //               🧠 Smart Flashcards
// //             </h3>
// //             <p className="text-gray-400">
// //               Learn and retain vocabulary with interactive cards.
// //             </p>
// //           </div>

// //           <div className="bg-slate-900 p-6 rounded-xl shadow-md">
// //             <h3 className="text-xl font-semibold mb-2">
// //               🧪 Quiz & Progress
// //             </h3>
// //             <p className="text-gray-400">
// //               Test yourself and unlock levels as you improve.
// //             </p>
// //           </div>

// //         </div>
// //       </section>

// //       {/* FOOTER */}
// //       <footer className="text-center py-6 text-gray-500 text-sm">
// //         © {new Date().getFullYear()} QalamMinds. All rights reserved.
// //       </footer>
// //     </div>
// //   );
// // }

// // export default Home;


// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { BookOpen, Brain, Trophy } from "lucide-react";

// function Home() {
//   return (
//     <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">

//       {/* NAVBAR */}
//       <nav className="flex justify-between items-center px-8 py-4 border-b border-slate-700 backdrop-blur-md">
//         <h1 className="text-2xl font-bold text-green-400">
//           QalamMinds
//         </h1>

//         <div className="flex gap-4">
//           <Link
//             to="/login"
//             className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition"
//           >
//             Login
//           </Link>

//           <Link
//             to="/signup"
//             className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition"
//           >
//             Sign Up
//           </Link>
//         </div>
//       </nav>

//       {/* HERO */}
//       <section className="flex flex-col items-center justify-center text-center px-6 py-24">

//         <motion.h1
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-bold max-w-3xl"
//         >
//           Master Arabic the Smart Way with{" "}
//           <span className="text-green-400">QalamMinds</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="mt-6 text-gray-400 max-w-xl text-lg"
//         >
//           Learn vocabulary step-by-step from beginner to advanced using
//           flashcards, quizzes, and structured lessons.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="flex gap-4 mt-8"
//         >
//           <Link
//             to="/signup"
//             className="bg-green-500 px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition shadow-lg shadow-green-500/30"
//           >
//             Get Started
//           </Link>

//           <Link
//             to="/login"
//             className="bg-slate-700 px-6 py-3 rounded-lg text-lg hover:bg-slate-600 transition"
//           >
//             Login
//           </Link>
//         </motion.div>
//       </section>

//       {/* FEATURES */}
//       <section className="px-6 py-16">

//         <h2 className="text-3xl font-bold text-center mb-12">
//           Why QalamMinds?
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="bg-slate-800 p-6 rounded-xl shadow-lg"
//           >
//             <BookOpen className="text-green-400 mb-3" size={32} />
//             <h3 className="text-xl font-semibold mb-2">
//               Structured Learning
//             </h3>
//             <p className="text-gray-400">
//               Follow a guided path from beginner to advanced levels.
//             </p>
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="bg-slate-800 p-6 rounded-xl shadow-lg"
//           >
//             <Brain className="text-green-400 mb-3" size={32} />
//             <h3 className="text-xl font-semibold mb-2">
//               Smart Flashcards
//             </h3>
//             <p className="text-gray-400">
//               Learn and retain vocabulary with interactive cards.
//             </p>
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="bg-slate-800 p-6 rounded-xl shadow-lg"
//           >
//             <Trophy className="text-green-400 mb-3" size={32} />
//             <h3 className="text-xl font-semibold mb-2">
//               Quiz & Progress
//             </h3>
//             <p className="text-gray-400">
//               Test yourself and unlock levels as you improve.
//             </p>
//           </motion.div>

//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="text-center py-6 text-gray-500 text-sm">
//         © {new Date().getFullYear()} QalamMinds. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// export default Home;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Brain, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

function Home() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="relative min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white dark:text-white">

      {/* 🌈 FLOATING GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-125 h-125 bg-green-500 opacity-20 blur-3xl rounded-full top-25 left-[25 animate-pulse"></div>
        <div className="absolute w-100 h-100 bg-blue-500 opacity-20 blur-3xl rounded-full bottom-25 right-25 animate-pulse"></div>
      </div>

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-slate-700 backdrop-blur-md">

        <h1 className="text-2xl font-bold text-green-400">
          QalamMinds
        </h1>

        <div className="flex items-center gap-4">

          {/* 🌗 DARK MODE TOGGLE */}
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-2 rounded bg-slate-700 hover:bg-slate-600 transition"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <Link
            to="/login"
            className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold max-w-3xl"
        >
          Master Arabic the Smart Way with{" "}
          <span className="text-green-400">QalamMinds</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-400 max-w-xl text-lg"
        >
          Learn vocabulary step-by-step from beginner to advanced using
          flashcards, quizzes, and structured lessons.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 mt-8"
        >
          <Link
            to="/signup"
            className="bg-green-500 px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition shadow-lg shadow-green-500/30"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="bg-slate-700 px-6 py-3 rounded-lg text-lg hover:bg-slate-600 transition"
          >
            Login
          </Link>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-16">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why QalamMinds?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 p-6 rounded-xl shadow-lg"
          >
            <BookOpen className="text-green-400 mb-3" size={32} />
            <h3 className="text-xl font-semibold mb-2">
              Structured Learning
            </h3>
            <p className="text-gray-400">
              Follow a guided path from beginner to advanced levels.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 p-6 rounded-xl shadow-lg"
          >
            <Brain className="text-green-400 mb-3" size={32} />
            <h3 className="text-xl font-semibold mb-2">
              Smart Flashcards
            </h3>
            <p className="text-gray-400">
              Learn and retain vocabulary with interactive cards.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 p-6 rounded-xl shadow-lg"
          >
            <Trophy className="text-green-400 mb-3" size={32} />
            <h3 className="text-xl font-semibold mb-2">
              Quiz & Progress
            </h3>
            <p className="text-gray-400">
              Test yourself and unlock levels as you improve.
            </p>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} QalamMinds. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;














