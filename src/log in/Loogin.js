import React from 'react'
import back from "../assets/images/logo.jpg"


 const Loogin = () => {
  return (

    <div className='h-screen bg-gradient-to-br from-lime-500 via-lime-300 to-yellow-300 flex item-center  justify-center '>
      <div className='' >
        <div className='bg-white grid grid-cols-2 rounded-2xl overflow-hidden '>
            <div className=' flex flex-col gap-3 text-gray-700'>
                <h1 className="font-bold text-2xl">User login</h1>
                <input  type="text" className='bg-gray-100 rounded-xl px-2 py-3' placeholder='نام کاربری' />
                <input  type="text" className='bg-gray-100 rounded-xl px-2 py-3' placeholder= 'رمز عبور' />
                <button className='bg-gradient-to-r from-lime-500 via-lime-300 to-yellow-300  rounded-xl'> ورود</button>
                <label className='text-slate-500 text-xs'>رمز عبور را فراموش کرده اید؟</label>
                <label className='text-slate-500 text-xs'>ساختن عضو جدید -{'>'} </label>
            </div>
             <div>
               <img src={back} />   
             </div>
        </div>
    </div>
    </div>
  )
}
export default Loogin;
//bg-gradient-to-br from-lime-500 via-lime-300 to-yellow-300