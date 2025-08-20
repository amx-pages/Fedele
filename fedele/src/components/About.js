import React from "react";
import { Container, Card } from "react-bootstrap";

function About({ t }) {
  return (
    <section id="about" className="my-5 pt-5">
      <Container>
        <Card className="p-4 shadow-sm">
          <h2 className="text-orange mb-3">{t.title}</h2>
          <p>{t.text}</p>
        </Card>
      </Container>
    </section>
  );
}

export default About;
