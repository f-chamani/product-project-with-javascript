import React from 'react';
import {TbMovie} from 'react-icons/tb';


function Movies(props) {
    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-gray-500">
                <div className=" container lg:max-w-screen-lg text-amber-50  ">
                    <div className=" flex flex-row justify-between
                     border-solid border-b-2 border-amber-50 ">
                        <div className="flex flex-row gap-4">
                            <div className="hover:bg-red-300 p-5 "> صحفه اصلی</div>
                            <div className="hover:bg-red-300 p-5 ">اشخاص</div>
                            <div className="hover:bg-red-300 p-5 ">تعاریف دانشگاه ها</div>
                            <div className="hover:bg-red-300 p-5 "> درباره ی ما</div>
                            <div className="hover:bg-red-300 p-5 ">تماس با ما</div>
                        </div>
                        <div className="flex flex-row  gap-4">
                            <div className="hover:bg-red-300 p-5">ورود</div>
                            <div className="hover:bg-red-300 p-5">ثبت نام</div>
                        </div>
                    </div>
                    <div className="h-64"></div>
                    <div className="grid grid-cols-3 gap-8 ">
                        <div className="col-span-1 flex flex-col">
                        <div className="  p-8 rounded-xl gap-2 bg-red-300 relative">
                            <div className="w-52 h-64 bg-green-600 rounded-xl absolute right-1/2 transform translate-x-1/2  -translate-y-1/2">
                                f
                            </div>
                            <div className="font-bold text-3xl flex flex-row items-center justify-center pt-44">
                                خداحافظ بچه
                            </div>
                            <div className="flex flex-row items-center justify-center ">Good bye Baby</div>
                            <div className=" flex flex-row  flex items-center pt-5 ">
                                <TbMovie size={22}/>
                                <span className="pr-2">ژانر:</span>
                                <span>خانوادگـــی</span>
                            </div>
                            <div className=" flex flex-row  flex items-center ">
                                <TbMovie size={22}/>
                                <span className="pr-2">سال ساخت:</span>
                                <span>1391</span>
                            </div>
                            <div className=" flex flex-row  flex items-center ">
                                <TbMovie size={22}/>
                                <span className="pr-2">کشور ساخت:</span>
                                <span>ایـــران</span>
                            </div>
                        </div>
                        </div>
                        <div className="col-span-2  ">
                            <div>
                                <div>
                                    <input  className="w-full" type="text"/>
                                </div>
                                <div className=" p-8 rounded-xl gap-8 bg-red-300 ">
                                    <p>
                                        مرتضی (شهرام حقیقت‌دوست) و لیلا (مهراوه شریفی‌نیا) بچه‌دار نمی‌شوند و تصمیم می‌گیرند
                                        بچه‌ای را
                                        به فرزندی قبول کنند اما به‌خاطر سابقهٔ زندان مرتضی، تصمیم می‌گیرند بچه‌ای را بدزدند
                                        و
                                        این کار را انجام می‌دهند ولی در خانه صاحب بچه یادداشتی می‌گذارند این یادداشت مد
                                        رکی می‌شود تا پدر بچه دنبال آن‌ها بگردد در آخر پس از رخدادهای زیاد آن‌ها
                                        بچه را به خانواده اش تحویل می‌دهند با توصیهٔ مادر بچه (بهاره رهنما) با
                                        موسسه رویان آشنا می‌شود و پس از کشیدن دوره زندان صاحب پنج قلو می‌شوند.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Movies;
