import React, { Component } from 'react'
import api from '../web-services/api';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import TeamStats from './TeamStats';

import '../styles/index.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>Build Your Team</h2>
                <div>
                    <div className="col-md-4">
                        <CharacterList />
                    </div>
                    <div className="col-md-4">
                        <HeroList />
                    </div>
                    <div className="col-md-4">
                        <TeamStats />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;