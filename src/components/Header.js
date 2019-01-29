import React from 'react'

export default function Header() {
  return (
    <React.Fragment>
        <h1 style={titleStyle}>Belly Button</h1>
    </React.Fragment>
  )
}

const titleStyle = {
    color: '#50473E',
    fontSize: '2em',
    borderBottom: '1px solid #50473E',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
}
