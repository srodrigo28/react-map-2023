
import './rodape.css'

const dados = ["Seb Soluções", "Telefone: (62) 98592-1140", "E-mail: rodrigoexer@app100.com.br"]

export function Rodape(){
    return(
        <div className='menu'>
            {
                dados.map ( item => ( <p> {item} </p> )  )
            }
        </div>
    )
}