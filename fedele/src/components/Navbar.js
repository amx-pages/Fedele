import React from "react";
import { Navbar, Container, Nav, Badge, Dropdown } from "react-bootstrap";

function AppNavbar({ basketCount, language, setLanguage, t }) {
  const flags = { am: "🇦🇲", en: "🇬🇧", ru: "🇷🇺" };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm" fixed="top">
      <Container>
        <Navbar.Brand href="/" className="text-orange fw-bold">
          🟠 Fedele
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#about">{t.about}</Nav.Link>
            <Nav.Link href="#products">{t.products}</Nav.Link>
            <Nav.Link href="#basket">
              {t.basket} <Badge bg="warning">{basketCount}</Badge>
            </Nav.Link>
            <Nav.Link href="#contact">{t.contact}</Nav.Link>

            {/* Language selector */}
            <Dropdown align="end" className="ms-3">
              <Dropdown.Toggle variant="light" id="dropdown-language">
                {flags[language]}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {Object.keys(flags).map((lang) => (
                  <Dropdown.Item key={lang} onClick={() => setLanguage(lang)}>
                    {flags[lang]} {lang.toUpperCase()}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
