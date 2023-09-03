import axios from "axios";

function asyncValidate(input){
    return new Promise(res=>{
        res(
            axios.get("http://localhost:3001/users")
            .then(res=>{
                let exist = res.data.some((e)=> {return e.email === input.email})
                if(exist === true) return "El email esta en uso"
            })
        )
    })
}

export const validate = async (input) =>{
    let error = {};
    let searchEmail = await asyncValidate(input)
    if(searchEmail) error.email = searchEmail
    if(input.name.length <= 3) error.name = "El nombre es demasiado corto";
    else if(input.name.length >= 12) error.name = "El nombre es demasiado largo";
    else if(/[^a-zA-Z]/.test(input.name)) error.name = "El nombre solo debe incluir letras";
    else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(input.email)){
        error.email = "Email incorrecto"
    }
    else if(input.password.length < 5) error.password = "La contraseña es demasiado corta"
    else if(!/^(?=.*[@])(?=.*[A-Z])(?=.*\d)/.test(input.password)) {
        error.password = "Debe incluir un numero, una mayuscula y un @"
    }
    return error
}
