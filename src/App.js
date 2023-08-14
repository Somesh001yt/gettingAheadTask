
import "./App.css";
import HomePage from "./pages/home/HomePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import FeaturePage from "./pages/features/FeaturePage";
import JobsPage from "./pages/home/JobsPage";
import MoreInfo from "./pages/more-info/MoreInfo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/profile-info" element={<ProfileInfo/>} />
        {/* <Route path="/feature" element={<FeaturePage/>} />
        <Route path="/jobs" element={<JobsPage/>} />
        <Route path="/moreInfo" element={<MoreInfo/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
