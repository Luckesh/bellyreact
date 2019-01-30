import React, { Component } from 'react'

export default class Button extends Component {


  state={
    text: '',
    width: '200px',
    onClick: '',
    
  }
  //nepouzivam momentalne trosku shite
  getStyle = () => {
    return{
      width: this.state.width,
    }
}

  
  render() {
    return (
      <div>
        <p onClick={this.props.onClick} style={btn} >{this.props.text}</p>
      </div>
    )
  }
  
}

const btn = {
  padding: '15px 15px',
  backgroundColor: 'white',
  textAlign: 'center',
  margin: '0 auto',
  fontSize: '1.5em',
  width: '160px',
  color: '#000',
  borderRadius: '3px',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}
