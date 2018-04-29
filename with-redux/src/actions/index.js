export const ADD_CHARACTOR = 'ADD_CHARACTOR';
export const REMOVE_CHARACTOR = 'REMOVE_CHARACTOR';

export function addCharacterById(id) {
    const action = {
        type: ADD_CHARACTOR,
        id
    }

    return action;
}

export function removeCharacterById(id) {
    const action = {
        type: REMOVE_CHARACTOR,
        id
    }

    return action;
}