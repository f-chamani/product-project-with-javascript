import React from 'react';

const Testitem = ({nam, age = 22}) => {
    return (
        <div className="bg-red-300 p-5 flex justify-between w-96 flex-row hover:bg-red-400 cursor-pointer  rounded">
            <div>
                <div><span>نام</span></div>
                <div><span>{nam}</span></div>

            </div>
            <div>
                <div><span>سن:</span></div>
                <div><span>{age}</span></div>
            </div>
        </div>

    );
};

export default Testitem;
