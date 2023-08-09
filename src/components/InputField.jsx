import React from 'react'
import Hide from "../assests/hide.png";
import Open from "../assests/eye.png"

const InputField = ({label , type, value , onChange , name, error, isPasswordVisible, toggleImage}) => {

    
  return (
    <div className="flex flex-col  mb-5 ">
    <label className="text-sm capitalize ml-5 lg:ml-0 md:ml-6 " htmlFor="">
      {label}
    </label>
    <div className='flex flex-col  relative'>
    <input
        className="w-[90%] mx-auto lg:mx-0 md:w-[347px] lg:w-[408px] h-12 rounded-lg relative  bg-primary p-2"
       type= { type}
       value={value}
       onChange={onChange}
       name = {name}
      
      />
        <p className="text-[#b22b27] text-base mt-1 capitalize">{error}</p>


       {/* <div  onClick={toggleImage} >
       {  
       isPasswordVisible ? (
        <img
        className="w-4 absolute left-[88%] lg:left-96 top-80 ml-1 "
        src={Open}
        alt=""/>
       ) : (
        <img
        className="w-6 absolute left-[88%] lg:left-96  top-96 "
        src={Hide}
        alt=""/>
       )
       }
       </div>  */}
       </div>
    </div>
  )
}

export default InputField;