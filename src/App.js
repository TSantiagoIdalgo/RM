import React, { useEffect } from "react"
import {Routes, Route, useNavigate} from "react-router-dom"
import "./index.css"
import Control from "./components/loginPage/control";
import Main from "./components/main/main"
import Favs from "./components/main/favs/favs";
import CardList from "./components/main/cardlist/cardlist"
import { useSelector } from "react-redux";


export default function App() {
  let navigate = useNavigate()
  let state = useSelector(state=> state.access)
  useEffect(()=>{
    if(state === false) navigate("/")
  },[state])
  return (
    <div>
      <Routes>
        <Route path="/" element={<Control/>}/>
        <Route path="/home" element={<Main/>}>
          <Route path="/home" element={<CardList/>}/>
          <Route path="/home/favs" element={<Favs/>}/>
        </Route>
      </Routes>
    </div>
  );
}