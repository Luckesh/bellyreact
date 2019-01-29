import React from 'react'
import SmallButton from './parts/SmallButton.js'

export default function LandingPage() {
  return (
    <div className='searchPage'>
        <h2>Koľko Vás je?</h2>        
        <div style={pole}>
            <SmallButton text='2'/>
            <SmallButton text='3'/>
            <SmallButton text='4'/>
            <SmallButton text='5'/>
            <SmallButton text='6'/>
            <SmallButton text='7+'/>
        </div>        
    </div>
  )
}

const pole = {
    margin: '0 auto',
    width: 'auto',
    height: '100px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '10px',
}