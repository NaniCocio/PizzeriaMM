import React, {useState} from 'react'
import {pizzaCart} from '../utils/pizzas';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cart() {
    const [carrito, setCarrito] = useState(pizzaCart) // Inicio con el carrito vacio

    function agregar (evento, pizzas){
        setCarrito([...carrito, pizzas])

    }

    function eliminar (e, pizzas) {
        setCarrito([...carrito.filter(p=>p.id !== pizzas.id)])
    }


    const mostrarPizza = listaPizza.map ((pizzaCart) => (

        <Container>
            <Row key={pizzaCart.id}>
                <Col><img className='imgPizza' src={pizzaCart.img}/></Col>
                <Col>{pizzaCart.name}</Col>
                <Col>${pizzaCart.price.toLocaleString()}</Col>
                <Col><button className=' btn btn-outline-primary' onClick={quitar}>-</button></Col>
                <Col><button className=' btn btn-outline-danger' onClick={agregar}>+</button></Col>
            </Row>
        </Container>       
    ));



    return (
        <div>
            <h2>Detalles del pedido</h2>
            <ul>{mostrarPizza}</ul>

            <form action=""></form>



            <h3>Total: </h3>
        </div>
    )
}

export default Cart