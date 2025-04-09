import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { usePizzaContext } from '../context/PizzaContext';
import { Link } from'react-router-dom';

const CardPizza = ({ pizza }) => {
    const { agregarAlCarrito } = usePizzaContext();

    return (
        <Card className="m-2 card-pizza" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
            <Card.Body>
                <Card.Title className='titulo-pizza'>{pizza.name}</Card.Title>
                <Card.Text>
                    🍕 {pizza.ingredients} 🍕 
                </Card.Text>
                <Card.Text>
                    <strong>${pizza.price.toLocaleString()}</strong>
                </Card.Text>
                <Button link variant="outline-dark" className="float-start link boton-card" as={Link} to={`/pizza/${pizza.id}`}>Ver Más 👀</Button>
                <Button variant="dark" className="float-start link boton-card" onClick={() => agregarAlCarrito(pizza)}>
                    Añadir 🛒
                    </Button>
                
            </Card.Body>
        </Card>
    );
};

export default CardPizza;



