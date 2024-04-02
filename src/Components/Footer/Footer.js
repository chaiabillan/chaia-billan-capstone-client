import './Footer.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Envelope } from 'bootstrap-icons-react';
import linkedin from '../../assets/images/linkedin-xxl.png'
import axios from 'axios';
import { useState } from 'react';
import logo from '../../assets/images/Designer.svg'

function Footer() {

    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/emails', {
                email_address: email,
            });

            console.log('Response:', response.data);

            setEmail('');
        } catch (error) {
            console.error('Error submitting email:', error);
        }
    }

    return (
        <footer className="footer">
            <section className='footer__top'>
                <div className='footer__top--left'>
                    <div className='logo'>
                        <p className='logo__title'>My Allergy <br className='logo__title--break'></br> Compass</p>
                        <img className='logo__image' src={logo} alt='logo'/>
                    </div>
                    <div className='contact'>
                        <p className='contact__title'>
                            Contact Us:
                        </p>
                        <div className='contact__icons'>
                            <a href='https://www.linkedin.com/in/chaiabillan' className='contact__icons--linkedin'>
                                <img  src={linkedin} alt='linkedin' className='contact__icons--linkedin--image'/>
                            </a>
                            <a href="mailto:chaia_billan@yahoo.com" className='contact__icons--email'>
                                < Envelope  className='contact__icons--email--image'/>
                            </a>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='email-form'>
                    <label className='email-form__label'>
                        Enter your email to be notified about new resources and updates!
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='email-form__input'
                    />
                    <button className='email-form__button'>Submit</button>
                </form>
            </section>
            <section className='footer__bottom'>
                <p className="copyright">&copy; 2024 My Allergy Compass. All rights reserved.</p>
            </section>
        </footer>
    )
}

export default Footer