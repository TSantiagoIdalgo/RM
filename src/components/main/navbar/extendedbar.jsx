import React, { useState } from "react";
import Extended from "./extend";

export default function ExtendedBar(){
    let [change, setChange] = useState(false)
    function handleChange(){
        return change === false? setChange(true) : setChange(false)
    }
    console.log(change);
    return (
        <div className="flex flex-col">
            <button className="text-common text-5xl absolute top-0 right-0 mr-4" onClick={handleChange}>≡</button>
            {change === true ? <Extended/> : ""}
        </div>
    )
}