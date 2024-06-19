import './styles.css'
import profilePic from '../../assets/_MG_9576.jpg'
import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';


const AboutUs = () => {

    const projectBxRef = useRef(null);
    const projectBxRef_left = useRef(null);
    const projectBxRef_right = useRef(null);

    useEffect(() => {
        const sr = ScrollReveal({ reset: true });

        sr.reveal(projectBxRef.current, {
            distance: "50px",
            origin: "top",
            duration: 1000,
        });

        sr.reveal(projectBxRef_left.current, {
            distance: "50px",
            origin: "left",
            duration: 1000,
        });
        sr.reveal(projectBxRef_right.current, {
            distance: "50px",
            origin: "right",
            duration: 1000,
        });
    }, []);


    return (
        <section id="aboutus" className='background'>
            <div className="content">
                <img ref={projectBxRef_left} src={profilePic} alt="" />
                <div className="text">
                    <h3 ref={projectBxRef}> SOMOS A JK MARKETING DIGITAL</h3>
                    <p ref={projectBxRef_right} >Fundada na cidade de São Carlos, no estado de São Paulo, a JK é uma agência de Branding Estratégico, liderada por uma equipe de especialistas que une conhecimento e experiência.
                        <br />
                        <br />
                        Nossos sócios, Killara Mattos, publicitária, mentora e ex-jogadora da Seleção Brasileira de Voleibol, e Jônatas Campos, profissional de tecnologia da informação e ex-jogador profissional de Basquete, combinaram suas habilidades para criar uma agência única.
                        <br />
                        <br />
                        Nosso diferencial está no foco em Alta Performance de Pessoas e Marcas. Com diversos cases de sucesso, temos comprovado nossa capacidade de elevar marcas e indivíduos a novos patamares. Atendemos clientes no Brasil e na Europa, consolidando nossa presença internacional e adaptando-nos às necessidades de diversos mercados.
                        <br />
                        <br />
                        ELEVE O PATAMAR DE SEU NEGÓCIO!</p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs