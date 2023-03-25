import records from '../records.json'
import './styles.css'

export function Map8(){
    return(
        <div className='map7'>
            <h1>Map8</h1>
            <h3>Trabalhando com Json e Map</h3>
            <div>
                {
                    records.map( 
                        item => ( 
                            <tr key={item.id} >
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.content}</td>
                            </tr>
                        )
                    )
                }
            </div>
        </div>
    )
}