import React, {useState} from 'react';
import {MdOutlineArrowBackIos} from "react-icons/md";

const DroupDown = () => {
    // const [counter,setCounter]=useState(0)
    // let add =()=>{
    //     setCounter(counter+1)
    // }
    const [open, setOpen] = useState(false)
    return (
        <div className="p-6">
            <div className="overflow-hidden">
                <div onClick={()=>setOpen(!open)} className="bg-green-600 w-full cursor-pointer  flex flex-row items-center px-5  py-2 justify-between rounded ">
                    <div className=""><span>ثبت است فقط برای رحی</span></div>
                    <div><MdOutlineArrowBackIos/></div>
                </div>
                <div className={`bg-green-400 flex flex-col rounded ${open ? "" : "hidden"}`}>
                    <div className="p-3 flex flex-col ">
                        <span>fatemeh</span>
                        <span>fatemeh</span>
                        <span>fatemeh</span>
                        <span>fatemeh</span>
                        <span>fatemeh</span>
                    </div>
                </div>
            </div>
            {/*<div>{counter}</div>*/}
            {/*<button className="bg-fuchsia-500 p-3 rounded " onClick={()=>add()}>add</button>*/}
        </div>
    );
};

export default DroupDown;
