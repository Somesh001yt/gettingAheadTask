import React, { useState } from "react";
import "./ProfileNavbar.scss";
import { Link, NavLink } from "react-router-dom";
import Education from "../../components/education/Education";
import Work from "../../components/work/Work";
import Certificates from "../../components/certificates/Certificates";
import Achievements from "../../components/achievements/Achievements";

const ProfileNavbar = () => {
  const [active, setActive] = useState("education");
  

  return (
    <div>
      <nav className="profilenav-container">
        <ul>
          <li onClick={()=> setActive('education')}>Education</li>
          <li  onClick={()=> setActive('work')}>Work</li>
          <li  onClick={()=> setActive('certificates')}>Certificates</li>
          <li  onClick={()=> setActive('achievements')}>Achievements</li>
        </ul>
      </nav>

      <div>
        {active === "education" && <Education />}
        {active === "work" && <Work />}
        {active === "certificates" && <Certificates />}
        {active === "achievements" && <Achievements />}
      </div>
    </div>
  );
};

export default ProfileNavbar;
