import React, { Component } from 'react'
import LandingPage from './LandingPage'
import SearchNumber from './SearchNumber'
import SearchTime from './SearchTime'
import SearchGenre from './SearchGenre'
import SearchResult from './SearchResult.js'


export class GameFinder extends Component {

    state = {
        step: 1,
        genres: [0, 0, 0, 0, 0, 0, 0],
        number: 0,
        minTime: 15,
        maxTime: 60,
        response: [],
    };

     // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

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
     fetch('http://192.168.0.19/backend/slim/public/api/boardgames')    
    .then(response => response.json())    
    .then(response => this.setState({response}))
    //.then(return(this.state.response));
    //return this.state.response;
  }

  newSearch = () => {
    this.setState({
      step: 1
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
                <SearchResult response={this.state.response} fetchGames={this.fetchGames} newSearch={this.newSearch}/>
            )
        default:
            return(
                <p>sumting wong</p>
            );
    }
  }
}

export default GameFinder