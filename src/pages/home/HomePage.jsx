import React, { useState } from "react";
import "./HomePage.scss";
import JobsPage from "./JobsPage";
import FeaturePage from "../features/FeaturePage";
import MoreInfo from "../more-info/MoreInfo";
import EmployeeInfo from "../../components/EmpInfo/EmployeeInfo";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("feature");

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-10 ">
        <div className="mx-auto">
          <EmployeeInfo />
        </div>

        <div className="   w-full mx-auto md:w-[70%]mr-2  z-10 overflow-hidden mr-auto h-full mb-10">
          <nav className="home-heading">
            <ul className="flex items-center gap-10 ml-4 lg:ml-10 lg:gap-12 ">
              <li className={activeSection === "feature" ? "active" : 'simple'} onClick={() => handleNavLinkClick("feature")}>
                Feature content
              </li>
              <li className={activeSection === "jobs" ? "active" : "simple"} onClick={() => handleNavLinkClick("jobs")}>Jobs</li>
              <li  className={activeSection=== "moreInfo" ? "active" : "simple"} onClick={() => handleNavLinkClick("moreInfo")}>More info</li>
            </ul>
          </nav>
          <div className="content-section">
            {activeSection === "feature" && <FeaturePage />}
            {activeSection === "jobs" && <JobsPage />}
            {activeSection === "moreInfo" && <MoreInfo />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
