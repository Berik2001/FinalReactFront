import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import OrderTable from '../components/AdminPage/Order/OrderTable';

function AdminOrder(props) {
  return (
    <div>
      <Header />
        <OrderTable />
      <Footer />
    </div>
  );
}

export default AdminOrder;
