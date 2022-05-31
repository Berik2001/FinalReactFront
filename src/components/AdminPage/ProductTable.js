import React, { useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProductService from '../../services/ProductService';
import TablePagination from '@mui/material/TablePagination';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import EditIcon from '@mui/icons-material/Edit';
import SvgIcon from '@mui/material/SvgIcon';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import CategoryService from '../../services/CategoryService';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function ProductTable() {
  const [categories, setCurrentCategories] = React.useState();
  const [currentCategory, setCurrentCategory] = React.useState();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChange = (event) => {
    setCurrentCategory(event.target.value);
  };

  useEffect(() => {
    CategoryService.getCategories().then((response) => {
      setCurrentCategories(response.data);
    });
    !!currentCategory &&
      ProductService.getProductByCategoryId(currentCategory.id).then((response) => {
        setProducts(response.data);
      });
  }, []);

  console.log(currentCategory);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  console.log(categories);
  return (
    <React.Fragment>
      <Header />
      <Grid container spacing={1}>
        <Grid item xs={4}></Grid>
        <h1>Сначала выберите категорию</h1>
        <br />
        <InputLabel id="demo-simple-select-label" style={{ display: 'inline' }}>
          Категории
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentCategory}
          label="Категории"
          onChange={handleChange}>
          {categories &&
            categories.map((el) => {
              return <MenuItem value={el.id}>{el.name}</MenuItem>;
            })}
        </Select>
      </Grid>

      {!!currentCategory && (
        <TableContainer component={Paper} style={{ marginTop: 50, marginBottom: 50 }}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <TableCell name="id">№</TableCell>
                <TableCell name="title">Имя пользователя</TableCell>
                <TableCell name="price">Отзыв</TableCell>
                <TableCell name="stack">Вопрос</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, el) => (
                  <TableRow key={row.id + row.name} tabIndex={-1}>
                    <TableCell>{el + 1}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.question}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={products.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      )}
      <Footer />
    </React.Fragment>
  );
}
