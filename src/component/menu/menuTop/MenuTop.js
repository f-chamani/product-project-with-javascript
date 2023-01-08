import React from 'react';
import torobImage from "../../../assets/img/logo_original.jpg"
import {ImSearch} from "react-icons/im";

const MenuTop = () => {
    return (
        <div>
            <div className='flex flex-row items-center justify-between px-4 py-3 bg-gray-50'>
                <div className="flex flex-row items-center gap-6 ">
                    <div className=" flex flex-row items-center gap-1">
                        <img className="h-14 w-14  " src={torobImage}/>
                        <span className="text-pink-600 text-2xl font-bold ">ترب</span>
                    </div>
                    <div>
                        <input type="text" className="bg-yellow-50 p-[14px] rounded w-96 " placeholder="نام کالا را وارد کنید"/>
                        <button className="bg-red-700 p-[16.5px]  rounded"><ImSearch className="text-amber-50"/>
                        </button>
                    </div>
                </div>
                <div>
                    <button className="bg-gray-200 rounded shadow  border-solid  border border-indigo-900 p-3">09198806930</button>
                </div>
            </div>
        </div>
    );
};

export default MenuTop;
