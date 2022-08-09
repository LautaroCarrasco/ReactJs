import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import getProducts from '../../api/asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ()=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        getProducts
        .then((response)=>setProducts(response))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[])

    return(
            loading ? <h2>cargando productos....</h2>:
        <div>
            {
                <ItemList products={products}/>
            }
        </div>
    )
}

export default ItemListContainer