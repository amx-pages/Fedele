import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="warning" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-white">
          🟧 Fedele
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#about" className="text-white">About</Nav.Link>
          <Nav.Link href="#products" className="text-white">Products</Nav.Link>
          <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
