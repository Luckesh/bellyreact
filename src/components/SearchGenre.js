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
          chosenGenres: [0, 0, 0, 0, 0, 0, 0],
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
        let a = this.state.chosenGenres.slice(); 
        a[id]=1-a[id];
        this.setState({chosenGenres: a});
    }

    render(){
        const { chosenGenres } = this.state;
        return (
            <div className='searchGenre'>
                <div>
                     <h2>Aký žáner <span onClick={this.handleOpenModal} style={help}>?</span></h2>  
                       
                </div>  
                <div style={pole}>
                    <Button onClick={() => this.changeStatus(0)}  toggle={chosenGenres[0]} text='Social Deduction'/> 
                    <Button onClick={() => this.changeStatus(1)}toggle={chosenGenres[1]} text='Eurogames'/>
                    <Button onClick={() => this.changeStatus(2)}toggle={chosenGenres[2]} text='Postrehové'/>
                    <Button onClick={() => this.changeStatus(3)}toggle={chosenGenres[3]} text='Rodinné'/>
                    <Button onClick={() => this.changeStatus(4)}toggle={chosenGenres[4]} text='Vojnové'/>
                    <Button onClick={() => this.changeStatus(5)}toggle={chosenGenres[5]} text='Párty hry'/>
                    <Button onClick={() => this.changeStatus(6)}toggle={chosenGenres[6]} text='Kooperatívne'/>
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