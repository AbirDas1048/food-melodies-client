import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../logo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top"
                    />{' '}
                    Food Melodies
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    <Nav>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/addService">Add Service</Nav.Link>
                        <Nav.Link href="/myReviews">My Reviews</Nav.Link>
                        <Nav.Link href="/login">LogIn</Nav.Link>
                        <Nav.Link href="/">LogOut</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;