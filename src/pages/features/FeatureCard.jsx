import React from "react";
import "./FeaturePage.scss";
import Option from "../../assests/option.png";
import Likes from "../../assests/like.png";
import Comment from "../../assests/conversation.png";
import Share from "../../assests/share.png";

const FeatureCard = (props) => {
  return (
    <>
      <div className="mb-3 ">
        <div className="feature-card">
          <div className="card-box">
            <img src={props.img} alt="" />
            <div className="details-time">
              <h2>{props.device}</h2>
              <p>{props.date}</p>
            </div>
          </div>

          <img className="option-img" src={Option} alt="option" />
        </div>

        <p className="feature-desciption">{props.description}</p>
        {props.image && (
          <img
            className="mx-auto mt-4  w-[80%] lg:w-[90%]  object-cover"
            src={props.image}
            alt="university"
          />
        )}
        <div className="feature-likes">
          <div className="flex w-20">
            <img src={Likes} alt="" />
            <p>{props.likes}</p>
          </div>
          <div className="flex">
            <img src={Comment} alt="" />
            <p>{props.comment}</p>
          </div>
          <div className="flex">
            <img src={Share} alt="" />
            <p>{props.share}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
