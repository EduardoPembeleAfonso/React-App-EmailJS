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
                    <p><strong>Manas e Manos a promoção continua...</strong></p>
                    Batemos namorado mulherengo, ao domicílio com a tua raiva ou com a nossa raiva.
                    E se achares que a tua mulher te traí ou o teu homem te traí diganos que batemos o namorado da tua mulher 
                    ou a namorada da tua mulher. Confira os nosso pacotes de surra abaixo :
                    <ul>
                        <li>
                            <strong>Até Desmaiar</strong>
                        </li>
                        <li>
                            <strong>Até Ter Juizo</strong>
                        </li>
                        <li>
                            <strong>Até Se Mijar</strong>
                        </li>
                    </ul>
                    a nossa equipa é muito eficiente, não irão se arrepender, é mesmo surra de verdade.
                    Envianos uma mensagem agora! 
                </text>

            </div>

            <div>
                <p> <BsFillEnvelopeFill color='#019102' /> eduardopafonso45@gmail.com</p>
                <p> <BsFillTelephoneInboundFill color='#019102' /> (+244) 951 130 409</p>
                <p> <BsFillGeoAltFill color='#019102' /> Angola, Luanda, Belas.</p>
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
    marginLeft: '10px',
    fonFamily: 'Baskerville'
}

export default Template;