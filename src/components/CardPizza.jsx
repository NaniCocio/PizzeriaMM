import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { usePizzaContext } from '../context/PizzaContext';

const CardPizza = ({ pizza }) => {
    const { agregarAlCarrito } = usePizzaContext();

    return (
        <Card className="m-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
            <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>{pizza.desc}</Card.Text>
                <Card.Text>
                    <strong>${pizza.price.toLocaleString()}</strong>
                </Card.Text>
                <Button variant="outline-dark" className="float-start">Ver Más 👀</Button>
                <Button variant="dark" onClick={() => agregarAlCarrito(pizza)}>
                    Añadir 🛒
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CardPizza;



