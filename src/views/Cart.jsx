import React from 'react';
import { usePizzaContext } from '../context/PizzaContext';
import { useUser } from '../context/UserContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const Carrito = () => {
    const { cart, actualizar, eliminar } = usePizzaContext();
    const { token } = useUser()
    
    // Calcular el total del carrito
    const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

    return (
        <div className='carrito-container'>
            <h2 className='DetalleCarrito'>Carrito de Compras</h2>
            {cart.map((item) => (
                <Row key={item.id} className="align-items-center itemPizza">
                    <Col xs={2}>
                        <Image src={item.img} alt={item.name} fluid rounded />
                    </Col>
                    <Col xs={3}>{item.name}</Col>
                    <Col xs={2}>${item.price * item.count}</Col>
                    <Col xs={3} className="d-flex align-items-center">
                        <Button variant="outline-danger" onClick={() => actualizar(item.id, -1)}>-</Button>
                        <span className="mx-2">{item.count}</span>
                        <Button variant="outline-primary" onClick={() => actualizar(item.id, 1)}>+</Button>
                    </Col>
                    <Col xs={1}>
                        <Button variant="dark" onClick={() => eliminar(item.id)}>🗑</Button>
                    </Col>
                </Row>
            ))}
            
            <h3>Total: ${total.toLocaleString()}</h3>
            <Button variant="dark" disabled={!token} >Pagar</Button>
            {!token && <p style={{color: "red", marginTop: "10px"}}>Debes iniciar sesión para pagar.</p>}

            
            
            
        </div>
    );
};

export default Carrito;
