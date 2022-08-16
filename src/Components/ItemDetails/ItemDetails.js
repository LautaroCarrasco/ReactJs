import './ItemDetails.css'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount'


const ItemDetails = ({name, desc, img, price, brand, stock, id}) => {
    const addCartbtn = (quantity) =>{
        alert(`se agrego ${quantity} ${name}`)
    }

    return(
        <Card style={{ width: '25rem'}} className="cardContainer">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                <Card.Text>$ {price}</Card.Text>
                <ItemCount stock={stock} id={id} onAdd={addCartbtn}/>
            </Card.Body>
        </Card>
    )
}

export default ItemDetails;