import React from 'react';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Employee's Information</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className="tabs" to='/all'>All User</NavLink>
                    <NavLink className="tabs" to='/add'>Add User</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;