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
                    <p ref={projectBxRef_right} >A JK Marketing Digital, fundada em novembro de 2022, é uma agência de Branding Estratégico liderada por uma equipe de especialistas. Seus sócios proprietários, Killara Mattos, publicitária, mentora, Ex-jogadora da Seleção Brasileira de Voleibol e Jônatas Campos, profissional de tecnologia e informação e Ex-jogador profissional de Basquete, uniram seus conhecimentos para criar uma agência única.
                        <br />
                        <br />
                        O diferencial da JK Marketing Digital reside no seu foco em Alta Performance de Pessoas e Marcas. Com mais de 20 cases de sucesso em seu portfólio, a agência tem demonstrado consistentemente sua capacidade de elevar marcas e indivíduos a novos patamares.
                        <br />
                        <br />
                        Além disso, a JK Marketing Digital atende clientes não apenas no Brasil, mas também na Europa, consolidando sua presença internacional e capacidade de atender às necessidades de uma ampla gama de mercados.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs