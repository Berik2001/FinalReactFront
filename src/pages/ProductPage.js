import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Products from '../components/ProductPage/Products';
function ProductPage(props) {
  return (
    <div>
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default ProductPage;
