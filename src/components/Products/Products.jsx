import { MdAutoGraph } from "react-icons/md"
import './styles.css'
import { FaInstagram } from "react-icons/fa"
import { IoMdPersonAdd } from "react-icons/io"
import { PiShareNetworkThin } from "react-icons/pi"
import { IoImageOutline } from "react-icons/io5"
import { SlRocket } from "react-icons/sl"

const Products = () => {
    return (
        <div id="products">
            <div className="product-container background">
                <div className="product">
                    <MdAutoGraph className='product-icons' />
                    <h3>Planejamento estratégico</h3>
                    <p>Estratégias personalizadas para alcançar objetivos de negócios.</p>
                </div>
                <div className="product">
                    <FaInstagram className='product-icons' />
                    <h3>Gestão de Redes Sociais</h3>
                    <p>Maximizando o alcance e engajamento nas plataformas digitais.</p>
                </div>
                <div className="product">
                    <PiShareNetworkThin className='product-icons' />
                    <h3>Produção de sites, app e landing page.</h3>
                    <p>Somos especializados em sites e aplicativos responsivos de alta performance e desempenho, desenvolvido sob medida para solucionar o seu problema !</p>
                </div>
                <div className="product">
                    <IoMdPersonAdd className='product-icons' />
                    <h3>Posicionamento e presença de marca </h3>
                    <p>Destaque-se no mercado e conquiste a preferência do seu público-alvo.</p>
                </div>

                <div className="product">
                    <IoImageOutline className='product-icons' />
                    <h3>Produção de artes gráficas
                        e Produção audiovisual
                    </h3>
                    <p>Estratégias personalizadas para alcançar objetivos de negócios.</p>
                </div>
                <div className="product">
                    <SlRocket className='product-icons' />
                    <h3>Trafego pago: Facebook & Instagram ADS</h3>
                    <p>Estratégias personalizadas para alcançar objetivos de negócios.</p>
                </div>
            </div>
        </div>
    )
}

export default Products