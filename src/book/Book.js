import React from 'react'
import {TbMovie} from 'react-icons/tb';
import {AiFillClockCircle} from 'react-icons/ai';
import {ImStop2} from 'react-icons/im';
import {ImSearch} from 'react-icons/im';


export default function Book() {
    return (
        <div className=" flex flex-col items-center bg-[url('http://localhost:3000/assests/images/12.jpg')] bg-no-repeat bg-cover ">
            <div className=" bg-gradient-to-b from-transparent via-indigo-800 to-indigo-200">
                <div>
                    <div className=" container xl:max-w-screen-xl">
                        <div className="flex flex-row items-center justify-center border-b-2 border-b-gray-900">
                            <div className='item-center justify-center container lg:max-w-screen-xl flex flex-row  flex justify-between gap-2 border-b-2'>
                                <div className="flex flex-row gap-4  ">
                                    <div className=" hover:bg-gray-100 gap-1 py-2 ">صحفه اصلی</div>
                                    <div className=" hover:bg-gray-100 gap-1  py-2">اشخاص</div>
                                    <div className=" hover:bg-gray-100 gap-1  py-2">تعاریف دانشگاه ها</div>
                                    <div className=" hover:bg-gray-100 gap-1  py-2">درباره ی ما</div>
                                    <div className=" hover:bg-gray-100 gap-1  py-2">تماس با ما</div>
                                </div>
                                <div className="flex flex-row gap-4  ">
                                    <div className=" hover:bg-amber-100 gap-1 py-2 ">ورود</div>
                                    <div className=" hover:bg-amber-100 gap-1 py-2 ">ثبت نام</div>
                                </div>
                            </div>
                        </div>
                        <div className=""></div>
                        <div className="grid grid-cols-6 gap-8  py-16">
                            <div className="col-span-2 ">
                                <div className="flex flex-col gap-6 bg-gray-200 h-60 rounded-2xl p-10 ">
                                    <div className="flex flex-col justify-center items-center">
                                        <h1 className="font-bold text-xl">چشم و گوش بسته</h1>
                                        <div className="font-bold">Eyes and ears closed</div>
                                    </div>
                                    <div>
                                        <div className="flex flex-row items-center gap-2">
                                            <TbMovie size={22}/>
                                            <span>ژانر:</span>
                                            <span>کمدی</span>
                                        </div>
                                        <div className="flex flex-row items-center gap-2">
                                            < AiFillClockCircle/>
                                            <span>  سال ساخت:</span>
                                            <span>1397</span>
                                        </div>
                                        <div className="flex flex-row items-center gap-2">
                                            < ImStop2/>
                                            <span>  کشور ساخت:</span>
                                            <span>ایران</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-44">
                                </div>
                            </div>
                            <div className="col-span-4 ">
                                <div className="relative">
                                    <ImSearch size={25} className="absolute top-3  right-6 top-1"/>
                                    <input type="text" className=" bg-fuchsia-300 w-full px-9  py-2 rounded-3xl bg-transparent pr-14 "/>

                                </div>
                                <div className="flex flex-col gap-6 bg-gray-200 h-60 rounded-2xl p-10 ">
                                    <div className="flex flex-col justify-center items-center">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

