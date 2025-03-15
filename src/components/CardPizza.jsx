import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { pizzas } from '../utils/pizzas';

const CardPizza = (props) => {
return (
    <div className='col'>
            <Card style={{ width: '18rem' }} className='card h-100 text-center'>
        <Card.Img className='img' variant="top" src={props.img} />
        <Card.Body>
            <Card.Title className='titulo'>Pizza {props.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <Card.Text className='ingre'> 🍕 Ingredientes 🍕 </Card.Text>
            {props.ingredientes.map((ingrediente, index)=>(<ListGroup.Item className='ingred'>{ingrediente}</ListGroup.Item>) 
            )}
            <ListGroup.Item className='precio'>Precio: ${props.price.toLocaleString()}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Button variant="outline-dark" className="float-start">Ver Más 👀</Button>
            <Button variant="dark" className="float-end">Añadir 🛒</Button>
        </Card.Body>
    </Card>
    </div>

);
}

export default CardPizza ;