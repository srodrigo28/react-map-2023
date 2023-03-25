import './styles.css'

const estados = ['Goiás', 'São Paulo', 'Bahia', 'Acre']

export function Map2(){
    return(
        <div>
            { estados.map ( item => ( <span> {item} </span> ) )}
        </div>
    )
}