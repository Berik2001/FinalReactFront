import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import CategoryTable from '../components/AdminPage/Category/CategoryTable';
function Category(props) {
  return (
    <div>
      <Header />
      <CategoryTable />
      <Footer />
    </div>
  );
}

export default Category;
