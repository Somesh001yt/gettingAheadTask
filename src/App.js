
import "./App.css";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from "react-router-dom";

import ProfileInfo from "./components/ProfileInfo/ProfileInfo";

import Jobs from "./pages/jobs/Jobs";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Empeditinfo from "./components/editinfo/Empeditinfo";
import ProfilePage from "./pages/profilepage/ProfilePage";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/profile-info" element={<ProfileInfo/>} />
        <Route path="/edit-info" element={<Empeditinfo/>} />
        <Route path="/profile-page" element={<ProfilePage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
