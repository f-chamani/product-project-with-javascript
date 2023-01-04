import React from 'react';
import {dataShop2} from "../../assets/data/Data";
import ItTest13Day from "../../component/itemTest13Day/itTest13day";

const Test13Day = () => {
    return (
        <div className=" flex flex-col justify-center items-center h-screen bg-purple-500  ">
            <div className=" flex grid grid-cols-6 gap-4">
                {dataShop2.map((value)=>{
                    return(
                        <ItTest13Day title={value.title} price={value.price}/>

                    )
                    })
                }
            </div>
        </div>
    );
};

export default Test13Day;
