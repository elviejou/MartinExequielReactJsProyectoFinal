import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class NavBar extends Component {
  render() {
    return (
      <div>
      <Navbar sticky="top" bg="light" expand="lg">
      <Container fluid>
      {/* LOGO EN MENU */}
      <Navbar.Brand href="#">
            <img
              src="/src/assets/img/logo.png"
              width="250"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">NOSOTROS</Nav.Link>
            <Nav.Link href="#action2">CONTACTO</Nav.Link>
            <Nav.Link href="#action5">UBICACIÓN</Nav.Link>
            <NavDropdown title="MI CUENTA" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">INGRESAS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">REGISTRARSE</NavDropdown.Item>
            </NavDropdown>
          </Nav>
           <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>
           </Form>
            <a href="#" target="_blank">
            <img
              src="/src/assets/img/User.svg"
              alt="Usuario"
            />
            </a>
            <a href="#" target="_blank">
            <img
              src="/src/assets/img/Carrito.svg"
              alt="Carrito"
            />
            </a>
         
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
    )
  }
}

