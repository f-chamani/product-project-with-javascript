import React from 'react';

const ItTest13Day = ({title,price}) => {
    return (
        <div className=" flex flex-col items-center justify-center bg-indigo-50 gap-4 p-2 rounded shadow-2xl ">
            <div className="bg-purple-900 rounded w-32 h-32"></div>
            <div><span>{title}</span></div>
            <div className="flex flex-row">
                <div><span> قیمت :</span></div>
                <div><span>{price}</span></div>
            </div>
            <button className="bg-purple-900 rounded p-2 w-full ">افزودن سبد</button>
        </div>
    );
};

export default ItTest13Day;
