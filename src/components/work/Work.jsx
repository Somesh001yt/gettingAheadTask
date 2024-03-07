import React from "react";
import Plus from "../../assests/plus.png";
import "./Work.scss";
import Apple from "../../assests/Q76DPRQ3Ix0.png";
import Option from "../../assests/option.png";
import { workData } from "./WorkData";

const Work = () => {
  return (
    <div className="work-container">
      <div className="work-heading">
        <h4>Work</h4>
        <img src={Plus} alt="plus" />
      </div>

      {workData.map((item, id) => {
        return (
          <div key={id}>
            <div className="work-content">
              <div className="work-leftSide">
                <img className="apple-img" src={item.img} alt="" />
                <div className="leftSide-details">
                  <h6>{item.device}</h6>
                  <p>{item.date}</p>
                </div>
              </div>
              <div className="work-rightSide">
                <img className="option-img" src={Option} alt="option" />
              </div>
            </div>
            <p className="work-description">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
