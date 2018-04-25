import React, { Component } from 'react'
import { connect } from 'react-redux';

import { removeCharacterById } from '../actions';

class HeroList extends Component {
    state = {}
    render() {
        return (
            <div>
                <h4>Your hero list</h4>
                <ul className="list-group">
                    {
                        this.props.heroes.map((character, i) => {
                            return (
                                <li key={character.id} className="list-group-item">
                                    <div className="list-item">{character.name}</div>
                                    <div className="lsit-item right-button" onClick={() => this.props.removeCharacterById(character.id, i)}>
                                        x
                                        </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        heroes: state.heroes
    };
}

export default connect(mapStateToProps, { removeCharacterById })(HeroList);
