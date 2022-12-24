import React from "react";
import back from "../../assets/images/logo.jpg";
import FaUser from "react-icons/fa";
import {AiOutlineUser} from "react-icons/ai";
import {AiFillLock} from "react-icons/ai";

const Loogin = () => {
    return (
        <div className="  flex flex-row justify-center items-center  h-screen bg-gradient-to-br from-lime-500 via-lime-300 to-yellow-300   ">
            <div className="  bg-stone-50 shadow-2xl md:grid grid-cols-2   rounded-2xl overflow-hidden ">
                <div className=" relative p-8 py-16 flex flex-row gap-y-6 justify-center items-center flex flex-col  text-gray-700">
                    <h1 className="font-bold text-2xl"> ورود کاربر</h1>
                    <div className="flex flex-col w-full gap-2">
                        <label className="relative  w-full " htmlFor="username">
                            <AiOutlineUser className="absolute right-2 top-3 " size={23}></AiOutlineUser>
                            <input id="username" className="bg-gray-200 p-3  w-full rounded-xl  px-9 " placeholder="نام کاربری خود را وارد کنید "></input>
                        </label>
                        <label className="relative  w-full " htmlFor="passwoed">
                            <AiFillLock className="absolute  right-2 top-3 " size={23}></AiFillLock>
                            <input id="passwoed" className="bg-gray-200 p-3 rounded-xl  w-full px-9 " placeholder="رمز عبور خود را ورادکنید"></input></label>
                    </div>
                    <button className="bg-gradient-to-r from-lime-500 via-lime-300  w-full to-yellow-300 p-2 text-gray-600 font-bold rounded-3xl"></button>

                    <label className="text-slate-500 text-base">رمز عبور را فراموش کرده اید؟</label>

                    <label className=" absolute  bottom-5 ">ساختن عضو جدید
                        -{">"}{" "}</label>


                </div>
                <div className="hidden  md:block">
                    <img src={back} className=" "/>
                </div>
            </div>
        </div>
    );
};
export default Loogin;
