import './ItemCount.css'
import { useState } from 'react';

const ItemCount = ({stock})=>{
    const [counter, setCounter] = useState(1);

    const restCount = ()=>{
        if(counter > 1){
            setCounter(counter - 1);
        }
    }

    const addCount = ()=>{
        if(counter < stock ){
            setCounter(counter + 1);
        }
    }

    return(
        <div className='counterContainer'>
             <p>{counter}</p>
            <div className='buttonsContainer'>
                <button onClick={restCount}>-</button>
                <button onClick={addCount}>+</button>
            </div>
        </div>
    )
}

export default ItemCount;