import React from 'react';

const ItemMenu = () => {
    return (<div>
            <div>
                <div>
                    <div className=" border-b-lime-700 border-solid border  font-bold p-2 "><span>موبایل و کالای دیجیتال</span></div>
                </div>
                <div className="grid grid-cols-3 flex flex-col  ">
                    <div className="col-span-1   flex flex-col p-2 ">
                        <div className="hover:text-red-700 py-1 px-5"><span> گوشی سامسونگ </span></div>
                        <div className="hover:text-red-700 py-1 px-5"><span> گوشی هوواوی </span></div>
                        <div className="hover:text-red-700 py-1 px-5"><span> گوشی نوکیا </span></div>
                        <div className="hover:text-red-700 py-1 px-5"><span> گوشی ال جی </span></div>
                        <div className="hover:text-red-700 py-1 px-5"><span> گوشی اچ تی سی </span></div>
                        <div className="hover:text-red-700 py-1 px-5"><span> گوشی سونی </span></div>
                        <div className="hover:text-red-700 py-1 px-5"><span> گوشی اپل ، ایفن </span></div>
                        <div className="hover:text-red-700 py-1 px-5"><span> گوشی ایسوس </span></div>
                        <div className="hover:text-red-700 py-1 px-5"><span> گوشی انر </span></div>


                    </div>

                </div>
            </div>
        </div>);
};

export default ItemMenu;
