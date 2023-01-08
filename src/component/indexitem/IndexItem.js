import React from 'react';

const IndexItem = ({title,price}) => {
    return (
        <div className=" ">
            <div className=" flex flex-col items-center justify-center ">
                <div className="flex flex-col items-center justify-center gap-4 bg-green-200 p-3 rounded">
                    <div className="bg-amber-400 w-32 h-32 "></div>
                    <div><span>{title}</span></div>
                    <div className="flex flex-row">
                        <div><span>قیمت : </span></div>
                        <div><span>{price}</span></div>
                    </div>
                    <button className="bg-fuchsia-400 rounded w-full hover:bg-fuchsia-500 p-2">افزودن به سبد خرید</button>
                </div>
            </div>
        </div>
    );
};

export default IndexItem;
