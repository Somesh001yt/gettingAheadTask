import React from 'react'


const InputField = ({label , type, value , onChange , name, error, width}) => {

    
  return (
    <div className="flex flex-col  mb-5 ">
    <label className="text-sm lg:text-base capitalize ml-5 lg:ml-0 md:ml-1 mb-3" htmlFor="">
      {label}
    </label>
    <div className='flex flex-col  relative'>
    <input
        className=' w-[90%] md:w-[40vw] lg:w-[32rem] mx-auto lg:mx-0 h-12 lg:h-14 rounded-2xl relative  bg-primary p-2'
        width={width}
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