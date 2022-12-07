import React from 'react'
import {TbMovie} from 'react-icons/tb';
import {AiFillClockCircle} from 'react-icons/ai';
import {ImStop2} from 'react-icons/im';
import {ImSearch} from 'react-icons/im';


export default function Book() {
    return (
        <div className=" flex flex-col items-center justify-center bg-green-700  bg-no-repeat bg-cover ">
            <div className=" container xl:max-w-screen-xl">
                <div className='item-center justify-center flex flex-row  justify-between gap-2 border-b-2'>
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
                <div className=" h-44"></div>
                <div className="grid grid-cols-6 gap-8  py-16">
                    <div className=" flex flex-col col-span-2 gap-8">
                        <div className="flex flex-col gap-6 bg-gray-200  rounded-2xl p-8  relative">
                            <div className="absolute right-1/2 transform translate-x-1/2 -translate-y-1/3 top-0 rounded-2xl h-52 w-44 bg-center shadow-2xl border bg-cover  bg-[url('http://localhost:3000/assests/images/12.jpg')]"></div>
                            <div className="flex flex-col justify-center items-center pt-32">
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
                        <div className="  bg-gray-200 flex flex-col gap-8 rounded-2xl  p-8  ">
                            <div className="flex flex-row items-center ">
                                <TbMovie size={25}/>
                                <label>عوامل اصلی فیلم</label>
                            </div>
                            <div className="flex flex-col gap-4 ">
                                <div className="flex flex-row items-center gap-4">
                                    <div className=" h-20 w-16 rounded-lg bg-center shadow-2xl border bg-cover bg-[url('http://localhost:3000/assests/images/hadi.jpg')]"></div>
                                    <span>کارگردان :</span>
                                    <span>هادی حجازی فرد</span>
                                </div>
                                <div className="flex flex-row items-center gap-4">
                                    <div className=" h-20 w-16 rounded-lg bg-center shadow-2xl border bg-cover bg-[url('http://localhost:3000/assests/images/vali.jpeg')]"></div>
                                    <span>تهیه کننده  :</span>
                                    <span>حبیب الله علی نژاد </span>
                                </div>
                                <div className="flex flex-row items-center gap-4">
                                    <div className=" h-20 w-16 rounded-lg bg-center shadow-2xl border bg-cover bg-[url('http://localhost:3000/assests/images/aminy.jpg')]"></div>
                                    <span>نویسنده :</span>
                                    <span>ابراهیم امینی</span>
                                </div>
                                <div className="flex flex-row items-center gap-4">
                                    <div className=" h-20 w-16 rounded-lg bg-center shadow-2xl border bg-cover bg-[url('http://localhost:3000/assests/images/fafa.jpg')]"></div>
                                    <span>نویسنده سایت :</span>
                                    <span>فاطمه چمنی فرد </span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 flex flex-col gap-y-8">
                        <div className="relative">
                            <ImSearch size={25} className="absolute top-3  right-6 top-1"/>
                            <input type="text" className=" bg-fuchsia-300 w-full px-9 border-2 py-2 rounded-3xl bg-transparent pr-14  "/>

                        </div>
                        <div className="flex flex-col gap-6 bg-gray-200  rounded-2xl p-10 ">
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-2xl">
                                    چشم و گوش بسته فیلمی به کارگردانی فرزاد مؤتمن، نویسندگی هما بذرافشان و تهیه‌کنندگی
                                    امیرحسین آشتیانی‌پور محصول سال ۱۳۹۷ و ١٣٩٨ است. این فیلم در شهریور ۱۳۹۸ از شورای
                                    پروانه نمایش فیلم‌های سینمایی مجوز نمایش گرفت.[۱]

                                    خلاصه داستان
                                    مردی توسط یک زن تبهکار کُشته می‌شود و دو غریبه را به جرم قتل بازداشت می‌کنند. یکی
                                    صدای شلیک گلوله را شنیده اما صحنه قتل را ندیده‌است چون نابیناست. آن یکی هم فقط صحنهٔ
                                    قتل را دیده و صدای شلیک گلوله را نشنیده چون ناشنواست. آن‌ها یک صبح تا غروب فرصت
                                    دارند که از این مهلکه جان سالم به در ببرند.
                                </p>
                            </div>
                        </div>
                        <div className=" flex flex-col p-8 gap-4  bg-gray-200 rounded-2xl ">
                            <div className="flex flex-row  ">
                            <TbMovie size={25}/>
                               <label> عوامل فیلم</label>
                            </div>
                           <div className=" grid grid-cols-6 flex gap-x-4 gap-y-4">

                               <div className="flex flex-col items-center shadow-2xl row-span-1 overflow-hidden bg-green-100 rounded-2xl ">
                                   <div className=" bg-center rounded-bl-2xl overflow-hidden   ">
                                       <img className="" src="http://localhost:3000/assests/images/hadi.jpg" alt=""/>
                                   </div>
                                   <div className="text-center py-2 px-0.5">
                                       <span>هادی حجازی فرد</span>
                                   </div>
                               </div>

                               <div className="flex flex-col items-center shadow-2xl row-span-1 overflow-hidden bg-green-100 rounded-2xl ">
                                   <div className=" bg-center rounded-bl-2xl overflow-hidden   ">
                                       <img className="" src="http://localhost:3000/assests/images/hadi.jpg" alt=""/>
                                   </div>
                                   <div className="text-center py-2 px-0.5">
                                       <span>هادی حجازی فرد</span>
                                   </div>
                               </div>


                               <div className="flex flex-col items-center shadow-2xl row-span-1 overflow-hidden bg-green-100 rounded-2xl ">
                                   <div className=" bg-center rounded-bl-2xl overflow-hidden   ">
                                       <img className="" src="http://localhost:3000/assests/images/hadi.jpg" alt=""/>
                                   </div>
                                   <div className="text-center py-2 px-0.5">
                                       <span>هادی حجازی فرد</span>
                                   </div>
                               </div>


                               <div className="flex flex-col items-center shadow-2xl row-span-1 overflow-hidden bg-green-100 rounded-2xl ">
                                   <div className=" bg-center rounded-bl-2xl overflow-hidden   ">
                                       <img className="" src="http://localhost:3000/assests/images/hadi.jpg" alt=""/>
                                   </div>
                                   <div className="text-center py-2 px-0.5">
                                       <span>هادی حجازی فرد</span>
                                   </div>
                               </div>



                           </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>)
}

