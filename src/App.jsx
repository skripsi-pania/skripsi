import "./App.css";
import Dashboard from "./Components/Dashboard";
import "./Components/CSS/NavFott.css";
import { Route, Routes } from "react-router-dom";
import Wedding from "./Components/Wedding";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wedding" element={<Wedding />} />
      </Routes>
    </div>
  );
}

export default App;
