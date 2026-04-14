// const defaultProgress = {
//   Beginner: true,
//   Intermediate: false,
//   Advanced: false,
// };

// export const getProgress = () => {
//   const saved = localStorage.getItem("progress");
//   return saved ? JSON.parse(saved) : defaultProgress;
// };

// export const updateProgress = (level) => {
//   const progress = getProgress();

//   if (level === "Beginner") {
//     progress.Intermediate = true;
//   }

//   if (level === "Intermediate") {
//     progress.Advanced = true;
//   }

//   localStorage.setItem("progress", JSON.stringify(progress));
// };

// const defaultProgress = {
//   Beginner: true,
//   Intermediate: false,
//   Advanced: false,
// };

// export const getProgress = () => {
//   const saved = localStorage.getItem("progress");

//   if (!saved) {
//     localStorage.setItem("progress", JSON.stringify(defaultProgress));
//     return defaultProgress;
//   }

//   return JSON.parse(saved);
// };

// export const updateProgress = (level) => {
//   const progress = getProgress();

//   console.log("Before update:", progress);

//   if (level === "Beginner") {
//     progress.Intermediate = true;
//   }

//   if (level === "Intermediate") {
//     progress.Advanced = true;
//   }

//   localStorage.setItem("progress", JSON.stringify(progress));

//   console.log("After update:", progress);
// };


const defaultProgress = {
  Beginner: true,
  Intermediate: false,
  Advanced: false,
};

// ✅ Named export
export const getProgress = () => {
  const saved = localStorage.getItem("progress");

  if (!saved) {
    localStorage.setItem("progress", JSON.stringify(defaultProgress));
    return defaultProgress;
  }

  return JSON.parse(saved);
};

// ✅ Named export
export const updateProgress = (level) => {
  const progress = getProgress();

  console.log("Updating progress for:", level);

  if (level === "Beginner") {
    progress.Intermediate = true;
  }

  if (level === "Intermediate") {
    progress.Advanced = true;
  }

  localStorage.setItem("progress", JSON.stringify(progress));
};