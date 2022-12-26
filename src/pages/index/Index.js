import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {BiHelpCircle} from "react-icons/bi";
import {BsTruck} from "react-icons/bs";
import {FaShoppingCart, FaUserAlt} from "react-icons/fa";
import { GrSearch} from "react-icons/gr";


const Index = () => {
    const navigate = useNavigate()
    const look = () => {
        return navigate("/login")
    }
    return (
        <div>
            <div className="flex flex-col items-center justify-center ">
                <div className="flex flex-row-reverse gap-4 bg-green-300 p-3   w-full ">
                    <div className="flex flex-row items-center ">
                        <BiHelpCircle size={17}/>
                        <label className="text-xs">راهنمایی</label>
                    </div>
                    <div className="flex flex-row items-center ">
                        <BsTruck size={17}/>
                        <label className="text-xs">راهنمایی</label>
                    </div>
                </div>
            </div>

            <div className='item-center justify-center flex flex-row  justify-between gap-6 px-12 border-b-2'>
                <div className="flex flex-row gap-4 items-center ">
                    <div className=" hover:bg-gray-100 gap-1 py-2 ">
                        <Link to='/shop'>صحفه اصلی</Link>
                    </div>
                    <div className=" hover:bg-gray-100 gap-1  py-2">اشخاص</div>
                    <div className=" hover:bg-gray-100 gap-1  py-2">تعاریف دانشگاه ها</div>
                    <div className=" hover:bg-gray-100 gap-1  py-2">درباره ی ما</div>
                    <div className=" hover:bg-gray-100 gap-1  py-2">تماس با ما</div>
                </div>
                <div className="flex flex-row-reverse gap-6 items-center ">
                    <div className="text-red-400 ">
                        <FaShoppingCart size={28}/>
                    </div>
                    <div className="text-gray-600 flex flex-row items-center gap-1 ">
                        <FaUserAlt size={22}/>
                        <span>ورود</span>
                    </div>
                    <div className="flex items-center relative">
                        <GrSearch className="absolute left-2 bg "/>
                        <input className='bg-gray-200 rounded p-1' placeholder="دنبال چی میگردی ؟"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Index;
