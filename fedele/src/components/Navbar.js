import React from "react";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";

function AppNavbar({ basketCount }) {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="shadow-sm"
      fixed="top"  // <-- makes navbar fixed at top
    >
      <Container>
        <Navbar.Brand href="/" className="text-orange fw-bold">
          🟠 Fedele
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#basket">
              Basket <Badge bg="warning">{basketCount}</Badge>
            </Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
