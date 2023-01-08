import React from 'react';
import {useNavigate} from "react-router-dom";
import {dataShop2} from "../../assets/data/Data";
import IndexItem from "../../component/indexitem/IndexItem";
import MenuTop from "../../component/menu/menuTop/MenuTop";

//
const Index = () => {
    const navigate = useNavigate()
//     const look = () => {
//         return navigate("/login")
//     }
    const jook = () => {
        return navigate("/DroupDown")
    }

    return (
        <div className="">
            <MenuTop/>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4  h-screen ">
                <button onClick={jook}>منو</button>
                {
                    dataShop2.map((value) => {
                        return (<IndexItem title={value.title} price={value.price}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Index;
