import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <Navbar bg="white" variant="white" className='mb-5 menu'>
                <Container>
                    <Navbar.Brand href="/">React Router</Navbar.Brand>
                    <Nav className="me-auto">
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/friends">Friends</CustomLink>
                        <CustomLink to="/about">About Us</CustomLink>
                    </Nav>
                </Container>
            </Navbar>
            <h1 className='text-center mb-4'>React Router</h1>
        
        </div>
    );
};

export default Header;