import axios from "axios"
export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";
export const ADD_CHARACTER_FAV  = "ADD_CHARACTER_FAV";
export const DELETE_CHARACTER_FAV = "DELETE_CHARACTER_FAV";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const GET_ACCESS = "GET_ACCESS"
export const GET_CHARACTER = "GET_CHARACTER"

const getAccess = ()=>{
    return {
        type: GET_ACCESS
    }
}

const getCharacter = (arr)=>(dispatch)=>{
    return dispatch({
        type: GET_CHARACTER,
        payload: arr
    })
}

const getAllCharacters = (pageNumber)=>(dispatch)=>{
    axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`).then(({data})=>{
        return dispatch({
            type: GET_ALL_CHARACTERS,
            payload: data
        })
    })
}

const addCharacterFav = (id) => (dispatch)=>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(({data})=>{
        return dispatch({
            type: ADD_CHARACTER_FAV,
            payload: data
        })
    })
}

const deleteCharacterFav = (id)=>{
    return {
        type: DELETE_CHARACTER_FAV,
        payload: id
    }
}
export {
    getAllCharacters,
    addCharacterFav,
    deleteCharacterFav,
    getAccess,
    getCharacter
}