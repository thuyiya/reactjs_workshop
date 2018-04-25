import _characters from '../data/characters.json';

const TIMEOUT = 100;

const characters = (cb, timeout) => setTimeout(() => cb(_characters), timeout || TIMEOUT);

export default {
    characters
}