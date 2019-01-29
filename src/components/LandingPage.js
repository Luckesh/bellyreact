import React from 'react'
import Button from './parts/Button.js'

export default function LandingPage() {
  return (
    <div className='landingPage'>
        <h2>Poradíme Vám, čo si zahrať!</h2>        
        <div>
            <p style={cta}>Vybrať hru</p>
        </div>
        <Button text='Katalóg hier'/>
        <Button text='Náhodná hra'/>
    </div>
  )
}


const cta = {
    padding: '15px 15px',
    backgroundColor: '#FF7337',
    textAlign: 'center',
    width: '250px',
    margin: '0 auto',
    fontSize: '2em',
    color: '#fff',
    borderRadius: '10px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

}


