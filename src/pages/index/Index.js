import React from 'react';
import {useNavigate} from "react-router-dom";

const Index = () => {
    const navigate =useNavigate()
    const look=()=>{
        return navigate("/dashboard")
    }
    return (
        <div className="flex flex-col p-5">
            <span>خانه</span>
            <button className="bg-fuchsia-800 w-44 p-2" onClick={look}>ریحانه جون برو داشبورد </button>
        </div>
    );
};

export default Index;
