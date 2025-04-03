import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { usePizzaContext } from '../context/PizzaContext';


const Navegacion =() => {
    const token = false;
    const { cart } = usePizzaContext();
    
    // Calcular el total del carrito
    const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);


return (
    <div>
        <Navbar collapseOnSelect className='navbar' expand="lg" bg="dark" variant="dark" fixed="top">
        {token ? (
            <Container style={{maxWidth: '1200px'}} className='contenido-navbar'>
                <Navbar.Brand href="#home" >Pizzería Mamma Mía</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" expand='lg' />
                <Navbar.Collapse id="responsive-navbar-nav" expand='lg' bg="dark" variant="dark" >
                <Nav className="me-auto">
                    <Button variant="outline-light" className="link" as={Link} to="/">🍕 Home</Button>
                    <Button variant="outline-light" className="link" as={Link} to="/profile">🔓 Profile</Button>
                    <Button variant="outline-light" className="link">🔒 Logout</Button>
                </Nav>
                <Button variant="outline-info" className="float-end">🛒 Total: $ {valor.toLocaleString()}</Button>
                </Navbar.Collapse>
            </Container>
            ) : (
            <Container>
                <Navbar.Brand href="#home">Pizzería Mamma Mía</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" expand='lg' />
                <Navbar.Collapse id="basic-navbar-nav" expand='lg'>
                    <Nav className="me-auto">
                        <Button variant="outline-light" className="link" as={Link} to="/">🍕 Home</Button>
                        <Button variant="outline-light" className="link" as={Link} to="/login">🔐 Login</Button>
                        <Button variant="outline-light" className="link" as={Link} to="/registro">🔐 Register</Button>
                    </Nav>
                    <Button variant="outline-info" className="float-end" as={Link} to="/cart">🛒 Total: $ {total.toLocaleString()}</Button>
                </Navbar.Collapse>
            </Container>
            )}
            
        </Navbar>
    </div>
    )
}

export default Navegacion;