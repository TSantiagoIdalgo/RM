import * as actions from "../actions/actions"

const initialState = {
    characters: [],
    favsCharacters: [],
    charactersSearched: [],
    access: false
}

const reducer = (state = initialState, action)=>{
    switch (action.type){
        case actions.GET_ALL_CHARACTERS: return {...state, characters: action.payload};
        case actions.GET_CHARACTER: return {...state, charactersSearched: action.payload};
        case actions.ADD_CHARACTER_FAV: return {...state, favsCharacters: [...state.favsCharacters, action.payload]};
        case actions.DELETE_CHARACTER_FAV: return {
            ...state, favsCharacters: state.favsCharacters.filter((e)=>e.id !== action.payload)};
        case actions.GET_ACCESS: return {...state, access: state.access === false? true : false}
        default: return {...state}
    }
}

export default reducer