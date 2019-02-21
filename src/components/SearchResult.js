import React, { Component }from 'react'
import Button from './parts/LargeButton.js'
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
        
        this.props.fetchGames();
        
        /*
       fetch('./slim/api/customer')
       .then(console.log(response.text()))
       .then(
         function(response) {
           if (response.status !== 200) {
             console.log('Looks like there was a problem. Status Code: ' +
               response.status);
             return;
           }
     
           // Examine the text in the response
           response.json().then(function(data) {
             console.log(data);
           });
         }
       )
       .catch(function(err) {
         console.log('Fetch Error :-S', err);
       });
        */
    }
    render(){
      console.log('props');
      console.log(this.props.response);
        return (
            
            <div className='searchResult'>
                <div>
                     <h2>Ďakujeme! Našli sme pre Vás tieto hry:</h2>  
                       
                </div>  
                <div>
                    <FoundGames ahoj={2} response={this.props.response}/>
                    <Button onClick={ this.startOver } text={"Nové vyhľadávanie"}/>
                </div>        
            </div>
          )
    } 
    
}

/*
<div style={hraMena}>
                    </div>    
                    <div style={hraCatan}>
                    </div>  
*/

export default SearchResult


