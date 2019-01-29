import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import LandingPage from './components/LandingPage'
import SearchNumber from './components/SearchNumber'
import SearchTime from './components/SearchTime'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SearchTime/>
      </div>
    );
  }
}

export default App;
//<LandingPage/>