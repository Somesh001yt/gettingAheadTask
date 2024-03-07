import React from 'react'

const DeletePopover = (props) => {
  return (
    <div className='flex flex-col deletePopover  top-20 right-10 lg:right-28'>
        <div  className='flex justify-end'>
        <ion-icon onClick={() => props.closeFunction()} name="close-outline"></ion-icon>
        </div>
    <h6 className='text-blue mt-10 text-lg  font-semibold mx-auto'>Delete account</h6>
    <p className='text-blue mt-5 text-sm font-medium mx-auto'>Are you sure you want to delete ?</p>

    <div className='flex justify-center gap-2 mt-10'>
        <button onClick={() => props.closeFunction()} className='flex justify-center items-center w-40 h-12 rounded-xl border-[2px] border-secondary text-secondary'>Cancel</button>
        <button className='flex justify-center items-center w-40 h-12 rounded-xl border-[2px] bg-secondary text-[#fff]'>Delete</button>
    </div>
    
  </div>
  )
}

export default DeletePopover