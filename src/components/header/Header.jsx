import React from "react";
import "./Header.scss";
import Logo from "../../assests/logo.png";
import Profile from "../../assests/profile.png";
import { IonIcon } from "@ionic/react";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="left-side">
          <img src={Logo} alt="logo" />

          <ul >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Jobs</a>
            </li>
            <li>
              <a href="/">Search</a>
            </li>
          </ul>
        </div>
        <div className="right-side">
          <div className="flex mr-10     ">
            <h4>Jane Doe</h4>
            <div className="mt-8 ml-2" >  <ion-icon name="caret-down-outline"></ion-icon></div>
          
          </div>
          <div className="image">
            <img src={Profile} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
