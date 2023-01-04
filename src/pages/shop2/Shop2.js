import React from 'react';
import {dataShop2} from "../../assets/data/Data";
import Shop2Item from "../../component/shop2item/shop2item";

const Shop2 = () => {
    return (
        <div className=" ">
            <div className="grid grid-cols-6 flex gap-4 ">
                {
                    dataShop2.map((value) => {
                        return (
                           <Shop2Item title={value.title}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Shop2;
