import React, { useState } from 'react';
import { pizzaCart } from '../utils/pizzas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Carrito = () => {
    const [cart, setCart] = useState(pizzaCart);

    const actualizar = (id, delta) => {
        setCart(cart.map(item =>
            item.id === id? {...item, count: Math.max(1, item.count + delta)} : item
        ));
    }

    const eliminar = (id) => {
        setCart(cart.filter(item => item.id!== id));
    };

    const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);


return (
    <div >
        <h2>Detalles del pedido:</h2>
        <div className='DetalleCarrito'>
            {cart.map(item => (
                <Row key={item.id} className='itemPizza'>
                    <Col><img src={item.img} alt={item.name} width="50"/></Col>
                    <Col>{item.name}</Col>
                    <Col>${item.price.toLocaleString()}</Col>
                    <Col><button className="btn btn-outline-danger" onClick={() => actualizar(item.id, -1)}>-</button></Col>
                    <Col>{item.count}</Col>
                    <Col><button className="btn btn-outline-primary" onClick={() => actualizar(item.id, 1)}>+</button></Col>
                    <Col> <button className='btn btn-outline-dark' onClick={() => eliminar(item.id)}>Eliminar</button></Col>  
                </Row>
            ))}
        </div>    
        <h4>Total: ${total.toLocaleString()}</h4>
        <button className='btn btn-dark pagar'>Pagar</button>
    </div>
)    
};


export default Carrito;