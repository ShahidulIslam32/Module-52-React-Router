import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className='mb-5 menu'>
                <Container>
                    <Navbar.Brand href="#home">React Router</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Friends</Nav.Link>
                        <Nav.Link href="#pricing">About Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <h1 className='text-center mb-4'>React Router</h1>
        
        </div>
    );
};

export default Header;