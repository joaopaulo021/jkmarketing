import './styles.css'
import videoLogo from '../../assets/JK logo video.mp4'
import logo from '../../assets/logo-1.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const HeroSection = () => {
    const [text, setText] = useState('');
    const fullText = "Bem-vindo a JK Marketing Digital !"
    const typingSpeed = 20;

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < fullText.length) {
                setText(fullText.substring(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, typingSpeed);
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="hero-section">
            <nav className="nav-bar-container">
                <img src={logo} alt="" />
                <a href="#aboutus">Quem somos</a>
                <a href="#products">Serviços</a>
                <a href="#feedbacks">Feedbacks</a>
                <div className="social-medias">
                    <a href="https://www.facebook.com/Jkmarketingdigitall?locale=pt_BR"><FaFacebook className='media-icon mg-right' /></a>
                    <a href="https://www.instagram.com/jk.mktdigitall/"><FaInstagram className='media-icon' /></a>
                </div>
            </nav>

            <video playsInline autoPlay muted loop src={videoLogo}></video>
            <div className="text-wrapper">
                <h3>{text}</h3>
                <p>onde a excelência em marketing se encontra com a ciência da persuasão. Se você é um empresário ou microempreendedor em busca de maximizar suas vendas,
                    expandir sua presença online , o mercado digital esta em alta e você está no lugar certo. Nossa equipe de especialistas está pronta para impulsionar o
                    sucesso do seu negócio com estratégias altamente eficazes</p>

                <div className="btn">
                    <a href="https://contate.me/jk-marketing"><button type='button'>SOLICITAR ORÇAMENTO</button></a>

                </div>
            </div>
        </section>
    )
}

export default HeroSection