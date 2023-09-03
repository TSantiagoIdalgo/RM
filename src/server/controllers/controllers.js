const express = require("express")

const database = []

const users = (req,res)=>{
    res.status(200).json(database)
}

const postUser = async (req, res)=>{
    try {
        let {name, email, password} = await req.body
        let obj = {
            "name": name,
            "email": email,
            "password": password
        }
        let createUser = database.find((e)=>{
            return e.email === email
        })
        if(createUser !== undefined){
            throw new Error("User exist")
        } else {
            database.push(obj)
            res.status(201).json(obj)
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    users,
    postUser
}