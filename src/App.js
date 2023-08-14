
import "./App.css";
import HomePage from "./pages/home/HomePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import ProfileInfo from "./components/ProfileInfo/ProfileInfo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/profile-info" element={<ProfileInfo/>} />
      </Routes>
    </div>
  );
}

export default App;
