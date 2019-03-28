import React, { Component } from 'react'
import FoundGame from './FoundGame.js'

export class FoundGames extends Component {  
  render() {
    return (
      <div style={pole}>
        {   
        this.props.response.map(game => {
          return(
            <FoundGame chooseGame={this.props.chooseGame} key={game['id']}game={game}/>
          )})
        }
      </div>        
      )  
  }
}

const pole = {
  margin: '0 auto',
  width: 'auto',
  display: 'grid',
  gridGap: '20px',
  marginBottom: '10px',
}

export default FoundGames
