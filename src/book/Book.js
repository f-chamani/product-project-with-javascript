import React from 'react'

export default function Book() {
  return (
    <div className="flex item-center justify-center">
        <div className='item-center justify-center container lg:max-w-screen-xl flex flex-row  flex justify-between gap-2 border-b-2'>
            <div className="flex flex-row gap-4  ">
                <div className=" hover:bg-amber-100 gap-1 py-2 ">صحفه اصلی </div>
                <div className=" hover:bg-amber-100 gap-1  py-2">اشخاص </div>
                <div className=" hover:bg-amber-100 gap-1  py-2" >تعاریف دانشگاه ها </div>
                <div className=" hover:bg-amber-100 gap-1  py-2">درباره ی ما </div>
                <div className=" hover:bg-amber-100 gap-1  py-2">تماس با ما </div>
            </div>
            <div  className="flex flex-row gap-4 pl-4">
                <div className=" hover:bg-amber-100  gap-1  py-2 ">ورود </div>
                <div className=" hover:bg-amber-100  gap-1  py-2 ">ثبت نام </div>
            </div>

        </div>
    </div>
  )
}
