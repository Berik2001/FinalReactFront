import React,{useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import QuestionService from "../../services/QuestionService";
const Question = () => {
  let navigate = useNavigate();
  const [questions, setQuestions] = useState({
    name: "",
    email: "",
    question: "",
  });
  const { name, email, question } = questions;
  const onInputChange = (e) => {
    setQuestions({ ...questions, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/v1/questions/create", questions);
    navigate("/");
  };
  return (
    <div style={{ marginBottom: "10px" }}>
      <Container>
        <div class="h1">Задайте Ваш вопрос</div>
        <div class="description">
          Здесь Вы всегда можете задать любые интересующие вопросы.
        </div>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
            name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
              type="text"
              placeholder="Enter your Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
            name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
              type="email"
              placeholder="Enter your Email Address"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Question</Form.Label>
            <Form.Control
             name="question"
              value={question}
              onChange={(e) => onInputChange(e)}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Button variant="outline-primary" type="submit">Submit</Button>{" "}
        </Form>
      </Container>
    </div>
  );
};

export default Question;
