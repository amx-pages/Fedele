import React from "react";
import { Container, Card } from "react-bootstrap";

function Contact({ t }) {
  return (
    <section id="contact" className="my-5">
      <Container>
        <Card className="p-4 shadow-sm">
          <h2 className="text-orange mb-3">{t.title}</h2>
          <p>📍 {t.address}</p>
          <p>📞 {t.phone}</p>
          <p>📧 Email: <a href={`mailto:${t.email}`}>{t.email}</a></p>
        </Card>
      </Container>
    </section>
  );
}

export default Contact;
