

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