import React, { Component } from 'react'
import Team from '../components/teams/Team.js'
import Http from '../services/HttpService.js'
export default class Teams extends Component {
    state = {
        teams: [],
        players: [],
        users: [],
        games: []
    }
    
    async componentDidMount() {
        try {
            let response = await Http.get('https://www.balldontlie.io/api/v1/teams'); 
            this.setState({
                ...this.state,
                teams: response.data.data
               
            })
        }
        catch(e) {
            console.log(e)
        }
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
        console.log(this.state)
        return (
                this.state.teams.map( team => {
                    return <Team key={team.id} team={team} />
                })
        )
    }
}
