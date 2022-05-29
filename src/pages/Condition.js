import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Circum from '../components/Condition/Circum.js';
function Condition(props) {
  return (
    <div>
      <Header />
      <Circum />
      <Footer />
    </div>
  );
}

export default Condition;
