import React, { Component }from 'react'
import Button from './parts/LargeButton.js'
import BackButton from './parts/BackButton.js'


export class SearchTime extends Component {
  
    continue = e => {
        this.props.nextStep();
    }

    backtrack = e => {
        this.props.prevStep();
    }

    render(){
        return (
            <div className='searchPage'>
                <h2>Ako dlho sa chcete hrať?</h2>        
                <div style={pole}>
                    <Button onClick={this.continue} text='menej ako 30 min'/>
                    <Button onClick={this.continue} text='30 min až 1 hod'/>
                    <Button onClick={this.continue} text='1 až 2 hod'/>
                    <Button onClick={this.continue} text='viac ako 2 hod'/>
                </div>        
                <BackButton  onClick={this.backtrack} text="naspäť"/>
            </div>
          )
    }
    
}

export default SearchTime


const pole = {
    margin: '0 auto',
    width: 'auto',
    minHeight: '100px',
    display: 'grid',
    gridGap: '10px',
}