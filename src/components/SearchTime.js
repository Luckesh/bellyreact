import React from 'react'
import Button from './parts/Button.js'

export default function LandingPage() {
  return (
    <div className='searchPage'>
        <h2>Ako dlho sa chcete hrať?</h2>        
        <div style={pole}>
            <Button text='menej ako 30 min'/>
            <Button text='30 min až 1 hod'/>
            <Button text='1 až 2 hod'/>
            <Button text='viac ako 2 hod'/>
        </div>        
    </div>
  )
}

const pole = {
    margin: '0 auto',
    width: 'auto',
    height: '100px',
    display: 'grid',
    gridGap: '10px',
}