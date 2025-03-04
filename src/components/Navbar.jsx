import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const Navegacion =() => {
    const valor = 25000;
    const total = valor.toLocaleString()
    const token = false;

return (
    <>
        <Navbar collapseOnSelect className='navbar' expand="lg" bg='dark' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand href="#home">Pizzería Mamma Mía</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Button variant="outline-light" className="float-start link">🍕 Home</Button>
                    <Button variant="outline-light" className="float-start link">🔐 Login</Button>
                    <Button variant="outline-light" className="float-start link">🔐 Register</Button>
                    <Button variant="outline-light" className="float-start link">🔓 Profile</Button>
                    <Button variant="outline-light" className="float-start link">🔒 Logout</Button>
                </Nav>
                    <Button variant="outline-info" className="float-end">🛒 Total: $ {total}</Button>
                <Nav>
                    <Nav.Link href="#d"> </Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    
  )
}

export default Navegacion;