import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import GameFinder from './components/GameFinder.js'





class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <GameFinder/>
      </div>
    );
  }
}

export default App;
//<LandingPage/>