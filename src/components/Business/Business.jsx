import { FaCheck } from 'react-icons/fa'
import './styles.css'
import pic1 from '../../assets/_MG_9601.jpg'
import pic2 from '../../assets/_MG_9614.jpg'
import { useEffect, useRef, useState } from 'react'
import ScrollReveal from 'scrollreveal';

const Business = () => {
    const [isVisible, setIsVisible] = useState(true);
    const fullText = "Prepare-se para transformar desafios em oportunidades. Vamos juntos levar seu negócio ao próximo nível ?"
    const typingSpeed = 600;

    const projectBxRef = useRef(null);
    const projectBxRef_1 = useRef(null);
    const projectBxRef_2 = useRef(null);
    const projectBxRef_3 = useRef(null);

    useEffect(() => {
        const sr = ScrollReveal({ reset: true });

        sr.reveal(projectBxRef.current, {
            distance: "40px",
            origin: "right",
            duration: 1000,
        });

        sr.reveal(projectBxRef_1.current, {
            distance: "50px",
            origin: "top",
            duration: 1000,
        });

        sr.reveal(projectBxRef_2.current, {
            distance: "50px",
            origin: "left",
            duration: 1000,
        });
        sr.reveal(projectBxRef_3.current, {
            distance: "50px",
            origin: "top",
            duration: 1000,
        });

        const intervalId = setInterval(() => {
            setIsVisible(prev => !prev);
        }, typingSpeed);

        return () => clearInterval(intervalId);

    }, []);

    return (
        <section className="business">
            <h3>Como podemos ajudar a impulsionar o seu negócio?</h3>
            <div className="texts">
                <img ref={projectBxRef_2} src={pic1} alt="" />
                <div ref={projectBxRef_3} className="texts-flex">
                    <div className='text-item'>
                        <div className="btn-container">
                            <FaCheck className='check-btn' />
                        </div>
                        <p> Descubra o potencial oculto do seu negócio com nossa Consultoria Estratégica.</p>
                    </div>
                    <div className='text-item'>
                        <div className="btn-container">
                            <FaCheck className='check-btn' />
                        </div>
                        <p> Mergulhamos nas profundezas do seu modelo de negócio para desvendar oportunidades de crescimento cruciais.</p>
                    </div>
                    <div className='text-item'>
                        <div className="btn-container">
                            <FaCheck className='check-btn' />
                        </div>
                        <p>Estratégias baseadas em análises de mercado meticulosas e tendências atuais da indústria, garantindo que você esteja sempre à frente da concorrência.</p>
                    </div>
                    <div className='text-item'>
                        <div className="btn-container">
                            <FaCheck className='check-btn' />
                        </div>
                        <p>Amplie sua presença online e conquiste novos clientes com nossas soluções personalizadas de Marketing e Publicidade Digital.</p>
                    </div>
                </div>
            </div>
            <div className="texts">
                <div ref={projectBxRef_1} className="texts-flex">
                    <div className='text-item'>
                        <div className="btn-container">
                            <FaCheck className='check-btn' />
                        </div>
                        <p>Acelere sua jornada rumo à inovação com nossa Transformação Digital.</p>

                    </div>
                    <div className='text-item'>
                        <div className="btn-container">
                            <FaCheck className='check-btn' />
                        </div>
                        <p>Através de SEO avançado, marketing de conteúdo envolvente, campanhas impactantes em mídias sociais e publicidade direcionada, transformamos sua marca em um ímã para clientes potenciais.</p>
                    </div>
                    <div className='text-item'>
                        <div className="btn-container">
                            <FaCheck className='check-btn' />
                        </div>
                        <p>Implementamos tecnologias de ponta que automatizam seus processos, otimizam a comunicação com clientes e elevam sua eficiência operacional.</p>
                    </div>
                    <div className='text-item'>
                        <div className="btn-container">
                            <FaCheck className='check-btn' />
                        </div>
                        <p>Esteja você procurando melhorar operações internas ou a experiência do cliente, nossa abordagem é a chave para o futuro digital do seu negócio.</p>
                    </div>
                </div>
                <img ref={projectBxRef} src={pic2} alt="" />
            </div>
            <h3 style={{ opacity: isVisible ? 1 : 0.3 }}>{fullText}</h3>

            <div className="btn btn-business">
                <a href="https://contate.me/jk-marketing"><button type='button'>SOLICITAR ORÇAMENTO</button></a>
            </div>
        </section>
    )
}

export default Business