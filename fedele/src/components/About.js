import React from "react";
import { Card } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="mb-5">
      <Card className="shadow-sm p-3">
        <h2 className="text-orange">About Us</h2>
        <p>
          Welcome to Fedele 🍊 — we provide high-quality products at the best prices.
          Our mission is to bring freshness and value directly to you.
        </p>
      </Card>
    </section>
  );
}

export default About;
