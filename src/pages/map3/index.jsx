import './styles.css'

const estados = ['Goiás', 'São Paulo', 'Bahia', 'Acre']

export function Map3(){
    return(
        <div className='menu-map3'>
            { estados.map( 
                item => ( 
                    <span> { item } </span>
                )
            )}
        </div>
    )
}