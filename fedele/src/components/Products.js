import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import productsData from "../data/products.json";

function Products({ addToBasket, tProducts, tLabels }) {
  const products = productsData.map((prod) => {
    const tProd = tProducts.find((tp) => tp.id === prod.id);
    return {
      ...prod,
      name: tProd ? tProd.name : prod.name,
      description: tProd ? tProd.description : prod.description,
    };
  });

  return (
    <Container id="products" className="my-5">
      <h2 className="mb-4 text-orange">{tLabels.products}</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <ProductCard product={product} addToBasket={addToBasket} tLabels={tLabels} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
