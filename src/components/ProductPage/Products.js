import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import { useParams,Link } from "react-router-dom";
import ProductService from "../../services/ProductService";
const Products = () => {
  let { id } = useParams();
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductService.getProductByCategoryId({ id }).then((getData) => {
      setProducts(getData.data);
    
    });
  });
  return (
    <Container>
      <Row>
        {products.map((data) => {
          return (
            <Col md={6} lg={4}>
              <Card  key={data.id} className="mb-3">
                <Image
                  src={data.image}
                  className="card-img-top"
                  style={{height: '350px', width: '400px'}}
                  fluid
                />
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text  style={{height: '70px'}}>
                    {data.description}
                  </Card.Text>
                  <Card.Text>
                    <h1>{data.price}$</h1>
                  </Card.Text>
                  <Button variant="primary"  ><a style={{textDecoration:"None", color: 'white'}}href="/login">Rent</a></Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
