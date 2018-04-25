import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';

class CharacterList extends Component {

    render() {

        console.log('this.props ', this.props)

        return (
            <div>
                <h2>Character List</h2>
                    <ul className="list-group">
                    {
                            this.props.characters.map((character, i) => {
                                return (
                                    <li key={character.id} className="list-group-item">
                                        <div className="list-item">{character.name}</div>
                                        <div className="lsit-item right-button" onClick={() => this.props.addCharacterById(character.id, i)}>
                                            +
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
        characters: state.characters
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addCharacterById}, dispatch)
}

//shot cut, remove mapDispatchToProps from connect and directly add addCharacterById as a object

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);