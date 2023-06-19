import "./App.css";
import Dashboard from "./Components/Dashboard";
import "./Components/CSS/NavFott.css";
import { Route, Routes } from "react-router-dom";
import Wedding from "./Components/Wedding";
import Engagement from "./Components/Engagement";
import Graduation from "./Components/Graduation";
import AboutUs from "./Components/AboutUs";
import PrivateClass from "./Components/PrivateClass";
import AdminPage from "./Components/Admin/AdminPage";
import LoginUtama from "./Components/LogReg/LoginUtama";
import AdminCrud from "./Components/Admin/AdminCrud";
import AllContent from "./Components/Admin/AdminComponents/AllContent";
import GetContent from "./Components/Admin/AdminComponents/GetContent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/graduation" element={<Graduation />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/privateclass" element={<PrivateClass />} />
        <Route path="/admin-login" element={<LoginUtama />} />
        <Route path="/admin/dashboard" element={<AdminPage />} />
        <Route path="/admin-crud" element={<AdminCrud />} />
        <Route path="/admin/allcontent" element={<AllContent />} />
        <Route
          path="/admin/allcontent/getcontent/:_id"
          element={<GetContent />}
        />
      </Routes>
    </div>
  );
}

export default App;
