import React, { useState } from "react";
import icon from "../../assets/icon/icon.png"
import Login from "./login/login";
import Register from "./register/register";

export default function Control(){
    let [check, changeCheck] = useState(false)

    function checkHandle(){
        return check === false? changeCheck(true) : changeCheck(false)
    }

    return (
        <div className="bg-login-img bg-no-repeat bg-cover w-screen h-screen flex flex-row-reverse">
            <div className="bg-gray-900 h-screen w-screen rounded-md opacity-95 flex flex-col items-center shadow-black shadow-3xl lg:w-2/6 lg:h-ninety lg:m-8">
                <img src={icon} alt="icon" className="w-2/6 md:w-1/6 mt-10 lg:w-2/6" />
                {check === false? <Login props={checkHandle}/> : <Register props={checkHandle}/>}
            </div>
        </div>
    )
}