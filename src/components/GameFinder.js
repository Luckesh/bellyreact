import React, { Component } from 'react'
import LandingPage from './LandingPage'
import SearchNumber from './SearchNumber'
import SearchTime from './SearchTime'
import SearchGenre from './SearchGenre'
import SearchResult from './SearchResult.js'
import Game from './Game.js'

export class GameFinder extends Component {

    state = {
        step: 1,
        genres: {
            "rodinné":0, 
            "párty":0, 
            "vojnové":0,
            "eurohry":0,
            "postrehové":0,
            "kooperatívne":0,
        },
        number: 0,
        minTime: 15,
        maxTime: 60,
        response: [],
        chosenGame: 0,
    };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

 chooseGame = id => {
    //const { step } = this.state;
    console.log("id je "+id);
    this.setState({
        step: 6,
        chosenGame: id,
    });
 }

 
  changeNumber = id => {
      this.setState({number:id})
  }

  changeTime = bounds => {
      this.setState({minTime:bounds[0]});
      this.setState({maxTime:bounds[1]});

  }

  changeGenre = genres => {
      console.log(genres);
      this.setState({genres: genres});
  }

  fetchGames = () => {
    console.log('http://localhost/backend/slim/public/api/boardgames/number='+this.state.number+'&mintime='+this.state.minTime+'&maxtime='+this.state.maxTime+'&genres='+JSON.stringify(this.state.genres));
    fetch('http://192.168.43.59/backend/slim/public/api/boardgames/number='+this.state.number+'&mintime='+this.state.minTime+'&maxtime='+this.state.maxTime+'&genres='+JSON.stringify(this.state.genres))    
    .then(response => response.json())    
    .then(response => this.setState({response}))
  }

  newSearch = () => {
    this.setState({
        step: 1,
        genres: {
            "rodinné":0, 
            "párty":0, 
            "vojnové":0,
            "eurohry":0,
            "postrehové":0,
            "kooperatívne":0,
        },
        number: 0,
        minTime: 15,
        maxTime: 60,
        response: [],
        chosenGame: 0,
    });
  };

  render() {
    const { step } = this.state;
    switch (step) {
        case 1:
            return(
                <LandingPage prevStep ={this.prevStep} nextStep={this.nextStep}/>
            );
        case 2:
            return(
                <SearchNumber changeNumber={this.changeNumber} prevStep ={this.prevStep} nextStep={this.nextStep}/>
            );
        case 3:
            return(
                <SearchTime changeTime={this.changeTime} prevStep ={this.prevStep} nextStep={this.nextStep}/>
            );
        case 4:
            return(
                <SearchGenre changeGenre={this.changeGenre} prevStep ={this.prevStep} nextStep={this.nextStep}/>
            );
        case 5:
            return(
                <SearchResult response={this.state.response} chooseGame={this.chooseGame} fetchGames={this.fetchGames} newSearch={this.newSearch}/>
            )
        case 6:
            return(
                <Game chosenGame={this.state.chosenGame} prevStep ={this.prevStep}/>
            )
        default:
            return(
                <p>Something bad happened. Sorry!</p>
            );
    }
  }
}

export default GameFinder
