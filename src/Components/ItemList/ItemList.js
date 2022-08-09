import Item from "../Item/Item"
import React from 'react'

const itemList = ({products}) =>{
    return(
        <div className="productsContainer">
            {products.map(product=> <Item key={product.id} {...product}/>)}
        </div>
    )
}

export default itemList;