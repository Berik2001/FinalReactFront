import React, { useState, useEffect } from 'react';
import '../../styles/Review.css';
import ReviewService from '../../services/ReviewService';
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    ReviewService.getAllReview().then((getData) => {
      setReviews(getData.data);
    });
  }, []);

  return (
    <div id="testimonials">
      <div class="testimonial-heading">
        <span>Отзывы</span>
        <h1>Что говорят наши клиенты</h1>
      </div>

      <div class="testimonial-box-container">
        {reviews.slice(0, 5).map((data) => {
          return (
            <div class="testimonial-box" key={data.id}>
              <div class="box-top">
                <div class="profile">
                  <div class="name-user">
                    <strong>{data.review}</strong>
                    <span>{data.reviewUsername}</span>
                  </div>
                </div>

                <div class="reviews">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              </div>

              <div class="client-comment">
                <p>{data.reviewDesc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
