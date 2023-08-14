import React, { useState } from "react";
import "./HomePage.scss";
import Header from "../../components/header/Header";
import JobsPage from "./JobsPage";
import FeaturePage from "../features/FeaturePage";
import MoreInfo from "../more-info/MoreInfo";
import { NavLink } from "react-router-dom";
import EmployeeInfo from "../../components/EmpInfo/EmployeeInfo";
import Footer from "../../components/Footer";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('feature');
  

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
  };


 

  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-10 ">
        <div className="mx-auto">
          <EmployeeInfo />
        </div>

        <div className="lg:ml-4 w-full mx-auto md:w-[50%] z-10 overflow-hidden mr-auto h-full mb-10">
          <div className="home-heading">
             <ul className="flex items-center gap-10 ml-10 lg:gap-36 xl:gap-48">
              
              <li   >
                <NavLink
                  exact
                  to="/feature"
                  onClick={() => handleNavLinkClick("feature")} 
                
                >
                  Feature content
                </NavLink>
              </li>
              <li>
                <NavLink
                  
                  to="/jobs"
                  // onClick={() => handleNavLinkClick("jobs")}
                >
                  Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  
                  to="/moreInfo"
                  onClick={() => handleNavLinkClick("moreInfo")}
                >
                  More info
                </NavLink>
              </li> 
            </ul> 
          </div>
           <div className="content-section">
            {activeSection === "feature" && <FeaturePage />}
            {activeSection === "jobs" && <JobsPage />}
            {activeSection === "moreInfo" && <MoreInfo />}
          </div> 
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
