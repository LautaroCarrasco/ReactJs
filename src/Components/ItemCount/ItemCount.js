import './ItemCount.css'
import { useState } from 'react';
import ButtonAddCart from '../ButtonAddCart/ButtonAddCart' 

const ItemCount = ({stock, id ,onAdd})=>{
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
                <button onClick={()=> ButtonAddCart(id, counter)}>Agregar al carrito 2</button>
            </div>
        </div>
    )
}

export default ItemCount;