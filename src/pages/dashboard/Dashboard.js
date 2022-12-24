import React from 'react';
import {Link} from "react-router-dom";
import {findAllByDisplayValue} from "@testing-library/react";
import {useNavigate} from "react-router-dom";

function Dashboard(props) {
    const  navigate =useNavigate()
    const test2=()=>{
        return navigate("/")
    }
    return (
        <div className="flex flex-col p-4">
           <button className="w-80 p-12 bg-red-300 rounded" onClick={test2}> برو به صحفه اصلی</button>
        <span>داشبورد</span>
        </div>

    );
}

export default Dashboard;
