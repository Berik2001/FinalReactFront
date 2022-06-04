import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import ProductService from '../../services/ProductService';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Products = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = (id) => {
    setOpen(true);
    setSelectedProduct(products.find((i) => i.id == id));
  };
  const toOrder = () => {
    navigate(`/booking/${selectedProduct.id}`, { state: { product: selectedProduct } });
  };
  const handleClose = () => setOpen(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductService.getProductByCategoryId(id).then((getData) => {
      setProducts(getData.data);
    });
  }, []);

  return (
    <Container>
      <Row>
        {products.map((data) => {
          return (
            <Col md={6} lg={4}>
              <Card key={data.id} className="mb-3">
                <Image
                  src={data.image}
                  className="card-img-top"
                  style={{ height: '350px', width: '400px' }}
                  fluid
                />
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text style={{ height: '70px' }}>{data.description}</Card.Text>
                  <Card.Text>
                    <h1>{data.price}$</h1>
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      style={{ textDecoration: 'None', color: 'white' }}
                      onClick={() => handleOpen(data.id)}>
                      Rent
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      {!!selectedProduct && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h3>{selectedProduct.name}</h3>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <h3>{selectedProduct.description}</h3>
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Price: {selectedProduct.price}
            </Typography>

            <Button onClick={toOrder}>Rent</Button>
          </Box>
        </Modal>
      )}
    </Container>
  );
};

export default Products;
