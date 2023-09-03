import React from "react";
import Card from "../card/card";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Favs(){
    const state = useSelector((state)=> state.favsCharacters)
    return (
        <div className="flex flex-wrap gap-2 m-2">
            {state.length === 0? 
            <h1 className="text-common text-xl">No hay personajes favoritos :/</h1>
            : 
            state?.map((pj)=>(
                <Card props={pj}/>
            ))}
        </div>
    )
}