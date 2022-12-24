import React from 'react';
import {BiBrightnessHalf, BiHome} from "react-icons/bi";
import {AiOutlineMail, AiOutlineMenu, AiOutlineUser} from "react-icons/ai";

function Admin(props) {
    return (
        <div>

            <div className="bg-indigo-900 h-screen text-amber-50">
                <div className=" grid grid-cols-12  grid-rows-[75px_minmax(900px,_1fr)_100px]">
                    <div className=" row-span-2 flex flex-col hidden lg:block lg:col-span-4 bg-gray-900 ">
                        <div className="p-5">
                            <div className="text-3xl font-bold ">سامانه مدیریت</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center p-3 hover:bg-gray-700">
                                <BiHome size={24}/>
                                <div className="text-2xl ">خانه</div>
                            </div>
                            <div className="flex flex-row items-center p-3 hover:bg-gray-700">
                                <BiHome size={24}/>
                                <div className="text-2xl ">چارت</div>
                            </div>
                            <div className="flex flex-row items-center p-3 hover:bg-gray-700">
                                <BiHome size={24}/>
                                <div className="text-2xl ">فرم</div>
                            </div>
                        </div>
                    </div>
                    <div className=" row-span-1 lg:col-span-8 col-span-12 flex flex-row bg-gray-900 justify-between px-3 ">
                        <div className="flex flex-row items-center ">
                            <AiOutlineMenu className="block lg:hidden" size={32}/>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <AiOutlineUser size={32}/>
                            <AiOutlineMail size={32}/>
                            <BiBrightnessHalf size={32}/>

                        </div>

                    </div>
                    <div className=" row-span-1 lg:col-span-8 col-span-12 bg-gray-500">
                        <div>jijoijojoi</div>
                        <div>jijoijojoi</div>
                        <div>jijoijojoi</div>
                        <div>jijoijojoi</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Admin;
