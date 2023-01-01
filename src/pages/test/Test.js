import React from 'react';
import Testitem from "../../component/test/testitem";
import {dataTest} from "../../assets/data/Data";

const Test = () => {

    return (
        <div className="flex flex-col  items-center justify-center h-screen">
            <div className="flex flex-col space-y-5  text-2xl">
                <div> سرکار خانم کشاورز</div>
                {
                    dataTest.map((value)=>{
                        return(
                            <Testitem nam={value.nam} age={value.age}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Test;
