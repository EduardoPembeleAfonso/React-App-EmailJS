import React, {useRef, useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import Lottie from 'react-lottie';
import Modal from 'react-modal';

import Sucess from '../../assets/lotties/success.json';
import '../../styles/styles.css';

const Index = () => {
    // declarando as refs
    const form = useRef();
    const name = useRef(null);
    const email = useRef(null);
    const location = useRef(null);
    const number = useRef(null);
    const message = useRef(null)
    
    // declarando os states 
    const [sex, setSex] = useState("");
    const [play, setPlay] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [publicKey, setPublicKey] = useState("");

    //função que onClick do button
    const handleClickOnButton =  (status) => {
        
        /**
         * Se o nome, email e mensagem estiverem vazios seta a publicKey como vazio
         * caso contrario seta a publicKey com o valor da minha public key do emailjs : 85pmWer838PkoW1B6
         */
        if (name.current.value == '' && email.current.value == '' && message.current.value  == '') {
            
            setPublicKey('');
        } else {

            setPublicKey('85pmWer838PkoW1B6');

            if (status === 200) {
                // setando o play e o showModal pra true
               setPlay(true);
                setShowModal(true);
    
                /**
                 * Depois de 4 segundo seta novamente o setShowModal (showModal) pra false
                 * pra fechar o modal
                 *   
                */
                 setTimeout( () => {
                     setShowModal(false);
                 }, 4000 );
    
                // limpando os valores dos input e da textArea
                name.current.value = '';
                email.current.value = '';
                location.current.value = '';
                number.current.value = '';
                message.current.value = '';
    
           } else {
            setPlay(false);
            setShowModal(false);
           }


        }

       

    }

    // Difinindo as opções do Lottie
    const defaultOptions = {
        loop: false,
        autoplay: play,
        animationData: Sucess
    }

    // função que pega o valor do radio button e seta ela no setSex(sex)
    const handleChangeSex = (e) => {
        const value = e.target.value;
        setSex(value);
    }

    // função que envia o email
    const sendEmail = (e) => {
        // impedindo que a página se actualiza
        e.preventDefault();

        // enviando o formualario
        emailjs.sendForm('service_4x18r0d', 'template_7xq18sc', form.current, publicKey )
            .then( (result) => {
                handleClickOnButton(result.status);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            } );
    };


    return (
        <div className='Container'>

            <text className='titleForm'>Fale connosco Agora!</text>

            <form ref={form} onSubmit={sendEmail} className='formStyles' >

                <div className='divContainer'>
                    <input type="text" ref={name} name="firstName"  placeholder="  Digite o seu nome" className='input' />
                    <input type="text" ref={email} name="email"  placeholder='  Digite o seu e-mail' className='input' />
                </div>

                <div className='divContainer'>
                    <input type="text" ref={location} name="location"  placeholder='  Digite a sua localização' className='input' />
                    <input type="text" ref={number} name="number"  placeholder='  Digite o seu número' className='input' />
                </div>

                <div className='divContainer'>
                    <textarea ref={message} name="message" placeholder="  Digite a sua mensagem" className='textArea'></textarea>
                </div>

                    <div className='sexStyles'>
                        <label for="female" className='SexLabel'>Mulher</label>
                        <input type="radio" id="female" value="Female" name="sex" onChange={handleChangeSex} />
                        <label for="male" className='SexLabel'>Homem</label>
                        <input type="radio" id="male" value="Male" name='sex' onChange={handleChangeSex} />         
                    </div>

                <button type='submit' className='enviar' onClick={ handleClickOnButton }> Enviar </button>
                
                <Modal
                    isOpen={showModal}
                    style={styleModal}
                    shouldFocusAfterRender= {false}
                >
                    <Lottie options={defaultOptions} width={350} height={350} />

                </Modal>
                
            </form>

        </div>
        
    )
}


/**
 * styles of form
 */
/*
const container = {
    backgroundColor: '#f0ecec',
    flex: '3',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
    height: '350px',
    marginTop: '30px',
    marginRight: '30PX',
    border: 'none',
    borderRadius: '10px'
}
const titleForm = {
    fontFamily: 'Baskerville',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#000',
    marginTop: '20px'
}
const formStyles = {
    marginBottom: '15px',
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}
const divContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: '10px'
    
}
const input = {
    borderRadius: '4px',
    border: '1px solid #fff',
    height: '20px',
    width: '45%',
}
const textArea = {
    borderRadius: '4px',
    border: '1px solid #fff',
    width: '95%'
}
const sexStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginBottom: '25px'
}
const Sexlabel = {
    color: '#000',
}
const enviar = {
    backgroundColor: '#019102',
    color: '#fff',
    borderRadius: '10px',
    border: 'none',
    height: '30px',
    width: '95%',
    fontWeight: 'bold',
    fontFamily: 'Arial'
}*/
const styleModal = {
    content: {
        width: '350px',
        height: '350px',
        backgroundColor: '#fff',
        border: 'none',
        borderRadius: '10px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        position: 'fixed',
        transition: 'all 1.5s ease-out'
    }
}


export default Index;