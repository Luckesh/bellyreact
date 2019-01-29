import React from 'react'
import Button from './parts/LargeButton.js'

export default function LandingPage() {
  return (
    <div className='searchPage'>
        <div>
             <h2>Aký žáner <span style={help}>?</span></h2>  
               
        </div>  
        <div style={pole}>
            <Button text='Social Deduction'/>
            <Button text='Eurogames'/>
            <Button text='Postrehové'/>
            <Button text='Rodinné'/>
            <Button text='Vojnové'/>
            <Button text='Párty hry'/>
            <Button text='Kooperatívne'/>
        </div>        
    </div>
  )
}

const pole = {
    margin: '0 auto',
    width: 'auto',
    display: 'grid',
    gridGap: '20px',
}

const help = {
    backgroundColor: '#FF7337',
    borderRadius: '50%',
    padding: '0px 20px',
    color: '#fff',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    cursor: 'pointer',
}