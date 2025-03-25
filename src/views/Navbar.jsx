import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Navegacion =() => {
    const valor = 25000;
    const token = false;

return (
    <div>
        <Navbar collapseOnSelect className='navbar' expand="lg" bg="dark" variant="dark" fixed="top">
        {token ? (
            <Container style={{maxWidth: '1200px'}} className='contenido-navbar'>
                <Navbar.Brand href="#home" >Pizzería Mamma Mía</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" expand='lg' />
                <Navbar.Collapse id="responsive-navbar-nav" expand='lg' bg="dark" variant="dark" >
                <Nav className="me-auto">
                    <Button variant="outline-light" className="link" as={Link} to="/home">🍕 Home</Button>
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
                        <Button variant="outline-light" className="link" as={Link} to="/home">🍕 Home</Button>
                        <Button variant="outline-light" className="link" as={Link} to="/login">🔐 Login</Button>
                        <Button variant="outline-light" className="link" as={Link} to="/registro">🔐 Register</Button>
                    </Nav>
                    <Button variant="outline-info" className="float-end" as={Link} to="/cart">🛒 Total: $ {valor.toLocaleString()}</Button>
                </Navbar.Collapse>
            </Container>
            )}
            
        </Navbar>
    </div>
    )
}

export default Navegacion;