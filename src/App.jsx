import "./App.css";
import Dashboard from "./Components/Dashboard";
import "./Components/CSS/NavFott.css";
import { Route, Routes } from "react-router-dom";
import Wedding from "./Components/Wedding";
import Engagement from "./Components/Engagement";
import Graduation from "./Components/Graduation";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/graduation" element={<Graduation />} />
      </Routes>
    </div>
  );
}

export default App;
