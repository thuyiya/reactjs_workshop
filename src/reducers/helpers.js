import _characters from '../data/characters.json';

function createCharacter(id) {
    let character = _characters.find(c => c.id === id);
    return character;
}

export {
    createCharacter
}