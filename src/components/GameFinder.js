import React, { Component } from 'react'
import LandingPage from './LandingPage'
import SearchNumber from './SearchNumber'
import SearchTime from './SearchTime'
import SearchGenre from './SearchGenre'
import SearchResult from './SearchResult.js'


export class GameFinder extends Component {

    state = {
        step: 1,
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
                <SearchNumber prevStep ={this.prevStep} nextStep={this.nextStep}/>
            );
        case 3:
            return(
                <SearchTime prevStep ={this.prevStep} nextStep={this.nextStep}/>
            );
        case 4:
            return(
                <SearchGenre prevStep ={this.prevStep} nextStep={this.nextStep}/>
            );
        case 5:
            return(
                <SearchResult newSearch={this.newSearch}/>
            )
        default:
            return(
                <p>sumting wong</p>
            );
    }
  }
}

export default GameFinder
