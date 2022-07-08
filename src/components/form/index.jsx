import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const Index = () => {
    const form = useRef();
    const firstName = useRef(null);
    const email = useRef(null);
    const lastName = useRef(null);
    const number = useRef(null);

    const [sex, setSex] = useState("");

    const handleChangeSex = (e) => {
        const value = e.target.value;
        setSex(value);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xbwruic', 'template_uwmg4um', form.current, 'nwHnlgnT9whd-MdeG' )
            .then( (result) => {
                console.log(result.text);
                console.log(form);
            }, (error) => {
                console.log(error.text);
            } );
    };


    return (
        <div style={container}>
            <text style={titleForm}>Register on our website now</text>
            <form ref={form} onSubmit={sendEmail} style={formStyles} >
                <div style={nameEmail}>
                    <input type="text" name="firstName"  placeholder="First name" style={input}/>
                    <input type="text" name="email"  placeholder='Your e-mail' style={input} />
                </div>
                <div style={nameEmail}>
                    <input type="text" name="lastName"  placeholder='Last name' style={input} />
                    <input type="text" name="number"  placeholder='Your number' style={input} />
                </div>
                <div>
                    <textarea name="message" id="message"></textarea>
                </div>
                    <div style={sexStyles}>
                        <label for="female" style={Sexlabel}>Female</label>
                        <input type="radio" id="female" value="Female" name="sex" onChange={handleChangeSex} />
                        <label for="male" style={Sexlabel}>Male</label>
                        <input type="radio" id="male" value="Male" name='sex' onChange={handleChangeSex} />         
                    </div>
                <button type='submit' style={register}>Register</button>
            </form>
        </div>
    )
}


/**
 * styles of form
 */
const container = {
    backgroundColor: '#0573f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '200px',
    marginTop: '30px',
    borderTopLeftRadius: '30px',
    borderBottomLeftRadius: '30px'
}
const titleForm = {
    fontFamily: 'sans-serif',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff'
}
const formStyles = {
    marginBottom: '15px',
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}
const nameEmail = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: '10px'
    
}
const input = {
    borderRadius: '2px',
    border: '1px solid #f9fafa',
    height: '20px',
    width: '45%',
}
const image = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
}
const label = {
    width: '45%',
    textAlign: 'center',
    color: '#fff'
}
const sexStyles = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    textAlign: 'center'
}
const Sexlabel = {
    color: '#fff',
}
const register = {
    backgroundColor: '#fff',
    color: '#0573f5',
    borderRadius: '40px',
    border: 'none',
    height: '30px',
    width: '80px',
    fontWeight: 'bold'
}


export default Index;