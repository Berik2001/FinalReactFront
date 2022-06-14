import React from 'react';
import Booking from '../components/Booking/Booking';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function AdminHome(props) {
  return (
    <div>
      <Header />
      <Booking />
      <Footer />
    </div>
  );
}

export default AdminHome;
