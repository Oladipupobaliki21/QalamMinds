const defaultProgress = {
  Beginner: true,
  Intermediate: false,
  Advanced: false,
};

export const getProgress = () => {
  const saved = localStorage.getItem("progress");
  return saved ? JSON.parse(saved) : defaultProgress;
};

export const updateProgress = (level) => {
  const progress = getProgress();

  if (level === "Beginner") {
    progress.Intermediate = true;
  }

  if (level === "Intermediate") {
    progress.Advanced = true;
  }

  localStorage.setItem("progress", JSON.stringify(progress));
};