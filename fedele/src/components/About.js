import React from "react";
import { Container, Card } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="my-5">
      <Container>
        <Card className="p-4 shadow-sm">
          <h2 className="text-orange mb-3">About Us</h2>
          <p>
            Welcome to Fedele 🍊 — we provide high-quality products at the best prices.
            Our mission is to bring freshness and value directly to you.
          </p>
          <p>
            We source our products from trusted local farms and ensure top-quality standards.
          </p>
        </Card>
      </Container>
    </section>
  );
}

export default About;
