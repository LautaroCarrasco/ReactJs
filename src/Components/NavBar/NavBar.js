import './NavBar.css';
/* Boostrap  */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {NavLink, Link} from 'react-router-dom'

import CartWidget from '../CartWidget/CartWidget';

const NavBar = ()=>{
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Compra PC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Link del home */}
            <NavLink className={"linkText"} to="/">Home</NavLink>
            <Nav.Link className={"linkText"} >Productos</Nav.Link>

            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link className={"linkTextCategory"} to='/brand/AMD'>AMD</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link className={"linkTextCategory"} to='/brand/intel'>intel</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <Link className={"linkTextCategory"} to='/brand/NVIDIA'>NVIDIA</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar producto"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="secondary">Buscar</Button>
            <CartWidget></CartWidget>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;