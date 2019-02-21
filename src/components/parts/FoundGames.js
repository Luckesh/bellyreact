import React, { Component } from 'react'
import FoundGame from './FoundGame.js'


export class FoundGames extends Component {

        
  
  render() {
    return (
      <div style={pole}>
        {   
            this.props.response.map(game => {
            /*
            var imgsrc = fetch('http://192.168.0.19/backend/slim/public/api/pic/'+game['id'])
            .then(res => res.blob())
            .then(img => {
                console.log(URL.createObjectURL(img));
                imgsrc=URL.createObjectURL(img);        
                return imgsrc;
            })
            console.log(game['name']);
            console.log("img src je "+imgsrc);
            return(
            <div key={'key'+game['id']}>
                <img src={imgsrc} alt="ahoj"/>
                <p>{game['name']}</p>
            </div>

            );
        }*/
        return(
          <FoundGame key={'key'+game['id']}game={game}/>
        )
      
        
        
        })
      }
      </div>
        
      )
  
  }
}

const pole = {
  margin: '0 auto',
  width: 'auto',
  display: 'grid',
  gridGap: '20px',
}

export default FoundGames
