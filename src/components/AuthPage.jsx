import React from "react";
import Logo from "../assests/logo.png";
import Illustration from "../assests/cuate.png";

import Form from "./Form";

const AuthPage = () => {
  return (
    <div className="flex box-border ">
      {/* left side */}

      <div className=" bg-[#d4ecff] md:h-[30rem] lg:h-[40.5rem] w-0 md:w-6/12 lg:w-7/12">
        <img className="mt-10 ml-20 mb-16" src={Logo} alt="logo" />

        <div>
          <img
            className="w-full  mt-40 lg:mt-2 ml-4 md:ml-8 lg:ml-20 md:w-[35rem] lg:w-[45rem]"
            src={Illustration}
            alt="illustration"
          />
        </div>
      </div>

      {/* right side */}

      <div className=" w-full md:w-6/12   lg:w-5/12 bg-[#fff]">
        <img
          className=" mt-10 w-20 overflow-hidden object-contain mx-auto md:hidden"
          src={Logo}
          alt="logo"
        />
        <div className=" p-0 md:pl-10 lg:pl-20">
          <h1 className=" mx-auto  lg:mx-0 w-[90%] md:w-[297px] mb-6 lg:w-[361px] mt-20 font-bold text-3xl md:text-2xl lg:text-4xl text-[#193D59] ">
            Student Registration
          </h1>
          <div >
            <Form />
      
           
          </div>

          <div>
            <p className="mt-6 w-[90%] mx-auto lg:mx-0  ">
              Already have an account?{" "}
              <span className="ml-1 text-[#2196F3]  ">Log in</span>
            </p>
          </div>

          <div className="mt-4 text-sm text-[#55616E] mx-auto lg:mx-0 w-[90%] mb-10  ">
            <p>
              {" "}
              By confirming the sign up on our website, you <br /> automatically
              agree to the <span className=" underline">Terms of Use</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
