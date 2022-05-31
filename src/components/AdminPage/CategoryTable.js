import React, { useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CategoryService from '../../services/CategoryService';
import TablePagination from '@mui/material/TablePagination';
import { Image } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SvgIcon from '@mui/material/SvgIcon';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CategoryTable() {
  const [category, setCategory] = useState({
    id: '',
    name: '',
    img: '',
  });
  const [type, setType] = useState('');
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (id, t) => {
    debugger;
    !!t && setCategory(categories.find((e) => e.id == id));
    setOpen(true);
    setType(t);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    CategoryService.getCategories().then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const onDelete = () => {
    CategoryService.updateCategory().then((response) => {
      setCategories(response.data);
    });
  };

  const onEdit = () => {
    CategoryService.updateCategory().then((response) => {
      setCategories(response.data);
    });
  };

  const onCreate = () => {
    debugger;
    CategoryService.createCategory(category).then((response) => {
      setCategories(response.data);
    });
  };

  return (
    <React.Fragment>
      <Header />

      <TableContainer component={Paper} style={{ marginTop: 50, marginBottom: 50 }}>
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
          <Button variant="contained" onClick={handleOpen}>
            {'Создать'}
          </Button>
        </Typography>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <TableCell name="id">№</TableCell>
              <TableCell name="title">Наименование</TableCell>
              <TableCell name="title">Изображение</TableCell>
              <TableCell name="edit">Редактирование</TableCell>
              <TableCell name="delete">Удаление</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, el) => (
                <TableRow key={row.id + row.name} tabIndex={-1}>
                  <TableCell>{el + 1}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <Image
                      src={row.img}
                      className="card-img-top"
                      style={{ height: '150px', width: '200px' }}
                      fluid
                    />
                  </TableCell>
                  <TableCell>
                    <SvgIcon component={EditIcon} onClick={() => handleOpen(row.id, 'edit')} />
                  </TableCell>
                  <TableCell>
                    <SvgIcon component={DeleteIcon} onClick={() => onDelete(row.id)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={categories.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style} component="form" noValidate autoComplete="off">
            <h2>{type == 'edit' ? 'Редактирование категории' : 'Создание категории'}</h2>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off">
              <div>
                <TextField
                  required
                  id="outlined-required"
                  name="name"
                  value={category.name}
                  onChange={(e) => {
                    setCategory({
                      ...category,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  label="Наименование категории"
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  name="img"
                  value={category.img}
                  onChange={(e) => {
                    setCategory({
                      ...category,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  label="Ссылка на изображение"
                />
              </div>
              <Button onClick={type == 'edit' ? onEdit : onCreate}>
                {type == 'edit' ? 'Редактировать' : 'Создать'}
              </Button>
            </Box>
          </Box>
        </Modal>
      </TableContainer>
      <Button></Button>

      <Footer />
    </React.Fragment>
  );
}
