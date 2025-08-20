import React from "react";
import { Container, Card } from "react-bootstrap";

function Contact() {
  return (
    <section id="contact" className="my-5">
      <Container>
        <Card className="p-4 shadow-sm">
          <h2 className="text-orange mb-3">Contact Us</h2>
          <p>📍 Address: Yerevan, Armenia</p>
          <p>📞 Phone: +374 00 000000</p>
          <p>📧 Email: <a href="mailto:info@fedele.com">info@fedele.com</a></p>
        </Card>
      </Container>
    </section>
  );
}

export default Contact;
