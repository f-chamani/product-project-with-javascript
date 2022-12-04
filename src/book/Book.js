import React from 'react'

export default function Book() {
    return (
        <div className=" flex flex-col items-center">
            <div className=" container lg:max-w-screen-xl">
                <div className="flex flex-row items-center justify-center border-b-2 border-b-gray-900">
                    <div className='item-center justify-center container lg:max-w-screen-xl flex flex-row  flex justify-between gap-2 border-b-2'>
                        <div className="flex flex-row gap-4  ">
                            <div className=" hover:bg-amber-100 gap-1 py-2 ">صحفه اصلی</div>
                            <div className=" hover:bg-amber-100 gap-1  py-2">اشخاص</div>
                            <div className=" hover:bg-amber-100 gap-1  py-2">تعاریف دانشگاه ها</div>
                            <div className=" hover:bg-amber-100 gap-1  py-2">درباره ی ما</div>
                            <div className=" hover:bg-amber-100 gap-1  py-2">تماس با ما</div>
                        </div>
                        <div className="flex flex-row gap-4  ">
                            <div className=" hover:bg-amber-100 gap-1 py-2 ">ورود</div>
                            <div className=" hover:bg-amber-100 gap-1 py-2 ">ثبت نام</div>
                        </div>
                    </div>
                </div>
                <div className="h-64 "></div>
                <div className="grid grid-cols-3 gap-8 ">
                    <div className="col-span-1 ">
                        <div className="flex flex-col gap-4 bg-gray-200 h-60 rounded-2xl p-10 ">
                            <div className="flex flex-col justify-center items-center">
                                <h1>خروس جنگی</h1>

                            </div>
                        </div>
                        <div className="h-44">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

