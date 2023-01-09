import React from 'react';
import torobImage from "../../../assets/img/logo_original.jpg"
import {ImSearch} from "react-icons/im";
import ItemMenu from "../../itemMenu/ItemMenu";

const MenuTop = () => {
    return (
        <div>
            <div className=' px-4 py-3 bg-gray-50'>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-6 ">
                        <div className=" flex flex-row items-center gap-1">
                            <img className="h-14 w-14  " src={torobImage}/>
                            <span className="text-pink-600 text-2xl font-bold ">ترب</span>
                        </div>
                        <div>
                            <input type="text" className="bg-white border-solid border border-gray-300 p-[14px] rounded w-96 " placeholder="نام کالا را وارد کنید"/>
                            <button className="bg-red-700 p-[16.5px]  rounded"><ImSearch className="text-amber-50"/>
                            </button>
                        </div>
                    </div>
                    <div>
                        <button className="bg-gray-200 rounded shadow  border-solid  border border-indigo-900 p-3">09198806930</button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <ItemMenu/>
                </div>
            </div>
        </div>
    );
};

export default MenuTop;
