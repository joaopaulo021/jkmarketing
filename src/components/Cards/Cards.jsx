import { MdAutoGraph } from 'react-icons/md'
import './styles.css'
import { FaInstagram } from 'react-icons/fa'
import { IoMdPersonAdd } from 'react-icons/io'
import { PiShareNetworkThin } from 'react-icons/pi'
import ScrollReveal from 'scrollreveal';
import { useEffect, useRef } from 'react'


const Cards = () => {

    const projectBxRef = useRef(null);
    const projectBxRef_1 = useRef(null);
    const projectBxRef_2 = useRef(null);
    const projectBxRef_3 = useRef(null);

    useEffect(() => {
        const sr = ScrollReveal({ reset: true });

        sr.reveal(projectBxRef.current, {
            distance: "50px",
            origin: "top",
            duration: 1000,
        });

        sr.reveal(projectBxRef_1.current, {
            distance: "50px",
            origin: "top",
            duration: 1000,
        });

        sr.reveal(projectBxRef_2.current, {
            distance: "50px",
            origin: "top",
            duration: 1000,
        });
        sr.reveal(projectBxRef_3.current, {
            distance: "50px",
            origin: "top",
            duration: 1000,
        });
    }, []);

    return (
        <>
            <h2>Eleve o patamar de seu negócio!</h2>
            <section className="cards-container background">
                <div ref={projectBxRef} className="card">
                    <MdAutoGraph className='icons' />
                    <h3>Planejamento estratégico</h3>
                    <p>Estratégias personalizadas para alcançar objetivos de negócios.</p>
                </div>
                <div ref={projectBxRef_1} className="card">
                    <FaInstagram className='icons' />
                    <h3>Gestão de Redes Sociais</h3>
                    <p>Maximizando o alcance e engajamento nas plataformas digitais.</p>
                </div>
                <div ref={projectBxRef_2} className="card">
                    <IoMdPersonAdd className='icons' />
                    <h3>Posicionamento e presença de marca </h3>
                    <p>Destaque-se no mercado e conquiste a preferência do seu público-alvo.</p>
                </div>
                <div ref={projectBxRef_3} className="card">
                    <PiShareNetworkThin className='icons' />
                    <h3>Produção de site e landing page.</h3>
                    <p>Crie uma presença online envolvente e eficaz para sua marca.</p>
                </div>
            </section>

        </>
    )
}

export default Cards