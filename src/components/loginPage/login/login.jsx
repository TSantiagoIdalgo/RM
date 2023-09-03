import React, { useState } from "react";
import InputLogin from "../inputs/input-login";
import Button from "../buttons/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getAccess } from "../../../redux/actions/actions";
import { useDispatch } from "react-redux";

export default function Login({props}){
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let [user, checkUser] = useState({
        email: "",
        password: ""
    })
    let [error, setError] = useState("")
    function submit(e){
        e.preventDefault()
        axios.get("http://localhost:3001/users", user)
        .then(res => res.data.filter((e) => e.email === user.email))
        .then(res => res.filter((e) => e.password === user.password))
        .then(res => {
            if(res.length > 0) {
                navigate("/home")
                dispatch(getAccess())
            }
            else setError(error = "Email o password incorrectos")
        })
        .catch(err => console.log("Error: ", err))
    }
    return (
        <form onSubmit={submit} className="flex flex-col" autoComplete="off">
            <InputLogin prop="Email Adress" id="email" name="email" value={user.email} user={user} fn={checkUser}/>
            <InputLogin prop="Password" id="email" name="password" value={user.password} user={user} fn={checkUser}/>
            <span className="text-common mt-2">{error}</span>
            <Button props={props}/>
        </form>
    )
}