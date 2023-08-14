import React from "react";
import Photo from "../../assests/photo.png";
import Option from "../../assests/option.png";
import Bookmark from "../../assests/bookmark_outline.png";
import "./Card.scss";

const Card = (props) => {
  return (
    <div>
      <div className=" card-container ">
        <div className=" second-container">
          <img className="image" src={props.img} alt="" />

          <div className="card-icon ">
            <div className="  option-icon ">
              {" "}
              <img src={Option} alt="" />
            </div>
            <div className="hover:scale-110 bookmark-icon">
              {" "}
              <img src={Bookmark} alt="" />
            </div>
          </div>
        </div>
        <h1 className=" card-heading">{props.heading}</h1>

        <div className="card-details">
          <p className="text-gray text-sm ml-4">{props.device}</p>
          <div className="flex justify-between text-gray text-sm ml-3 mt-1">
            <ion-icon name="location-outline"></ion-icon>
            <p className="ml-2 mt-[-4px]">{props.location}</p>
          </div>
        </div>

        <p className=" text-sm font-normal ml-4 mt-6">{props.description}</p>

        <button className="bg-secondary text-[#ffffff] mt-7 font-sm w-[90%] ml-3 h-10 rounded-xl">
          Apply
        </button>

        <div className="flex justify-between  text-sm text-gray mt-6 ml-4">
          <p>
            views: <span className="text-base text-[#151C21]">325</span>
          </p>
          <p className="mr-4">Posted today</p>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
