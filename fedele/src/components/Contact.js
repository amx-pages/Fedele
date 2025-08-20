import React from "react";
import { Card } from "react-bootstrap";

function Contact() {
  return (
    <section id="contact" className="mb-5">
      <Card className="shadow-sm p-3">
        <h2 className="text-orange">Contact Us</h2>
        <p>📍 Address: Yerevan, Armenia</p>
        <p>📞 Phone: +374 00 000000</p>
        <p>📧 Email: info@fedele.com</p>
      </Card>
    </section>
  );
}

export default Contact;
