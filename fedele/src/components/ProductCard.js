import React from "react";
import { Card, Button } from "react-bootstrap";

function ProductCard({ product, addToBasket }) {
  return (
    <Card className="shadow-sm h-100">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="text-orange">{product.name}</Card.Title>
        <Card.Text>
          <strong>Weight:</strong> {product.weight} <br />
          <strong>Price:</strong> ${product.price} <br />
          <strong>In stock:</strong> {product.stock} <br />
          <small className="text-muted">{product.description}</small>
        </Card.Text>
        <Button
          variant="warning"
          className="text-white"
          onClick={() => addToBasket(product)}
        >
          Add to Basket
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
