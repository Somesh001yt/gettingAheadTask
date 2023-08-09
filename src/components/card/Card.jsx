import React from "react";
import Photo from "../../assests/photo.png";
import Option from "../../assests/option.png";
import Bookmark from "../../assests/bookmark_outline.png";
import "./Card.scss";
import CardData from "./Carddetails";

const Card = (props) => {
  return (
    <div className="bg-[#FFFFFF] w-[70%] mt-40 rounded-sm h-full ">
      <div className="flex  justify-between ">
        <h1 className="mt-10 ml-8 mb-8 text-blue font-semibold text-2xl ">
          Jobs <span className="text-gray text-base ml-2">(320)</span>
        </h1>
        <div className="mr-4 mt-10 ">
          <ion-icon name="add-outline"></ion-icon>
        </div>
      </div>

      {/* card */}

      {props.details.map((value, index) => (
        <div className=" card-container" key={index}>
          <div className="relative ">
            <img className="image" src={value.img} alt="" />

            <div className="flex justify-between ">
              <div className="bg-[#FFFFFF] rounded-full w-14 h-14 absolute top-4 left-6 hover:scale-110 ">
                {" "}
                <img className=" mt-4 mx-auto" src={Option} alt="" />
              </div>
              <div className="bg-[#FFFFFF] rounded-full w-14 h-14 absolute top-4 left-60 hover:scale-110">
                {" "}
                <img className=" mt-4 mx-auto" src={Bookmark} alt="" />
              </div>
            </div>
          </div>
          <h1 className="ml-4 text-2xl font-medium mt-8">{value.heading}</h1>

          <div className="flex  mt-1">
            <p className="text-gray text-sm ml-4">{value.device}</p>
            <div className="flex justify-between text-gray text-sm ml-3 mt-1">
              <ion-icon name="location-outline"></ion-icon>
              <p className="ml-2 mt-[-4px]">{value.location}</p>
            </div>
          </div>

          <p className=" text-sm font-normal ml-4 mt-6">{value.description}</p>

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
      ))}
    </div>
  );
};

export default Card;
