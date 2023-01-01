import React, {useState} from 'react';
import {shop} from "../../assets/data/Data";
import {SlBasket} from "react-icons/sl";

const Shop = () => {
    const [counter, setCounter] = useState(0)
    let add = () => {
        setCounter(counter + 1)
    }
    let dec = () => {
        setCounter(counter - 1)

    }

    const [basket, setBasket] = useState([])
    let addBasket = (input) => {
        const resoult = {...input, count: 0}
        setBasket([...basket, resoult])
        console.log(basket)
    }


    return (
        <div className=" flex flex-col justify-center items-center h-screen bg-gradient-to-br from-lime-500 via-lime-300 to-yellow-300 ">
            <div className="bg-gray-400 w-full  flex flex-col items-center  ">
                <div className="flex flex-row gap-4">
                    <button onClick={dec} className="bg-blue-600 rounded p-2">کاستن</button>
                    <button onClick={add} className="bg-blue-600 rounded p-2">افزودن</button>
                    <span className="text-lg">{counter}</span>
                </div>
                <div className="flex flex-row gap-4 p-2">
                    <SlBasket size={25} className=" items-center"/>
                    <span>{basket.length}</span></div>
            </div>

            <div className="grid grid grid-cols-2 md:grid-cols-6 flex gap-4 ">
                {shop.map((value, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center  bg-yellow-50 rounded p-2 gap-2 ">
                            <div className="bg-gray-900 w-28 h-28 rounded "></div>
                            <div className="flex flex-row">
                                <span>نام کالا: </span>
                                <span>{value.title} </span>
                            </div>
                            <div className="flex flex-row">
                                <span>قیمت: </span>
                                <span>{value.price}</span>
                            </div>
                            <button onClick={() => {
                                addBasket({price: value.price, id: value.id, title: value.title})
                            }} className="bg-blue-600 text-gray-800 w-full p-1 rounded ">افزودن
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Shop;
