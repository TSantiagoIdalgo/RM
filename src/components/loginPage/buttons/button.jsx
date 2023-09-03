import React from "react";

export default function Button({props}){
    return (
        <div className="opacity-80">
            <button className="group relative h-12 w-full overflow-hidden rounded-lg bg-gray-800 text-lg font-bold text-violet-500 mt-6 z-10">
                <i>Login</i>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-gray-500/20"></div>
            </button>
            <p className="text-white ml-6 mt-2">No tienes un usuario? Crea uno clickeando <span className="cursor-pointer text-common" onClick={()=>props()}><i>AQUI!</i></span></p>
        </div>
    )
}