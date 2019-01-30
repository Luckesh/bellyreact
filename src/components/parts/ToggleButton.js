import React, { Component } from 'react'

const btn = {
  padding: '15px 15px',
  backgroundColor: 'white',
  textAlign: 'center',
  margin: '0 auto',
  fontSize: '1.5em',
  width: '210px',
  color: '#000',
  borderRadius: '3px',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  transition: '0.5s',
}

const inactiveBtn = {
  padding: '10px 10px',
  backgroundColor: 'lightgrey',
  textAlign: 'center',
  margin: '0 auto',
  fontSize: '1.3em',
  width: '200px',
  color: '#000',
  borderRadius: '3px',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  transition: '0.5s',
}

export default class ToggleButton extends Component {


 

  //nepouzivam momentalne trosku shite

  
  render() {
    return (
      <div>
        <p onClick={this.props.onClick} style={this.props.toggle ? btn : inactiveBtn} >{this.props.text}</p>
      </div>
    )
  }
  
}



