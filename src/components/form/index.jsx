import React, {useRef, useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import Lottie from 'react-lottie';
import Modal from 'react-modal';

import Sucess from '../../assets/lotties/success.json';


const Index = () => {
    // declarando as refs
    const form = useRef();
    const firstName = useRef(null);
    const email = useRef(null);
    const location = useRef(null);
    const number = useRef(null);
    const message = useRef(null)
    
    // declarando os states 
    const [sex, setSex] = useState("");
    const [play, setPlay] = useState(false);
    const [showModal, setShowModal] = useState(false);

    //função que onClick do button
    const handleClickOnButton =  (result) => {
       if (result === 200) {
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
            firstName.current.value = '';
            email.current.value = '';
            location.current.value = '';
            number.current.value = '';
            message.current.value = '';

       } else {
        setPlay(false);
        setShowModal(false);
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
        emailjs.sendForm('service_xbwruic', 'template_uwmg4um', form.current, 'nwHnlgnT9whd-MdeG' )
            .then( (result) => {
                handleClickOnButton(result.status);
                console.log(result.text);
                console.log(form);
            }, (error) => {
                console.log(error.text);
            } );
    };


    return (
        <div style={container}>

            <text style={titleForm}>Fale connosco Agora!</text>

            <form ref={form} onSubmit={sendEmail} style={formStyles} >

                <div style={divContainer}>
                    <input type="text" ref={firstName} name="firstName"  placeholder="Digite o seu nome" style={input}/>
                    <input type="text" ref={email} name="email"  placeholder='Digite o seu e-mail' style={input} />
                </div>

                <div style={divContainer}>
                    <input type="text" ref={location} name="location"  placeholder='Digite a sua localização' style={input} />
                    <input type="text" ref={number} name="number"  placeholder='Your number' style={input} />
                </div>

                <div style={divContainer}>
                    <textarea ref={message} name="message" id="message" style={textArea}></textarea>
                </div>

                    <div style={sexStyles}>
                        <label for="female" style={Sexlabel}>Female</label>
                        <input type="radio" id="female" value="Female" name="sex" onChange={handleChangeSex} />
                        <label for="male" style={Sexlabel}>Male</label>
                        <input type="radio" id="male" value="Male" name='sex' onChange={handleChangeSex} />         
                    </div>

                <button type='submit' style={enviar} onClick={ handleClickOnButton }> Enviar </button>
                
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
const container = {
    backgroundColor: '#ff282b',
    flex: '3',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
    height: '300px',
    marginTop: '30px',
    marginRight: '30PX',
    border: '1px solid #adafad',
    borderRadius: '5px'
}
const titleForm = {
    fontFamily: 'sans-serif',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#000',
    marginTop: '10px'
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
const label = {
    width: '45%',
    textAlign: 'center',
    color: '#fff'
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
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '10px',
    border: 'none',
    height: '30px',
    width: '95%',
    fontWeight: 'bold',
}
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