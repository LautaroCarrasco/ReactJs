import './ItemCount.css'
import { useState } from 'react';

const ItemCount = ({stock, initial})=>{
    const [counter, setCounter] = useState(initial);

    const restCount = ()=>{
        if(counter > initial){
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