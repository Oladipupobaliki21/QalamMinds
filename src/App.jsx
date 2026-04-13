
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StudyMode from "./pages/StudyMode";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/study" element={<StudyMode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;