import React, { Component } from 'react'

export default class Team extends Component {
    
    setLiStyles = () => {
        const { gamesWon, gamesLost } = this.props.team;
        return {
            background: gamesLost > gamesWon ? 'red' : 'yellow',
            padding: '20px',
            margin: '20px',
        }        
    }
    setAStyles = () => {
        const { gamesWon, gamesLost } = this.props.team;
        return {
            color: gamesLost > gamesWon ? '#fff' : '#000',
        }
    }

    render() {
        const { id, name, gamesWon, gamesLost } = this.props.team;
        return (
            <li style={this.setLiStyles()}>
                <p style={this.setAStyles()}> 
                    <span className='ml-2 mr-2'>{ name }</span> 
                    <span className='mr-2'>{gamesWon}-{gamesLost}</span>
                    <button 
                        className='btn btn-sm btn-primary ml-3'
                        onClick={this.props.increaseNumberOfWins.bind(this, id)}
                    >
                        +
                    </button>
                    <button 
                        className='btn btn-sm btn-danger ml-3'
                        onClick={this.props.deleteTeam.bind(this, id)}
                    >
                        X
                    </button>
                </p>
                
            </li>
        )
    }
}
