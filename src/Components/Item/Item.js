import './Item.css'
import React from "react"
import Button from 'react-bootstrap/Button';
import { Link }  from 'react-router-dom';
 
import Card from 'react-bootstrap/Card';


const Item = ({id ,name, price, img}) => {

    return (
    <div className="productContainer">
        <Card style={{ width: '18rem' }}>
            <Card.Img className='productImg' variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>$ {price} </Card.Text>
            </Card.Body>
            <Link to={`/productdetails/${id}`}>
                <Button className='btn btn-primray'>Ver detalles</Button>
            </Link>
        </Card>
    </div> 
    )}
    
    export default Item;