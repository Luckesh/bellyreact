import React, { Component } from 'react'
import FoundGame from './FoundGame.js'
import Button from './LargeButton.js'

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
      <Button onClick={ this.props.startOver } text={"Nové vyhľadávanie"}/>
      </div>        
      )  
  }
}

const pole = {
  margin: '0 auto',
  width: 'auto',
  display: 'grid',
  gridGap: '20px',
}

export default FoundGames
