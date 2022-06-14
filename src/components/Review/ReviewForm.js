import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import '../../styles/Review.css';
import axios from 'axios';

const ReviewForm = () => {
  const [reviews, setReviews] = useState({
    review: '',
    reviewUsername: '',
    reviewDesc: '',
  });
  const { review, reviewUsername, reviewDesc } = reviews;
  const onInputChange = (e) => {
    setReviews({ ...reviews, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/v1/reviews/create', reviews);
    window.location.reload();
  };
  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <Container>
          <div class="h1">Напишити Отзыв</div>

          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Отзыв</Form.Label>
              <Form.Control
                name="reviewDesc"
                value={reviewDesc}
                onChange={(e) => onInputChange(e)}
                as="textarea"
                rows={3}
              />
              <Form.Label>Имя пользователя</Form.Label>
              <Form.Control
                name="reviewUsername"
                value={reviewUsername}
                onChange={(e) => onInputChange(e)}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Button variant="outline-primary" type="submit">
              Отправить
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default ReviewForm;
