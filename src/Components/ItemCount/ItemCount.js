import './ItemCount.css'
import { useState } from 'react';

const ItemCount = ()=>{
    const [counter, setCounter] = useState(0);

    const addCount = ()=>{
        setCounter(counter + 1);
        console.log(counter)
    }

    return(
        <div className='counterContainer'>
             <p>
                 {counter}
            </p>
            <button onClick={addCount}></button>
        </div>
    )
}

export default ItemCount;