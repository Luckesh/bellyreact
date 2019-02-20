import React, { Component }from 'react'
import menaPic from '../images/mena.jpg'
import catanPic from '../images/settlers.jpg'
import Button from './parts/LargeButton.js'



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
        
        fetch('http://slim/api/boardgames')    
        .then(response => response.json())    
        .then(response => this.setState({response}));
        
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
        return (
            <div className='searchResult'>
                <div>
                     <h2>Ďakujeme! Našli sme pre Vás tieto hry:</h2>  
                       
                </div>  
                <div style={pole}>
                    <div style={hraMena}>
                    </div>    
                    <div style={hraCatan}>
                    </div>              
                    <Button onClick={ this.startOver } text={"Nové vyhľadávanie"}/>
                </div>        
            </div>
          )
    } 
    
}

export default SearchResult


const pole = {
    margin: '0 auto',
    width: 'auto',
    display: 'grid',
    gridGap: '20px',
}

const hraMena = {
    margin: '0 auto',
    height: '220px',
    backgroundColor: 'white',
    width: '220px',
    display: 'grid',
    gridGap: '20px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    backgroundImage: 'url('+menaPic+')',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    borderRadius: '4px', 
}

const hraCatan = {
    margin: '0 auto',
    height: '220px',
    backgroundColor: 'white',
    width: '220px',
    display: 'grid',
    gridGap: '20px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    backgroundImage: 'url('+catanPic+')',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    borderRadius: '4px', 
}


