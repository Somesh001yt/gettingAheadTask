import React from "react";
import "./ProfileInfo.scss";
import Header from "../header/Header";
import InputField from "../InputField";
import Input from "../Input";
import Footer from "../Footer";
import tech from "../Tags";

const ProfileInfo = () => {
  return (
    <div>
      <Header />
      <div className="profile-container">
        <div className="back-btn">
          <ion-icon
            onClick={(event) => (window.location.href = "/")}
            name="chevron-back-outline"
          ></ion-icon>
          <p className="mt-[-4px] ml-2">Back</p>
        </div>

        <h2 className="profile-heading">Profile info</h2>

        <div className="flex flex-col md:flex-row  mx-auto  md:ml-10 mt-10 ">
          <InputField label="First Name " type="text" name="firstname" />
          <div className="pl-0 md:pl-2 lg:pl-4">
            <InputField label="Last Name " type="text" name="lastname" />
          </div>
        </div>
        <div className="mx-auto lg:ml-10">
          <Input label="Username" name="username" width="w-[58%]" type="text" />

          <div className="mt-10 mx-auto ">
            <p className="ml-5 lg:ml-0 text-sm">Gender</p>
            <div className="mt-4 ml-5 lg:ml-0">
              <input type="radio" name="male" id="" />
              <label className="ml-2" htmlFor="male">
                Male
              </label>
            </div>
            <div className="mt-1 mb-6 ml-5 lg:ml-0 ">
              <input type="radio" name="female" id="" />
              <label className="ml-2" htmlFor="female">
                Female
              </label>
            </div>
          </div>

          <Input label="Date of birth" name="dateofbirth" type="date" />
          <Input label="Location" name="location" type="location" />
          <Input label="Email" name="email" type="email" />
          <Input label="Linkedin" name="linkedin" type="link" />
          <Input label="Github" name="github" type="link" />

          <div className="flex flex-col">
            <label
              className="text-sm lg:text-base capitalize ml-5 lg:ml-0 md:ml-10 mb-3 "
              htmlFor="bio"
            >
              Bio
            </label>
            <textarea
              className="w-[90%]  mx-auto lg:mx-0 md:w-[90%] lg:w-[62%] h-20 rounded-2xl relative pt-2 pb-4  bg-primary p-2"
              type="text"
              name="bio"
              id=""
            />
          </div>

          <h4 className="mt-6  ml-5 lg:ml-0">Tags</h4>
          <div className="w-[90%]  mx-auto lg:mx-0 md:w-[90%] lg:w-[62%] h-full  rounded-2xl relative mt-2 bg-primary p-2 ">
            {tech.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-gray w-[90px] h-[34px] ml-1 rounded-2xl  mt-3 inline-block"
                >
                  <p className="pt-2 pl-7 text-sm">{item.heading}</p>
                </div>
              );
            })}
          </div>

          <div className="flex mt-10 ml-6 mb-5">
            <button
              className="w-32 h-10 bg-[#fff] border-secondary border-[2px] rounded-2xl mr-4"
              type="submit"
            >
              Cancel
            </button>
            <button
              className="w-32 h-10 bg-secondary text-[#fff] rounded-2xl mr-4"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfileInfo;
