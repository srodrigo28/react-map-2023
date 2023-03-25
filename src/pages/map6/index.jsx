import records from '../records.json'

export function Map6(){
    return(
        <div className=''>
            {
                records.map( 
                    item => (
                        <div className='' key={item.id}> 
                            { item.title }
                        </div>
                    )
                )
            }
        </div>
    )
}