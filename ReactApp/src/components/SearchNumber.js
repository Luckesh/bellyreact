import React, { Component }from 'react'
import SmallButton from './parts/SmallButton.js'
import BackButton from './parts/BackButton.js'
export class SearchNumber extends Component {
    
    continue = () => {
        this.props.nextStep();
    }

    backtrack = e => {
        this.props.prevStep();
    }

    continue = id => {
        this.props.changeNumber(id);
        this.props.nextStep();
    }

    render(){
        return (
            <div className='searchPage'>
                <h2>Koľko Vás je?</h2>        
                <div style={pole}>
                    <SmallButton onClick={() => this.continue(2)} text='2'/>
                    <SmallButton onClick={() => this.continue(3)} text='3'/>
                    <SmallButton onClick={() => this.continue(4)} text='4'/>
                    <SmallButton onClick={() => this.continue(5)} text='5'/>
                    <SmallButton onClick={() => this.continue(6)} text='6'/>
                    <SmallButton onClick={() => this.continue(7)} text='7+'/>
                </div>    
                <div>
                    <BackButton  onClick={this.backtrack} text="naspäť"/>
                </div>
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
    marginBottom: '50px',
}