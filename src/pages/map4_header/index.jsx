import icone1 from './../../assets/icones/cliente.png'
import icone2 from './../../assets/icones/email.png'
import icone3 from './../../assets/icones/evento.png'
import icone4 from './../../assets/icones/loja.png'
import icone5 from './../../assets/icones/negocio.png'
import icone6 from './../../assets/icones/seguranca.png'
import './styles.css'

export function Map4_Header(){
    return(
        <div className='menu'>
            <img src={icone1} alt="icone" />
            <img src={icone2} alt="icone" />
            <img src={icone3} alt="icone" />
            <img src={icone4} alt="icone" />
            <img src={icone5} alt="icone" />
            <img src={icone6} alt="icone" />
        </div>
    )
}