import React, { Component } from 'react'
import api from '../web-services/api';

import '../styles/index.css';

class App extends Component {

    state = {
        characters: [],
        heroes: []
    }

    componentDidMount() {
        api.characters(characters => {
            this.setState({ characters: characters })
        })
    }

    addCharactersById(id, i) {
        this.setState(prevState => ({
            characters: this.state.characters.filter(function (character) {
                return character.id !== id
            }),
            heroes: [...prevState.heroes, this.state.characters[i]]
        }))
    }

    removeHerosById(id, i) {
        this.setState(prevState => ({
            heroes: this.state.heroes.filter(function (character) {
                return character.id !== id
            }),
            characters: [...prevState.characters, this.state.heroes[i]]
        }))
    }

    strengthCalculate() {
        let strength = 0;
        this.state.heroes.forEach(hero => strength += hero.strength);
        return strength
    }

    intelligenceCalculate() {
        let intelligence = 0;
        this.state.heroes.forEach(hero => intelligence += hero.intelligence);
        return intelligence
    }

    speedCalculate() {
        let speed = 0;
        this.state.heroes.forEach(hero => speed += hero.speed);
        return speed
    }

    render() {
        return (
            <div className="App">
                <h2>Build Your Team</h2>
                <div>
                    <div className="col-md-4">
                        <h2>Character List</h2>
                        <ul className="list-group">
                            {
                                this.state.characters.map((character, i) => {
                                    return (
                                        <li key={character.id} class="list-group-item">
                                            <div className="list-item">{character.name}</div>
                                            <div className="lsit-item right-button" onClick={() => this.addCharactersById(character.id, i)}>
                                                +
                                </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h2>Hero List</h2>
                        <ul className="list-group">
                            {
                                this.state.heroes.map((character, i) => {
                                    return (
                                        <li key={character.id} className="list-group-item">
                                            <div className="list-item">{character.name}</div>
                                            <div className="lsit-item right-button" onClick={() => this.removeHerosById(character.id, i)}>
                                                x
                                        </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Team Stats</h4>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <b>Overall Strength:</b> {this.strengthCalculate()}
                            </li>
                            <li className="list-group-item">
                                <b>Overall Intelligence:</b> {this.intelligenceCalculate()}
                            </li>
                            <li className="list-group-item">
                                <b>Overall Speed:</b> {this.speedCalculate()}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;