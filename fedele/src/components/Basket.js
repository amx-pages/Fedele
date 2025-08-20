import React from "react";
import { Table, Button, Container, Row, Col, Card } from "react-bootstrap";

function Basket({ basketItems, removeFromBasket, products, t, tLabels }) {
  const total = basketItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container id="basket" className="my-5">
      <h2 className="mb-4 text-orange">🛒 {t.title}</h2>
      {basketItems.length === 0 ? (
        <p>{t.empty}</p>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="d-none d-md-block">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>{tLabels.product}</th>
                  <th>{tLabels.weight}</th>
                  <th>{tLabels.price}</th>
                  <th>{tLabels.quantity}</th>
                  <th>{tLabels.subtotal}</th>
                  <th>{tLabels.action}</th>
                </tr>
              </thead>
              <tbody>
                {basketItems.map((item) => {
                  const product = products.find((p) => p.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{product ? product.name : item.name}</td>
                      <td>
                        {product ? product.weight : item.weight} {tLabels.unit}
                      </td>
                      <td>${item.price}</td>
                      <td>{item.quantity}</td>
                      <td>${item.price * item.quantity}</td>
                      <td>
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => removeFromBasket(item.id)}
                        >
                          {t.remove}
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>

          {/* Mobile Cards */}
          <div className="d-block d-md-none">
            <Row>
              {basketItems.map((item) => {
                const product = products.find((p) => p.id === item.id);
                return (
                  <Col key={item.id} xs={12} className="mb-3">
                    <Card>
                      <Card.Body>
                        <Card.Title className="text-orange">
                          {product ? product.name : item.name}
                        </Card.Title>
                        <Card.Text>
                          <strong>{tLabels.weight}:</strong>{" "}
                          {product ? product.weight : item.weight} {tLabels.unit} <br />
                          <strong>{tLabels.price}:</strong> ${item.price} <br />
                          <strong>{tLabels.quantity}:</strong> {item.quantity} <br />
                          <strong>{tLabels.subtotal}:</strong> ${item.price * item.quantity}
                        </Card.Text>
                        <Button
                          variant="danger"
                          size="sm"
                          className="w-100"
                          onClick={() => removeFromBasket(item.id)}
                        >
                          {t.remove}
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>

          <h4 className="mt-3">
            {t.total}: ${total}
          </h4>
        </>
      )}
    </Container>
  );
}

export default Basket;
