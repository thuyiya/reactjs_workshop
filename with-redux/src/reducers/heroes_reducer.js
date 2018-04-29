import { ADD_CHARACTOR, REMOVE_CHARACTOR } from '../actions'

import { createCharacter } from './helpers';

function heroes(state= [], action){
    switch (action.type) {
        case ADD_CHARACTOR:
            let heroes = [...state, createCharacter(action.id)]
            return heroes;
        case REMOVE_CHARACTOR: 
            heroes = state.filter(item => item.id !== action.id)
            return heroes;
        default:
            return state;
    }
}

export default heroes;