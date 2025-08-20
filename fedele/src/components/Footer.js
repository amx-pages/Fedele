import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-light py-3 mt-5 border-top">
      <Container className="text-center">
        <p className="mb-1 text-orange fw-bold">Fedele Company</p>
        <p className="mb-0">📍 Yerevan, Armenia | 📞 +374 00 000 000</p>
        <small>© {new Date().getFullYear()} Fedele. All rights reserved.</small>
      </Container>
    </footer>
  );
}

export default Footer;
