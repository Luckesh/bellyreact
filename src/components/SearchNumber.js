//import Button from './parts/Button.js'
import React, { Component }from 'react'
import SmallButton from './parts/SmallButton.js'
import BackButton from './parts/BackButton.js'


/*

import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const wrapperStyle = { width: 400, margin: 50 };
ReactDOM.render(
  <div>
    <div style={wrapperStyle}>
      <p>Slider with custom handle</p>
      <Slider min={0} max={20} defaultValue={3} handle={handle} />
    </div>
    <div style={wrapperStyle}>
      <p>Slider with fixed values</p>
      <Slider min={20} defaultValue={20} marks={{ 20: 20, 40: 40, 100: 100 }} step={null} />
    </div>
    <div style={wrapperStyle}>
      <p>Range with custom handle</p>
      <Range min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
    </div>
  </div>,
  document.getElementById('__react-content')
);


*/

export class SearchNumber extends Component {
    
  

    continue = e => {
        //setState
        this.props.nextStep();
    }

    backtrack = e => {
        this.props.prevStep();
    }

    continue = id => {
        //this.setState({number: id});
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
}