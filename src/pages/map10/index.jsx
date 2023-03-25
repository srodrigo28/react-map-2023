import { Menu } from './menu'
import { Item } from './item'
import './index.css'
import { Rodape } from './rodape'

export function Map10(){
    return(
        <div className='map10'>
            <Menu />
            <div className="main">
                <Item />
                <Rodape />
            </div>
            
        </div>
    )
}