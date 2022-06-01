import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import QuestionTable from '../components/AdminPage/Question/QuestionTable';
import ReviewTable from '../components/AdminPage/Review/ReviewTable';
import Container from '@mui/material/Container';
function AdminHome(props) {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <QuestionTable />
      </Container>
      <p style={{ marginTop: '40px' }} />
      <Container maxWidth="lg">
        <ReviewTable />
      </Container>
      <Footer />
    </div>
  );
}

export default AdminHome;
