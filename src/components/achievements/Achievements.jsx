import React from "react";
import Plus from "../../assests/plus.png";
import "./Achievements.scss";
import Option from "../../assests/option.png";
import { AchievementsData } from "./AchievementsData";

const Achievements = () => {
  return (
    <div className="achievements-container">
      <div className="achievements-heading">
        <h4>Achievements</h4>
        <img src={Plus} alt="plus" />
      </div>


    {
      AchievementsData.map((item , id)=>{
        return (
          <div key={id} className="achievements-content">
          <div className="leftSide">
            <h6>Achievements</h6>
            <p>{item.certificate}</p>
          </div>
  
          <div className="rightSide">
            <img className="option-img" src={Option} alt="" />
          </div>
        </div>
        )
      })
    }

    
    </div>
  );
};

export default Achievements;
