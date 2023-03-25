import records from '../records.json'
import './item.css'

export function Item(){
    return(
        <div className='item'>
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
    )
}