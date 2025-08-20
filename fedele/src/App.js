import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppNavbar from "./components/Navbar";
import About from "./components/About";
import Products from "./components/Products";
import Basket from "./components/Basket";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [basketItems, setBasketItems] = useState([]);

  const addToBasket = (product) => {
    setBasketItems((prev) => {
      const itemExists = prev.find((item) => item.id === product.id);
      if (itemExists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromBasket = (id) => {
    setBasketItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <AppNavbar basketCount={basketItems.length} />

      {/* About Section */}
      <About />

      {/* Products Section */}
      <Products addToBasket={addToBasket} />

      {/* Basket Section */}
      <Basket basketItems={basketItems} removeFromBasket={removeFromBasket} />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
