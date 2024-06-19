import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'
import video3 from '../../assets/video3.mp4'
import video4 from '../../assets/video4.mp4'

import logo1 from '../../assets/logos/logo1.jpg'
import logo2 from '../../assets/logos/logo2.jpg'
import logo3 from '../../assets/logos/logo3.jpg'
import logo4 from '../../assets/logos/logo4.jpg'
import logo5 from '../../assets/logos/logo5.jpg'
import logo6 from '../../assets/logos/logo6.jpg'
import logo7 from '../../assets/logos/logo7.jpg'
import logo8 from '../../assets/logos/logo8.jpg'
import logo9 from '../../assets/logos/logo9.jpg'
import logo10 from '../../assets/logos/logo10.jpg'
import logo11 from '../../assets/logos/logo11.jpg'

import './styles.css'

const FeedBacks = () => {
    return (
        <div id="feedbacks" className="video-container background">
            <h1>CONFIRA O DEPOIMENTO DE NOSSOS CLIENTES !</h1>
            <div className='video-wrapper'>
                <div className="video">
                    <video controls={true} src={video1}></video>
                    <p>Maria Joice - Contadora</p>
                </div>
                <div className="video">
                    <video controls={true} src={video2}></video>
                    <p>Patty Pessoa - Digital influencer</p>
                </div>
                <div className="video">
                    <video controls={true} src={video3}></video>
                    <p>Daniana - Doutora em educação</p>
                </div>
                <div className="video">
                    <video controls={true} src={video4}></video>
                    <p>Valentina - Kia ora healing</p>
                </div>
            </div>

            <section className="logos">
                <h1 style={{ color: '#ff8c00', fontSize: '2rem' }}>ALGUNS DE NOSSOS CLIENTES</h1>
                <div className="logos-container">
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />
                    <img src={logo7} alt="" />
                    <img src={logo8} alt="" />
                    <img src={logo9} alt="" />
                    <img src={logo10} alt="" />
                    <img src={logo11} alt="" />

                </div>
            </section>
        </div>
    )
}

export default FeedBacks