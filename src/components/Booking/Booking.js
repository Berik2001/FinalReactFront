import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useLocation } from 'react-router-dom';

const Booking = () => {
  const location = useLocation();
  const [currentProduct, setCurrentProduct] = useState();
  const [totalCount, setTotalCount] = useState();

  useEffect(() => {
    setCurrentProduct(location.state.product);
    setTotalCount(location.state.product.price);
  }, []);
  console.log(location);
  const [startDate, setStartDate] = useState(new Date());
  const [counter, setCounter] = useState(1);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <React.Fragment>
      {currentProduct && (
        <div class="container">
          <div class="card">
            <div class="form">
              <div class="left-side">
                <div class="fashion">
                  <h3>{currentProduct.category.name}</h3>
                </div>
                <div class="images">
                  <span>
                    <img src={currentProduct.image} />
                  </span>
                </div>
              </div>
              <div class="right-side">
                <h3>{currentProduct.name}</h3>
                <h4>{currentProduct.price}</h4>
                <div>
                  <ButtonGroup size="small" aria-label="small outlined button group">
                    <Button onClick={handleIncrement}>+</Button>
                    {counter > 0 && <Button disabled>{counter}</Button>}
                    {counter > 0 && <Button onClick={handleDecrement}>-</Button>}
                  </ButtonGroup>
                </div>
                <Button variant="primary">Арендовать</Button>
                <div class="description">
                  <h4>Описание товара</h4>
                  <p>{currentProduct.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Booking;
