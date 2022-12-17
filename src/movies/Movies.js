import React from 'react';
import {AiOutlineClose} from 'react-icons/ai';

function Movies() {
    return (
        <div className="h-screen flex flex-col relative justify-center items-center ">
            <div className="flex bg-gray-400 bg-opacity-25 absolute top-0 w-full">
                <div className=" flex flex-row  justify-between gap-8  py-4 w-full  px-4">
                    <div className="flex flex-row gap-8">
                        <div className="w-10"></div>
                        <div>ثبت نام در سامانه بام</div>
                    </div>
                    <div className="flex flex-row gap-8">
                        <div>دانلود همراه بام</div>
                        <div>راهنمای بام</div>
                        <div className="w-8"></div>
                        <div>بام</div>
                        <div>بانک ملی ایران</div>
                        <div className="w-10"></div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-gray-400 w-96 rounded-xl overflow-hidden">
                        <div className="bg-gray-900 text-amber-50 flex justify-between items-center p-3 pl-5">
                            <div className="w-8"></div>
                            <span className="text-xl">سامانه بام بانک ملی ایران</span>
                            <AiOutlineClose size={22}/>
                        </div>


                        <div className="flex flex-col ">
                            <div className=" flex flex-col px-8 py-3 relative gap-2">
                                <div>
                                    <input className="bg-yellow-50 bg-opacity-80 rounded p-3 w-full  pr-24" type="text"/>
                                    <label className="absolute transform right-0  -translate-x-12 translate-y-1/2  text-gray-400 font-bold ">نام
                                        کاربری</label>
                                </div>
                                <div>
                                    <input className="bg-yellow-50 bg-opacity-80 rounded p-3 w-full  pr-24" type="text"/>
                                    <label className="absolute transform right-0  -translate-x-12 translate-y-1/2  text-gray-400 font-bold ">رمز
                                        عبور</label>
                                </div>
                            </div>
                            <div>
                                <label className="flex flex-row-reverse px-8 text-amber-50 text-[12px] underline ">رمز عبور/نام کاربری را فراموش کرده ام </label>
                            </div>

                            <div className="flex flex-col px-8 py-3 relative gap-2">
                                <button className="bg-blue-600 p-3  rounded text-amber-50">ورود به سامانه</button>
                            </div>
                        </div>


                        <div className="bg-gray-900 text-amber-50  p-3">
                            <div className="flex justify-between px-4 ">
                                <div>ثبت نام در سامانه بام</div>
                                <div>غیر فعال شازی بام بان</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex bg-black w-full bottom-0 bg-opacity-25 absolute">
                <div className=" flex flex-row justify-between gap-8  py-4 w-full  px-4">
                    <div className="flex flex-row gap-8">
                        <div className="w-10"></div>
                        <div>تلفن پشتیبانی : 83386-021</div>
                    </div>
                    <div className="flex flex-row gap-8">
                        <div>سایت بانک ملی ایران</div>
                        <div>تمامی حقوق متعلق به این سایت برای بانک ملی ایران محفوظ است.</div>
                        <div>Bank Melli Iran - Copyright ©2022</div>
                        <div className="w-10"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movies;
