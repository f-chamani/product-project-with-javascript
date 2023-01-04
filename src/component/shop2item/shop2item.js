import React from 'react';

const Shop2Item = ({title,price}) => {
    return (
        <div className="flex flex-col items-center  bg-yellow-500 w-52 rounded p-2 ">
            <div className="bg-gray-900 w-28 h-28 rounded "></div>
            <div className="flex flex-row">
                <span>نام کالا: </span>
                <div><span>{title} </span></div>
            </div>
            <div className="flex flex-row">
                <span>قیمت: </span>
                <span>{price}</span>
            </div>
        </div>
    );
};

export default Shop2Item;
