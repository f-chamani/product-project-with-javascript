import React from "react"
const Store =({obj})=>{
    return(
        <div className=" flex flex-row justify-center items-center "> 
         <div className="grid grid-cols-2 container gap-2 md:grid-cols-4 xl:grid-cols-6 bg-  xl:max-w-screen-xl 2xl:grid-cols-9" >
         {obj && obj.length>0 && obj.map((item,index)=>{
                return(
                    <div className="bg-green-500 " key={index}>

                        <div className=" bg-green-100 h-64  m-2 ">
                        <span>نام: </span>
                        <div>{item.name}</div>

                        <span>قیمت : </span>
                        <div>{item.price}</div>

                        <span>کد محصول: </span>
                        <div>{item.id}</div>
                        
                        

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