import React, { useState, useEffect } from 'react';
import '../../styles/Review.css';
import ReviewService from '../../services/ReviewService';
function dynamicSort(property) {
  var sortOrder = 1;
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    var result = a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    ReviewService.getAllReview().then((getData) => {
      setReviews(getData.data);
    });
  }, []);
  console.log(reviews.sort(dynamicSort('id')));
  return (
    <div id="testimonials">
      <div class="testimonial-heading">
        <span>Отзывы</span>
        <h1>Что говорят наши клиенты</h1>
      </div>

      <div class="testimonial-box-container">
        {reviews
          .sort(dynamicSort('id'))
          .slice(0, 5)
          .map((data) => {
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
