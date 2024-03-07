import React from 'react'
import tech from './Tags';

const Techpage = () => {
  return (
    <div>
        <div className="ml-8">
        {tech.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#B5C0C9] w-[67px] h-[34px] ml-1 rounded-2xl  mt-6 inline-block"
            >
              <p className="flex justify-center pt-[6px] text-sm">{item.heading}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Techpage