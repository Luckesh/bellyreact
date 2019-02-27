import React, { Component }from 'react'
import Button from './parts/ToggleButton.js'
import BackButton from './parts/BackButton.js'
import Modal from 'react-modal';

Modal.setAppElement('#root')


export class SearchGenre extends Component {

    constructor () {
        super();
        this.state = {
          showModal: false,
          chosenGenres: {
            "rodinné":0, 
            "párty":0, 
            "vojnové":0,
            "eurohry":0,
            "postrehové":0,
            "kooperatívne":0,
        },
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }
      
      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }

    continue = e => {
        this.props.nextStep();
    }

    backtrack = e => {
        this.props.prevStep();
    }


    changeStatus(id) {
        let a = this.state.chosenGenres; 
        a[id]=1-a[id];
        this.setState({chosenGenres: a});
        console.log(this.state.chosenGenres);
        this.props.changeGenre(a);
    }

    render(){
        const { chosenGenres } = this.state;
        return (
            <div className='searchGenre'>
                <div>
                     <h2>Aký žáner <span onClick={this.handleOpenModal} style={help}>?</span></h2>  
                       
                </div>  
                <div style={pole}>
                    <Button onClick={() => this.changeStatus("rodinné")}toggle={chosenGenres["rodinné"]} text='Rodinné'/> 
                    <Button onClick={() => this.changeStatus("párty")}toggle={chosenGenres["párty"]} text='Párty'/>
                    <Button onClick={() => this.changeStatus("vojnové")}toggle={chosenGenres["vojnové"]} text='Vojnové'/>
                    <Button onClick={() => this.changeStatus("eurohry")}toggle={chosenGenres["eurohry"]} text='Eurohry'/>
                    <Button onClick={() => this.changeStatus("postrehové")}toggle={chosenGenres["postrehové"]} text='Postrehové'/>
                    <Button onClick={() => this.changeStatus("kooperatívne")}toggle={chosenGenres["kooperatívne"]} text='Kooperatívne'/>
                    
                    <div>
                        <p onClick={this.continue} style = {cta}>Vyhľadať</p>
                    </div>
                    <BackButton  onClick={this.backtrack} text="naspäť"/>

                </div>      

                <Modal 
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    style={modalStyle}

                    onRequestClose={this.handleCloseModal}
                >
                    <span onClick={this.handleCloseModal} style={closeButton}>
                        x
                    </span>
                    <h3>Eurogames</h3>
                    <p>hry s nepriamou interakciou medzi hráčmi, majú abstraktné komponenty, kladú dôraz na stratégiu na úkor konfliktu medzi hráčmi a náhody. Spravidla hrajú všetci hráči dokonca.</p>
                    <h3>Eurogames</h3>
                    <p>hry s nepriamou interakciou medzi hráčmi, majú abstraktné komponenty, kladú dôraz na stratégiu na úkor konfliktu medzi hráčmi a náhody. Spravidla hrajú všetci hráči dokonca.</p>
                    <h3>Eurogames</h3>
                    <p>hry s nepriamou interakciou medzi hráčmi, majú abstraktné komponenty, kladú dôraz na stratégiu na úkor konfliktu medzi hráčmi a náhody. Spravidla hrajú všetci hráči dokonca.</p>
                    <h3>Eurogames</h3>
                    <p>hry s nepriamou interakciou medzi hráčmi, majú abstraktné komponenty, kladú dôraz na stratégiu na úkor konfliktu medzi hráčmi a náhody. Spravidla hrajú všetci hráči dokonca.</p>
                </Modal>

            </div>
            
          )
    }
    
}

export default SearchGenre


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

const modalStyle = {
    content:{
        backgroundColor: 'lightyellow',
        color: '#807162',
        fontSize: '15px'
    }
}


const closeButton = {
    position: 'fixed',
    top: '62px',
    right: '60px',
    color: 'lightgrey',
}