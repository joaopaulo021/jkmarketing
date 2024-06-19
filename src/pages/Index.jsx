import AboutUs from "../components/AboutUs/AboutUs"
import Business from "../components/Business/Business"
import Cards from "../components/Cards/Cards"
import FeedBacks from "../components/Feedbacks/FeedBacks"
import HeroSection from "../components/HeroSection/HeroSection"
import Products from "../components/Products/Products"
import logo from '../assets/logo-1.png'
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

const Index = () => {

    return (
        <div>
            <HeroSection />
            <AboutUs />
            <Cards />
            <Business />
            <Products />
            <FeedBacks />
            <h1>Eleve o nível da sua presença online com
                expertise profissional!</h1>
            <div className="btn btn-business">
                <a href="https://contate.me/jk-marketing"><button type='button'>SOLICITAR ORÇAMENTO</button></a>
            </div>
            <footer>
                <div className="logo-container">
                    <img src={logo} alt="" />
                    <p>JK MARKETING DIGITAL, MOLDANDO O FUTURO COM ESTRATÉGIAS!</p>

                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com/Jkmarketingdigitall?locale=pt_BR"><FaFacebook className='icons mg-right' /></a>
                    <a href="https://www.instagram.com/jk.mktdigitall/"><FaInstagram className='icons ' /></a>
                </div>

                <div className="infos">
                    <p>Email: jkmarketingdigital22@gmail.com</p>
                    <p>CNPJ: 50.294.681/0001-16 / São Carlos - SP</p>
                </div>
            </footer>
            <a href="https://contate.me/jk-marketing"><FaWhatsapp className='whats-btn' /></a>
            {/* <p>JK Marketing Digital</p> */}
        </div>
    )
}

export default Index