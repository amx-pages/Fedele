import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-warning text-white text-center py-3 mt-5">
      <Container>
        <p className="mb-0">© {new Date().getFullYear()} Fedele. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
