import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
import logo from '../assets/brand.png';

function NavBar(props) {
  const { location } = props;

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="nav" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={logo} className='brand' alt="Logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="bar">
              <Nav.Link as={Link} to="/" className={`link-nav ${location.pathname === '/' ? 'nav-aktif' : ''}`}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className={`link-nav ${location.pathname === '/about' ? 'nav-aktif' : ''}`}>About</Nav.Link>
              <Nav.Link as={Link} to="/contact" className={`link-nav ${location.pathname === '/contact' ? 'nav-aktif' : ''}`}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default withRouter(NavBar);
