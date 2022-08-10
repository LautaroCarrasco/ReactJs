import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import './ItemListContainer.css';
import { getProducts, getProductByBrand } from '../../api/asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ()=>{
    const [products, setProducts] = useState([])
    const { brand } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        
        if(!brand){
            getProducts()
            .then(products =>{setProducts(products)})
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }
        else{
            getProductByBrand(brand)
            .then(products =>{setProducts(products)})
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }

    }, [brand])

    return(
        loading ? <h2>cargando productos....</h2>:
        <div>
            <div>
                <h1>Productos</h1>
                <h2>{brand}</h2>
            </div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer