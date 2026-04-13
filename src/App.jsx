
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StudyMode from "./pages/StudyMode";
import QuizMode from "./pages/Quizmode";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/study" element={<StudyMode />} />
        <Route path="/quiz" element = {<QuizMode/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;