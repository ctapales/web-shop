import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import shorts from "./../../media/productcategories/shorts.jpg";
import sweaters from "./../../media/productcategories/sweaters.jpg";
import tees from "./../../media/productcategories/tees.jpg";
import trousers from "./../../media/productcategories/trousers.jpg";
import accessories from "./../../media/productcategories/accessories.jpg";
import slippers from "./../../media/productcategories/slippers.jpg";
import "../../styles/feed/shopByCategory.scss";

const SHOP_BY_CATEGORY = props => {
  return (
    <React.Fragment>
      <Container className="shop-by-category">
        <h3>Shop by Category</h3>
        <Row>
          <Col md={2} sm={4} xs={6}>
            <Card>
              <Card.Img variant="top" src={shorts} />
              <Card.Body>
                <Card.Title>Shorts</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} sm={4} xs={6}>
            <Card>
              <Card.Img variant="top" src={sweaters} />
              <Card.Body>
                <Card.Title>Sweaters</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} sm={4} xs={6}>
            <Card>
              <Card.Img variant="top" src={tees} />
              <Card.Body>
                <Card.Title>Tees</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} sm={4} xs={6}>
            <Card>
              <Card.Img variant="top" src={trousers} />
              <Card.Body>
                <Card.Title>Trousers</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} sm={4} xs={6}>
            <Card>
              <Card.Img variant="top" src={accessories} />
              <Card.Body>
                <Card.Title>Accessories</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} sm={4} xs={6}>
            <Card>
              <Card.Img variant="top" src={slippers} />
              <Card.Body>
                <Card.Title>Slippers</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default SHOP_BY_CATEGORY;
