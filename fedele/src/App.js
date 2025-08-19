import React from "react";
import { Container, Navbar, Nav, Row, Col, Card } from "react-bootstrap";

function App() {
  return (
    <>
      {/* Navbar */}
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

      <Container>
        {/* About */}
        <section id="about" className="mb-5">
          <h2 className="text-warning">About Us</h2>
          <p>
            We are a leading company providing high-quality products at affordable prices.
            Our mission is to bring value and innovation to our customers.
          </p>
        </section>

        {/* Products */}
        <section id="products" className="mb-5">
          <h2 className="text-warning">Our Products</h2>
          <Row>
            {[1, 2, 3].map((item) => (
              <Col md={4} key={item} className="mb-3">
                <Card>
                  <Card.Img
                    variant="top"
                    src={`https://via.placeholder.com/300x200?text=Product+${item}`}
                  />
                  <Card.Body>
                    <Card.Title>Product {item}</Card.Title>
                    <Card.Text>
                      Short description of product {item}.  
                      <strong>Price: ${item * 10}</strong>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-5">
          <h2 className="text-warning">Contact Us</h2>
          <p>Email: <a href="mailto:info@company.com">info@company.com</a></p>
          <p>Phone: +123 456 789</p>
        </section>
      </Container>

      {/* Footer */}
      <footer className="bg-warning text-white text-center py-3">
        © 2025 CompanyName — All Rights Reserved
      </footer>
    </>
  );
}

export default App;
