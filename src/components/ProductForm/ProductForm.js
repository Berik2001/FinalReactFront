import React from 'react';
import { Container,Form,Button } from "react-bootstrap";
const ProductForm = () => {
    return (
        <div>
            <Container>
            <Form style={styles.well}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label >Customer Name</Form.Label>
    <Form.Control type="text" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Customer Phone</Form.Label>
    <Form.Control type="tel" placeholder="Phone" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Customer Address</Form.Label>
    <Form.Control type="text" placeholder="Address" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </Container>
        </div>
    );
};
const styles = {

  well:{
   
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"

  }

};

export default ProductForm;