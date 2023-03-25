import { Menu } from './menu'
import records from '../records.json'
import { Item } from './item'
import './index.css'

export function Map9(){
    return(
        <div className='map9'>
            <Menu />
            <div className="main">
                <Item />
            </div>
        </div>
    )
}