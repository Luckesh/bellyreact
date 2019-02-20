import React, { Component }from 'react'
import Button from './parts/Button.js'
import BackButton from './parts/BackButton.js'

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

const Range = Slider.Range;

const wrapperStyle = { 
    width: '200px', 
    margin: '0 auto' 
};

const trkStyle = [
    {
        backgroundColor: 'orange',
        height: '20px',
    }
];

const hdlStyle = [
    {
        borderColor: 'orange',
        marginLeft: '-11px',
        marginTop: '-0.5px',
        height: '21px',
        width: '22px',
    },
    {
        borderColor: 'orange',
        marginLeft: '-11px',
        marginTop: '-0.5px',
        height: '21px',
        width: '22px',
    }
];

const rlStyle = 
    {
        height: '20px',
    };
  
  




export class SearchTime extends Component {
  
    state = {
        min: 15,
        max: 60
    }

    log = value => {
        console.log('kokotko');
        console.log(value); //eslint-disable-line
        this.props.changeTime(value);
        this.setState({min:value[0]});
        this.setState({max:value[1]});
    
      }

    continue = e => {
        this.props.nextStep();
    }

    backtrack = e => {
        this.props.prevStep();
    }

    render(){
        return (
            <div className='searchTime'>
                <h2>Ako dlho sa chcete hrať?</h2>        
                <div style={wrapperStyle}>
                    <h3>{this.state.min} min - {this.state.max} min</h3>
                    <Range onChange={this.log} handleStyle={hdlStyle} railStyle={rlStyle} trackStyle={trkStyle} min={15} max={120} step={15} defaultValue={[15, 60]}  />
                </div>
                <Button onClick={(this.continue)} text='Ďalej'></Button>
                <BackButton  onClick={this.backtrack} text="naspäť"/>
            </div>
          )
    }
    
}

export default SearchTime

/*
const pole = {
    margin: '0 auto',
    width: 'auto',
    minHeight: '100px',
    display: 'grid',
    gridGap: '10px',
}*/