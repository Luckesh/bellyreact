import React, { Component } from 'react'

export default class SmallButton extends Component {
  state={
    text: '',
  }
  render() {
    return (
      <div>
        <p style={btn}>{this.props.text}</p>
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
  width: '60px',
  color: '#000',
  borderRadius: '3px',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}
