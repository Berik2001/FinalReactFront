import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';
import CategoryService from '../../services/CategoryService';
const PopularGoods = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    CategoryService.getCategories().then((getData) => {
      setCategories(getData.data);
    });
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {categories.map((data) => {
            return (
              <Col md={6} lg={4}>
                <Card key={data.id} className="mb-3">
                  <Image src={data.img} className="card-img-top" fluid />
                  <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                      The iPhone 12 Pro features a 6.1-inch display and the larger iPhone 12 Pro Max
                      variant features a 6.7-inch display. Both models have the Super Retina XDR
                      OLED display with thinner bezels than previous generation iPhones. The iPhone
                      12 Pro Max features the largest display on any iPhone to date.
                    </Card.Text>
                    <Button variant="primary">Rent</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default PopularGoods;
