import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import ProductTable from '../components/AdminPage/Product/ProductTable';
function Product(props) {
  return (
    <div>
      <Header />
      <ProductTable />
      <Footer />
    </div>
  );
}

export default Product;
