import React from "react";

export default function ButtonRegister({prop}){
    return (
        <div>
            <button className="bg-gray-800 border-2 border-white w-44 text-white mt-4 h-12 rounded-lg hover:border-common" type="submit">{prop}</button>
        </div>
    )
} 