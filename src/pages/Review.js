import React from 'react';
import Header from '../components/Header.js';
import Testimonials from '../components/Review/Testimonials.js';
import ReviewForm from '../components/Review/ReviewForm.js';
import Footer from '../components/Footer.js';
function Review(props) {
  return (
    <div>
      <Header />
      <Testimonials />
      <ReviewForm />
      <Footer />
    </div>
  );
}

export default Review;
