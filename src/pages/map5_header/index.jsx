import icone1 from './../../assets/icones/cliente.png'
import icone2 from './../../assets/icones/email.png'
import icone3 from './../../assets/icones/evento.png'
import icone4 from './../../assets/icones/loja.png'
import icone5 from './../../assets/icones/negocio.png'
import icone6 from './../../assets/icones/seguranca.png'
import './styles.css'

const icones = [icone1, icone2, icone3, icone4, icone5, icone6]

export function Map5_Header(){
    return(
        <div className='menu'>
            {
                icones.map (
                    item => ( <img src={item} alt="icone" /> )
                )
            }
        </div>
    )
}