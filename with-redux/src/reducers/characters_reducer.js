import _characters from '../data/characters.json';

import { ADD_CHARACTOR, REMOVE_CHARACTOR } from '../actions'

import { createCharacter } from './helpers';

function characters(state = _characters, action) {
    switch (action.type) {
        case ADD_CHARACTOR: 
            let characters = state.filter(item => item.id !== action.id);
            return characters;
        case REMOVE_CHARACTOR: 
            characters = [...state, createCharacter(action.id)]
            return characters;
        default:
            return state;
    }
}

export default characters;