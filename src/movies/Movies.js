import React from 'react';

function Movies(props) {
    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-gray-500">
                <div className=" container lg:max-w-screen-lg text-amber-50 ">
                    <div className=" items-center justify-center flex flex-row justify-between gap-2 ">
                        <div className="flex flex-row gap-4">
                            <div className="hover:bg-red-300 p-5 "> صحفه اصلی</div>
                            <div className="hover:bg-red-300 p-5 " >اشخاص</div>
                            <div className="hover:bg-red-300 p-5 ">تعاریف دانشگاه ها</div>
                            <div className="hover:bg-red-300 p-5 "> درباره ی ما</div>
                            <div className="hover:bg-red-300 p-5 ">تماس با ما</div>
                        </div>
                        <div className="flex flex-row  gap-4" >
                            <div className="hover:bg-red-300 p-5">ورد</div>
                            <div className="hover:bg-red-300 p-5">ثبت نام</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Movies;
