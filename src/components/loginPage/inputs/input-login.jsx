import React from "react";

export default function InputLogin({prop, id, name, value, user, fn}){
    function handleChange(e){
        fn({...user,[e.target.name]: e.target.value})
    }
    return(
        <div className="relative mt-10 group flex justify-center">
            <input value={value} type="text" name={name} id={id} placeholder=" " className="w-full h-10 rounded-md bg-transparent border-2 border-white outline-none hover:border-common ease-out duration-100 text-white text pl-3" onChange={handleChange}/>
            
            <label htmlFor={id} className="absolute left-2 text-white group-hover:-translate-y-5 group-hover:scale-90 ease-in duration-200 bg-gray-900 m-2 pl-3 pr-3">{prop}</label>
        </div>
    )
}