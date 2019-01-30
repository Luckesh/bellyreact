import Button from './parts/Button.js'
import React, { Component }from 'react'


export class LandingPage extends Component {

    continue = e => {
        //e.preventDefault();
        this.props.nextStep();
    }
    

    render() {
        return (
            <div className='landingPage'>
            <h2>Poradíme Vám, čo si zahrať!</h2>        
            <div>
                <p onClick={this.continue} style={cta}>Vybrať hru</p>
            </div>
            <Button text='Katalóg hier'/>
            <Button text='Náhodná hra'/>
            </div>
          )
    }       
}

export default LandingPage

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
