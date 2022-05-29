import React, { useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import QuestionService from '../../services/QuestionService';
import TablePagination from '@mui/material/TablePagination';

export default function QuestionTable() {
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    QuestionService.getAllReview().then((response) => {
      setQuestions(response.data);
    });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
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
          {questions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, el) => (
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
        count={questions.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
