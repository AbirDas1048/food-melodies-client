import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../logo.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className='bg-dark bg-opacity-75 bg-gradient'>
            <Container>
                <Navbar.Brand href="/">
                    <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top"
                    />{' '}
                    Food Melodies
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    <Nav>
                        <NavLink className="nav-link {({ isActive }) => isActive ? 'active' : undefined}" to="/home">Home</NavLink>
                        <NavLink className="nav-link {({ isActive }) => isActive ? 'active' : undefined}" to="/services">Services</NavLink>
                        <NavLink className="nav-link {({ isActive }) => isActive ? 'active' : undefined}" to="/addService">Add Service</NavLink>
                        <NavLink className="nav-link {({ isActive }) => isActive ? 'active' : undefined}" to="/myReviews">My Reviews</NavLink>
                        <NavLink className="nav-link {({ isActive }) => isActive ? 'active' : undefined}" to="/login">LogIn</NavLink>
                        <NavLink className="nav-link {({ isActive }) => isActive ? 'active' : undefined}" to="">LogOut</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;