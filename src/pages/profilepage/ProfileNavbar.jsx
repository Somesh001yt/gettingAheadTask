import React, { useState } from "react";
import "./ProfileNavbar.scss";
import Education from "../../components/education/Education";
import Work from "../../components/work/Work";
import Certificates from "../../components/certificates/Certificates";
import Achievements from "../../components/achievements/Achievements";
import DeletePopover from "../../components/DeletePopover";

const ProfileNavbar = () => {
  const [active, setActive] = useState("education");
  const [openprofile, setOpenprofile] = useState(false);

  const closeDropdown = () => {
    console.log("click");
    setOpenprofile((prev) => !prev);
  };

  return (
    <div className="profilenav">
      <nav className="profilenav-container">
        <ul>
          <li
            className={active === "education" ? "active" : "list"}
            onClick={() => setActive("education")}
          >
            Education
          </li>
          <li
            className={active === "work" ? "active" : "list"}
            onClick={() => setActive("work")}
          >
            Work
          </li>
          <li
            className={active === "certificates" ? "active" : "list"}
            onClick={() => setActive("certificates")}
          >
            Certificates
          </li>
          <li
            className={active === "achievements" ? "active" : "list"}
            onClick={() => setActive("achievements")}
          >
            Achievements
          </li>
        </ul>
      </nav>

      <div>
        {active === "education" && <Education />}
        {active === "work" && <Work />}
        {active === "certificates" && <Certificates />}
        {active === "achievements" && <Achievements />}
      </div>

      <p  onClick={() => setOpenprofile((prev) => !prev)}  className="delete">Delete</p>

      <button  onClick={() => setOpenprofile((prev) => !prev)} className="delete-btn">Delete</button>

      {openprofile && <DeletePopover closeFunction={() => closeDropdown()} />}
    </div>
  );
};

export default ProfileNavbar;
