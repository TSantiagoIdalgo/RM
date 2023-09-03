import React, { useState } from "react";
import Input from "../inputs/input";
import ButtonRegister from "../buttons/button-register";
import axios from "axios";
import {validate} from "./validates";
import Registered from "./registered";

export default function Register({props}){
    let [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    let [error, setErrors] = useState({})
    let [accepted, setAccept] = useState(false)

    function revisarhuevos(){
        return new Promise(res=>{
                res(validate(user))
        })
    }

    async function submit(e){
        e.preventDefault();
        let errors = await revisarhuevos()
        setErrors(errors)
        console.log(errors)
        if(Object.keys(errors).length === 0) {
            axios.post("http://localhost:3001/users", user)
            .then(res =>console.log(res))
            setAccept(accepted = true)
        }
    }
    return (
        accepted === true? <Registered/> : <form className="relative" onSubmit={submit} autoComplete="off">
            <Input prop="User Name" id="name" name="name" value={user.user} fn={setUser} user={user}/>
            <span className="text-common">{error.name}</span>
            <Input prop="Email Adress" id="email" name="email" value={user.email} fn={setUser} user={user}/>
            <span className="text-common">{error.email}</span>
            <Input prop="Password" id="password" name="password" value={user.password} fn={setUser} user={user}/>
            <span className="text-common text-center">{error.password}</span>
            <div className="flex absolute -left-4">
                <span onClick={()=>props()}><ButtonRegister prop="Back"/></span>
                <ButtonRegister prop="Register"/>
            </div>
        </form>
    )
}