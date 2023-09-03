import React from "react";
import NavBar from "./navbar/navbar";
import { Outlet } from "react-router-dom";

export default function Main(){
    return (
        <div className="bg-main-img bg-cover bg-center min-h-screen">
            <NavBar/>
            <Outlet/>
        </div>
    )
}