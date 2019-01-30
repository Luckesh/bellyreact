//import Button from './parts/Button.js'
import React, { Component }from 'react'
import SmallButton from './parts/SmallButton.js'
import BackButton from './parts/BackButton.js'


export class SearchNumber extends Component {
  
    continue = e => {
        this.props.nextStep();
    }

    backtrack = e => {
        this.props.prevStep();
    }

    render(){
        return (
            <div className='searchPage'>
                <h2>Koľko Vás je?</h2>        
                <div style={pole}>
                    <SmallButton onClick={this.continue} text='2'/>
                    <SmallButton onClick={this.continue} text='3'/>
                    <SmallButton onClick={this.continue} text='4'/>
                    <SmallButton onClick={this.continue} text='5'/>
                    <SmallButton onClick={this.continue} text='6'/>
                    <SmallButton onClick={this.continue} text='7+'/>
                </div>        
                <BackButton  onClick={this.backtrack} text="naspäť"/>
            </div>
          )
    }
    
}

export default SearchNumber


const pole = {
    margin: '0 auto',
    width: 'auto',
    height: '100px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '10px',
}