import React, { Component } from 'react'

export class FoundGame extends Component {

  state={
    imgpath: '',
  }

  componentDidMount(){

    fetch('http://192.168.0.19/backend/slim/public/api/pic/'+this.props.game['id'])
      .then(res => res.blob())
      .then(img => {
          console.log(URL.createObjectURL(img));     
          this.setState({imgpath:URL.createObjectURL(img)});

      })

  }

  //<img src={this.state.imgpath} alt="foto"/>

  render() {
    const hra = {
      margin: '0 auto',
      height: '220px',
      backgroundColor: 'white',
      width: '220px',
      display: 'grid',
      gridGap: '20px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      backgroundImage: 'url('+this.state.imgpath+')',
      backgroundSize: 'cover',
      backgroundPosition: 'top center',
      borderRadius: '4px', 
      cursor: 'pointer',
    }
    
    return (
      <div onClick={() => this.props.chooseGame(this.props.game['id'])}style={hra}>        
        <p>{this.props.game['name']}</p>
      </div>
    )
  }

  
}




export default FoundGame
