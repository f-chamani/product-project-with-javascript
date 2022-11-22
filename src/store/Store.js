import React from "react"
const Store =({obj})=>{
    return(
        <div className=" flex flex-row justify-center items-center "> 
         <div className="  grid grid-cols-2 container gap-3 md:grid-cols-4 xl:grid-cols-6 rounded-2xl m-4  xl:max-w-screen-xl 2xl:grid-cols-9" >
         {obj && obj.length>0 && obj.map((item,index)=>{
                return(
                    <div className=" rounded-md border " key={index}>

                        <div className=" border-emerald-300 rounded-md shadow-2xl bg-lime-50 h-64  m-2 ">
                        <span>نام: </span>
                        <div>{item.name}</div>

                        <span>قیمت : </span>
                        <div>{item.price}</div>

                        <span>کد محصول: </span>
                        <div>{item.id}</div>
                        
                        <button className="hover:bg-yellow-100 outline outline-offset-2 text-emerald-600  m-2  shadow-lg outline-cyan-500 p-2 bg-lime-100 rounded-lg">اضافه کردن به سبد خرید</button>

                        </div>
                    </div>
                )
         })

         } 

         </div>
        </div>
    )
}
export default Store