import React, { Component } from 'react'
import BackButton from './parts/BackButton.js'
import numberIcon from '../images/numberIcon.png'
import timeIcon from '../images/timeIcon.png'



export class Game extends Component {

    state={
        response: [],
    }

    backtrack = e => {
        this.props.prevStep();
    }

    componentDidMount(){
    fetch('http://192.168.43.59/backend/slim/public/api/boardgames/'+this.props.chosenGame)    
    .then(response => response.json())    
    .then(response => this.setState({response}));
    }

  render() {
    return (
      <div>
          {
            this.state.response.map(game => {
              return(
                  <div>
                      <h1>{game['name']}</h1>
                      <h3><span><img src={timeIcon} style={icon} alt=""/></span>{game['playtime']} min <span><img src={numberIcon} style={icon} alt=""/></span>{game['min']}-{game['max']} hráčov</h3>
                      <p>{game['description']}</p>
                  </div>
              )})
          }
        <BackButton  onClick={this.backtrack} text="naspäť"/>
      </div>
    )
  }
}

export default Game

const icon={
    width: '50px',
    height: 'auto',
    position: 'relative',
    top: '5px',
}
