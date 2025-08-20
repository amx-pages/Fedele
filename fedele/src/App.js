import React from "react";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/Navbar";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <NavigationBar />
      <Container>
        <About />
        <Products />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

export default App;
