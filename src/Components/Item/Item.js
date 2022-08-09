import './Item.css'
import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({name, price, img}) => {
    return (
    <div className="productContainer">
        <Card style={{ width: '18rem' }}>
            <Card.Img className='productImg' variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>$ {price} </Card.Text>
            </Card.Body>
            <Button variant="primary">ver detalles</Button>
        </Card>
    </div> 
    )}

export default Item;