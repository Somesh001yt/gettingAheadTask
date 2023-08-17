import React from 'react'
import './Empeditinfo.scss'
import Input from '../Input'

const Empeditinfo = () => {
  return (
    <div>
        <div className='editemp-container'>
        <div className="backbtn">
          <ion-icon
            onClick={() => (window.location.href = "/")}
            name="chevron-back-outline"
          ></ion-icon>
          <p className="mt-[-4px] ml-2">Back</p>
        </div>
 
        <h2 className="employer-heading">Employer info</h2>

        <div className="mx-auto lg:ml-12 mt-10">
          <Input label="Employer name" name="employername" width="w-[58%]" type="text" />
          <Input label="Username" name="username" width="w-[58%]" type="text" />
          <Input label="Nunber of employees" name="noofemployees" type="number" />
          <Input label="Location" name="location" type="location" />
          <Input label="Email" name="email" type="email" />
          <Input label="Linkedin" name="linkedin" type="link" />
          <Input label="Website" name="website" type="link" />

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
    </div>
  )
}

export default Empeditinfo