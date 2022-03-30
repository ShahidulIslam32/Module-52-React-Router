import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Home = () => {
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
            <h1>welcome to React Router Home Page !!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo debitis nihil, eveniet quae impedit nemo id odit commodi aperiam doloribus quibusdam, excepturi laborum quidem in, neque repudiandae adipisci suscipit voluptates.
            Voluptas tempore quis consectetur, eaque esse sint unde incidunt! Omnis harum vitae magnam molestias incidunt debitis non facilis. Eveniet iusto, aliquid consequatur obcaecati excepturi debitis optio maxime rem in laboriosam.</p>
        </div>
    );
};

export default Home;