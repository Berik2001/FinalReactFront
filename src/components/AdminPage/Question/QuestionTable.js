import React, { useEffect, useState } from 'react';
import QuestionService from '../../../services/QuestionService';
import { Table, Tooltip, Popconfirm } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { QuestionModal } from './QuestionModal';
export default function QuestionTable() {
  const [questions, setQuestions] = useState([]);
  const [modalProps, setModalProps] = useState({
    visible: false,
    actionType: null,
    currentQuestion: null,
  });

  useEffect(() => {
    QuestionService.getAllQuestion().then((response) => {
      setQuestions(response.data);
    });
  }, [modalProps]);

  const onDelete = (id) => {
    QuestionService.deleteQuestion(id);
    setModalProps({ visible: false });
  };

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
                debugger;
                setModalProps({
                  visible: !modalProps.visible,
                  actionType: 'edit',
                  currentQuestion: questions && questions.find((el) => el.id === id),
                });
              }}
            />
          </Tooltip>
        </>
      ),
    },
    {
      title: `Удалить`,
      key: 'action',
      width: 150,
      fixed: 'right',
      align: 'center',
      render: ({ id }) => (
        <>
          <Tooltip placement="top" title="Удалить">
            <Popconfirm
              placement="bottom"
              title={'Вы действительно хотите удалить вопрос?'}
              onConfirm={() => onDelete(id)}
              okText="Да"
              cancelText="Нет">
              <DeleteTwoTone key="delete" twoToneColor="#eb2f96" />
            </Popconfirm>
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <>
      <QuestionModal modalProps={modalProps} closeModal={closeModal} />
      <Table columns={columns} dataSource={questions}></Table>
    </>
  );
}
