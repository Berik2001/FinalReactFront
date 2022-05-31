import React, { useEffect, useState } from 'react';
import ReviewService from '../../services/ReviewService';
import { Table } from 'antd';

export default function ReviewTable() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    ReviewService.getAllReview().then((response) => {
      setReviews(response.data);
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
      title: `Имя`,
      dataIndex: 'review',
      key: 'review',
      fixed: 'left',
    },
    {
      title: `Имя пользователя`,
      dataIndex: 'reviewUsername',
      key: 'reviewUsername',
      fixed: 'left',
    },
    {
      title: `Отзыв`,
      dataIndex: 'reviewDesc',
      key: 'reviewDesc',
      fixed: 'left',
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={reviews}></Table>
    </>
  );
}
