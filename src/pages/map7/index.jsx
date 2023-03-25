import records from '../records.json'
import './styles.css'

export function Map7(){
    return(
        <div className='map7'>
            <h1>Map7</h1>
            {
                records.map( 
                    item => (
                        <div className='title' key={item.id}> 
                            { item.title }
                        </div>
                    )
                )
            }
        </div>
    )
}