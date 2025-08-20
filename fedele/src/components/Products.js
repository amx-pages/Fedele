import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import products from "../data/products.json";

function Products({ addToBasket }) {
  return (
    <Container id="products" className="my-5">
      <h2 className="mb-4 text-orange">Our Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <ProductCard product={product} addToBasket={addToBasket} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
