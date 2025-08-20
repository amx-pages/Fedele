import React from "react";
import { Card, Button } from "react-bootstrap";

function ProductCard({ product, addToBasket, tLabels }) {
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
          <strong>{tLabels.weight}:</strong> {product.weight} <br />
          <strong>{tLabels.price}:</strong> ${product.price} <br />
          <strong>{tLabels.stock}:</strong> {product.stock} <br />
          <small className="text-muted">{product.description}</small>
        </Card.Text>

        {/* Center button */}
        <div className="d-flex justify-content-center">
          <Button
            variant="warning"
            className="text-white w-100 w-sm-auto"
            onClick={() => addToBasket(product)}
          >
            {tLabels.addToBasket}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
