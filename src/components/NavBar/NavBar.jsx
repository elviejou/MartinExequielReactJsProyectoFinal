import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cartwidget from '../CartWidget/CartWidjet';
import UserWidget from '../UserWidget/UserWidget';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../Context/CartContext"


const NavBar = () => {
  const { cantidadTotal } = useCartContext()
    
    return (
      
      <div>
      <Navbar sticky="top" bg="light" expand="lg">
      <Container fluid>
      {/* LOGO EN MENU */}
      <Link to='/'>
            <img
              src="/src/assets/img/logo.png"
              width="250"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='linksMenu'>
            <Link to='/'>Todos</Link>
            <Link to='/categoria/Agendas'>Agendas</Link>
            <Link to='/categoria/Cuadernos'>Cuadernos</Link>
            <Link to='/categoria/Marcadores'>Marcadores</Link>
            <Link to='/categoria/Varios'>Varios</Link>
            <Link to='/categoria/Cuadernos'>Cuadernos</Link>
            </div>
          </Nav>

           <Nav>
                    <div className='cantidadCarrito'>
                    { cantidadTotal() != 0 && cantidadTotal()}
                    </div>
                    <Link to="/cart">
                    
                        <Cartwidget /> 
                    </Link>
                    
                    
                    

            </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
    )
  }


export default NavBar

