import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
const NavBar = () => {
  return (
    <div>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MERN APP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
