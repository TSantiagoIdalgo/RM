import React, { useState } from "react";
import { getCharacter } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getAccess } from "../../../redux/actions/actions";

export default function SearchBar(){
    let location = useLocation()
    let state = useSelector((state)=>state.characters.results)
    let dispatch = useDispatch()
    let [search, setSearch] = useState("")
    function searchForIT(e){
        setSearch(e.target.value)
    }
    function send(e){
        let searching = state.filter((e) => e.name.toLowerCase().includes(search))
        let obj = {results: searching}
        if(search.length < 1) obj.results = []
        if(e.key === "Enter"){
            dispatch(getCharacter(obj))
        }  
    }
    return(
        <div>
            <input type="text" placeholder="Search character" className="h-8 w-screen mt-2 mr-6 md:w-nvw bg-gray-800 text-white" value={search} onChange={searchForIT} onKeyDown={send}/>

            {location.pathname === "/home/favs"?
            <Link to="/home" className="text-white bg-common p-1 rounded-xl mr-8 hover:text-gray-800">Volver</Link> 
            :
            <Link to="/home/favs" className="text-white bg-common p-1 rounded-xl mr-8 hover:text-gray-800">Favoritos</Link>}

            <button onClick={()=>dispatch(getAccess())} className="text-white bg-common p-1 rounded-xl mr-8 hover:text-gray-800">Log Out</button>
        </div>
    )
}