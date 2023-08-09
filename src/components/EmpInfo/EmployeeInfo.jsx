import React from "react";
import Pencil from "../../assests/pencil.png";
import Apple from "../../assests/Q76DPRQ3Ix0.png";
import Linkedin from "../../assests/linkedin.png";
import User from "../../assests/user.png";
import Location from "../../assests/location.png";
import Globe from "../../assests/globe.png";
import Mail from "../../assests/envelope.png";

import "./EmployeeInfo.scss";

const tech = [
  {
    heading: "tech",
  },
  {
    heading: "tech",
  },
  {
    heading: "tech",
  },
  {
    heading: "tech",
  },
  {
    heading: "tech",
  },
];

const EmployeeInfo = () => {
  return (
    <div className="emp-container">
      <div className="flex justify-between mx-auto">
        <h1 className="mt-10 ml-8 text-2xl font-semibold text-blue ">
          Employer info
        </h1>
        <img
          className=" mt-10 mr-10 object-contain overflow-hidden"
          src={Pencil}
          alt="pen"
        />
      </div>

      <div className="flex">
        <img className="ml-10 mt-8 rounded-full" src={Apple} alt="apple-logo" />
        <div className="flex flex-col mt-4">
          <h4 className="text-xl font-semibold mt-2 ml-2">Apple</h4>
          <p className="ml-3 text-gray text-sm "> @appleco</p>
          <div className="w-10 h-10 bg-primary rounded-full mt-3 ml-2 ">
            <img className="w-6  mx-auto mt-2" src={Linkedin} alt="linkedin" />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex ml-6 mt-5">
          <img className="w-6 mr-2 object-contain" src={User} alt="" />
          <p className="mt-1 text-sm">248 employees</p>
        </div>
        <div className="flex mr-16 mt-5">
          <img className=" w-6 object-contain" src={Location} alt="" />
          <p className="ml-4 mt-1 text-sm">Cupertino,CA,USA</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex ml-6 mt-3">
          <img className="w-6 mr-2 object-contain" src={Globe} alt="" />
          <p className="mt-1 text-sm underline">apple.com</p>
        </div>
        <div className="flex mr-12 mt-3">
          <img className=" w-6 object-contain" src={Mail} alt="" />
          <p className="ml-4 mt-1 text-sm">a.hrdepartment.com</p>
        </div>
      </div>

      <p className="text-sm ml-8 mt-10">
        Apple is an american coroporation that manufactures personal <br /> and
        tablet computer, audio players, smartphones, and <br /> software.One of
        the pioneers in the fiel...
      </p>
      <div className="ml-8">
        {tech.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gray w-[67px] h-[34px] ml-1 rounded-2xl  mt-6 inline-block"
            >
              <p className="pt-2 pl-5 text-sm">{item.heading}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeInfo;