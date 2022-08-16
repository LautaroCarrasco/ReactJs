import { useParams } from 'react-router-dom';
import { getProductById }  from '../../api/asyncMock';
import { useEffect, useState } from 'react';

import ItemDetails from '../ItemDetails/ItemDetails'

const ItemDetailsContainer = ()=>{
    const [product, setProduct] = useState([])
    const {id} = useParams();

    useEffect(() => {
        getProductById(parseInt(id))
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])
    return(
        <div className='itemDetailsContainer'>
            <ItemDetails {...product}/>
        </div>
    )
}

export default ItemDetailsContainer;