import React from "react";

const Input = ({ label, type, value, onChange, name,  }) => {
  return (
    <div className="flex flex-col  mb-5 ">
      <label className="text-sm lg:text-base capitalize ml-5 lg:ml-0 md:ml-10 mb-3 " htmlFor="">
        {label}
      </label>
      <div className="flex flex-col  relative">
      <input
        className="w-[90%]  mx-auto lg:mx-0 md:w-[90%] lg:w-[62%] h-12 lg:h-14 rounded-2xl relative  bg-primary p-2"
    
       type= { type}
       value={value}
       onChange={onChange}
       name = {name}
      
      />
      </div>
    </div>
  );
};

export default Input;
