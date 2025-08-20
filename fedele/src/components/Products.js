import React from "react";
import products from "../data/products.json";
import { Card, Button, Row, Col } from "react-bootstrap";

function Products() {
  return (
    <section id="products" className="mb-5">
      <h2 className="mb-4 text-orange">Products</h2>
      <Row>
        {products.map((product, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <strong>Weight:</strong> {product.weight} <br />
                  <strong>Price:</strong> ${product.price} <br />
                  <strong>Available:</strong> {product.counter} pcs <br />
                  <em>{product.description}</em>
                </Card.Text>
                <Button variant="warning" className="text-white w-100">
                  Add to Basket
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Products;
