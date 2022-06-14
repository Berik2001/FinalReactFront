import React, { useEffect, useState } from 'react';
import ReviewService from '../../../services/ReviewService';
import { Table, Tooltip } from 'antd';
import { EditTwoTone } from '@ant-design/icons';
import { ReviewModal } from './ReviewModal';

export default function ReviewTable() {
  const [reviews, setReviews] = useState([]);
  const [modalProps, setModalProps] = useState({
    visible: false,
    actionType: null,
    currentReview: null,
  });
  useEffect(() => {
    ReviewService.getAllReview().then((response) => {
      setReviews(response.data);
    });
  }, [modalProps]);

  const closeModal = () => {
    setModalProps({ visible: false });
  };

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
    {
      title: `Редактировать`,
      key: 'img',
      fixed: 'left',
      render: ({ id }) => (
        <>
          <Tooltip placement="top" title={'Редактировать'}>
            <EditTwoTone
              key="edit"
              onClick={() => {
                setModalProps({
                  visible: !modalProps.visible,
                  actionType: 'edit',
                  currentReview: reviews && reviews.find((el) => el.id === id),
                });
              }}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <>
      <ReviewModal modalProps={modalProps} closeModal={closeModal} />
      <Table columns={columns} dataSource={reviews}></Table>
    </>
  );
}
