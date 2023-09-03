import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCharacterFav, deleteCharacterFav } from "../../../redux/actions/actions";

export default function Card({props}){
    let dispatch = useDispatch()
    let state = useSelector((state)=> state.favsCharacters)
    let {id, name, status, gender,image} = props

    
    function checkFavs(){
        let result = state?.some((e)=> e.id === id)
        if(result === true) return true
        else return false
    }
    return (
        <div className="flex items-center bg-gray-700 justify-evenly rounded-xl relative opacity-95 overflow-hidden">
            <img src={image} alt={id} className="w-1/2 "/>
            <div className="flex flex-col text-white items-center">
            <h1 className="text-common text-center">{name}</h1>
            <h3>{status}</h3>
            <h3>{gender}</h3>
            {checkFavs() === false? 
            <button onClick={()=>dispatch(addCharacterFav(id))}>🤍</button> 
            : 
            <button onClick={()=>dispatch(deleteCharacterFav(id))}>❤️</button>}
            </div>
        </div>
    )
}