import React, { Component }from 'react'
import FoundGames from './parts/FoundGames.js'

export class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    startOver = e => {
        this.props.newSearch();
    }

    changeStatus(id) {
        let a = this.state.chosenGenres.slice(); 
        a[id]=1-a[id];
        this.setState({chosenGenres: a});
    }

    componentDidMount() {
        this.props.fetchCatalogue();
    }

    render(){
        return (      
            <div className='searchResult'>
                <div>
                     <h2>Katalóg všetkých hier:</h2>  
                </div>  
                <div>
                    <FoundGames chooseGame={this.props.chooseGame} startOver={ this.startOver } ahoj={2} response={this.props.response}/>
                </div>        
            </div>
          )
    } 
}

export default SearchResult


