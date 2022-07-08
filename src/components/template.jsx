import React from 'react';

import { BsFillEnvelopeFill, BsFillTelephoneInboundFill, BsFillGeoAltFill } from 'react-icons/bs';
import Lottie from 'react-lottie';
import Hello from '../assets/lotties/76787-hello.json'

const Template = () => {
    // Difinindo as opções do Lottie
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Hello
    }

    return (
        <>
          <div style={container}>

            <div styles={header}>

                <h1><Lottie options={defaultOptions} width={100} height={100} /></h1>

                <text style={text}>
                    Eu tenho o sono muito leve, e numa noite dessas notei que havia alguém andando 
                    sorrateiramente no quintal de casa. 
                    Levantei em silêncio e fiquei acompanhando os leves ruídos que vinham 
                    lá de fora, até ver uma silhueta passando pela janela do banheiro. 
                    Como minha casa era muito segura, com grades nas janelas e 
                    trancas internas nas portas, 
                    não fiquei muito preocupado, 
                    mas era claro que eu não ia deixar um ladrão ali, espiando tranqüilamente.
                </text>

            </div>

            <div>
                <p> <BsFillEnvelopeFill color='red' /> emaildabrincadeira@gmail.com</p>
                <p> <BsFillTelephoneInboundFill color='red' /> 933 333 333</p>
                <p> <BsFillGeoAltFill color='red' /> Angola, Luanda, Belas.</p>
            </div>

          </div>

        </>
    )
}

// styles of template
const container = {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '30px'
}
const header = {
    textAlign: '20px'
}
const text = {
    marginLeft: '10px'
}

export default Template;