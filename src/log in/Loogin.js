import React from "react";
import back from "../assets/images/logo.jpg";
import FaUser from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";

const Loogin = () => {
  return (
    <div className=" clear-right flex flex-row justify-center items-center  h-screen bg-gradient-to-br from-lime-500 via-lime-300 to-yellow-300   ">
      <div className="  bg-stone-50 shadow-2xl md:grid grid-cols-2   rounded-2xl overflow-hidden ">
        <div className=" p-8 flex flex-row gap-y-3 justify-center items-center flex flex-col  text-gray-700">
          <h1 className="font-bold text-2xl">User login</h1>
          <div className="relative ">
            <label htmlFor="username"></label>
            <AiOutlineUser
              className="absolute rigth-4 top-3 "
              size={23}
            ></AiOutlineUser>
            <input
              id="username"
              className="bg-gray-200 p-3 rounded-xl  px-9 "
              placeholder="نام کاربری خود را وارد کنید "
            ></input>
          </div>

          <div className="relative ">
            <label htmlFor="passwoed"></label>
            <AiFillLock className="absolute rigth-16 top-3 "size={23}></AiFillLock>
            <input
              id="passwoed"
              className="bg-gray-200 p-3 rounded-xl  px-9 "
              placeholder="رمز عبور خود را ورادکنید"
            ></input>
          </div>

          <button className="bg-gradient-to-r from-lime-500 via-lime-300 to-yellow-300 w-64 p-3 text-gray-600 font-bold rounded-lg">
          
            ورود
          </button>

          <label className="text-slate-500 text-xs">
            رمز عبور را فراموش کرده اید؟
          </label>
          <label className="text-slate-500 text-xs pt-12 md:pt-28 ">
            ساختن عضو جدید -{">"}{" "}
          </label>
        </div>
        <div className="hidden  md:block">
          <img src={back} className=" " />
        </div>
      </div>
    </div>
  );
};
export default Loogin;
//bg-gradient-to-br from-lime-500 via-lime-300 to-yellow-300
