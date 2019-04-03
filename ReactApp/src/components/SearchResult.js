import React, { Component }from 'react'
import FoundGames from './parts/FoundGames.js'
import Button from './parts/LargeButton.js'

export class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: 0,
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
        this.props.fetchGames();
    }

    render(){
        if(this.props.response[0]===0){
            return (      
                <h2>Loading...</h2>  
              )
        }
        else if(this.props.response[0]===-1){
            return(
                <div className='searchResult'>
                    <div>
                         <h2>Nepodarilo sa nájsť hru. Skúste iné parametre.</h2>  
                    </div>     
                    <div>
                        <Button onClick={ this.startOver } text={"Nové vyhľadávanie"}/>
                    </div>       
                </div>
            )
            
        }
        else{
            return (      
                <div className='searchResult'>
                    <div>
                         <h2>Ďakujeme! Našli sme pre Vás tieto hry:</h2>  
                    </div>  
                    <div>
                        <FoundGames chooseGame={this.props.chooseGame} startOver={ this.startOver } ahoj={2} response={this.props.response}/>
                        <Button onClick={ this.startOver } text={"Nové vyhľadávanie"}/>
                    </div>        
                </div>
              )
        }
    } 
}

export default SearchResult


