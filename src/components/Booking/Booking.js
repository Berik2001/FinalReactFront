import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DatePicker from 'react-datepicker';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useLocation } from 'react-router-dom';

const Booking = () => {
  const location = useLocation();

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
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            Выберите период аренды
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </Grid>
          <Grid item xs={4}>
            Стоимость техники 50000
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            Цена в сутки
          </Grid>
          <Grid item xs={8}>
            Итоговая сумма
          </Grid>
          <Grid item xs={8}>
            <ButtonGroup size="small" aria-label="small outlined button group">
              <Button onClick={handleIncrement}>+</Button>
              {counter > 0 && <Button disabled>{counter}</Button>}
              {counter > 0 && <Button onClick={handleDecrement}>-</Button>}
            </ButtonGroup>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Booking;
