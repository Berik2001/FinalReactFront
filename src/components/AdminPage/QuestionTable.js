import React, { useEffect, useState } from 'react';
import QuestionService from '../../services/QuestionService';
import { Table } from 'antd';

export default function QuestionTable() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    QuestionService.getAllReview().then((response) => {
      setQuestions(response.data);
    });
  }, []);

  const columns = [
    {
      title: `№`,
      dataIndex: 'id',
      key: 'number',
      fixed: 'left',
      render: (text, record, index) => index + 1,
    },
    {
      title: `Имя пользователя`,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: `Email`,
      dataIndex: 'email',
      key: 'email',
      fixed: 'left',
    },
    {
      title: `Вопрос`,
      dataIndex: 'question',
      key: 'question',
      fixed: 'left',
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={questions}></Table>
    </>
  );
}
