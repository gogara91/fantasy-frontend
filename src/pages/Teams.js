import React, { Component } from 'react'
import Team from '../components/teams/Team.js'

export default class Teams extends Component {
    state = {
        teams: [],
    }
    
    componentDidMount() {

    }

    increaseNumberOfWins = (id) => {
        this.setState({ 
            teams: this.state.teams.map(team => {
                if(team.id === id) {
                    console.log(team);
                    team.gamesWon++;
                }
                return team;
            })
        })
    }

    deleteTeam = (id) => {
        this.setState({
            teams: this.state.teams.filter(team => team.id !== id)
        });
    }

    render() {
        return (
            this.state.teams.map(team => {
                return <Team 
                    key={team.id} 
                    team={team}
                    increaseNumberOfWins={this.increaseNumberOfWins}
                    deleteTeam={this.deleteTeam}
                />
            })
        )
    }
}
