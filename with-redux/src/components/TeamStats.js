import React, { Component } from 'react'
import { connect } from 'react-redux';

class TeamStats extends Component {
    strengthCalculate() {
        let strength = 0;
        this.props.heroes.forEach(hero => strength += hero.strength);
        return strength
    }

    intelligenceCalculate() {
        let intelligence = 0;
        this.props.heroes.forEach(hero => intelligence += hero.intelligence);
        return intelligence
    }

    speedCalculate() {
        let speed = 0;
        this.props.heroes.forEach(hero => speed += hero.speed);
        return speed
    }

    render() {
        return (
            <div>
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
        )
    }
}


function mapStateToProps(state) {
    return {
        heroes: state.heroes
    };
}

export default connect(mapStateToProps, null)(TeamStats);