import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header.js';
import Footer from '../../../components/Footer.js';
import CategoryService from '../../../services/CategoryService';
import { Table, Image, Tooltip, Popconfirm, Button } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { CategoryModal } from './CategoryModal';
export default function CategoryTable() {
  const [categories, setCategories] = useState([]);
  const [modalProps, setModalProps] = useState({
    visible: false,
    actionType: null,
    currentCategory: null,
  });

  useEffect(() => {
    CategoryService.getCategories().then((response) => {
      setCategories(response.data);
    });
  }, []);

  const onDelete = (id) => {
    CategoryService.deleteCategory(id);
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
      title: `Название категории`,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: `Изображение`,
      dataIndex: 'img',
      key: 'img',
      fixed: 'left',
      render: (text, record, index) => <Image width={200} src={text} />,
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
                  currentCategory: categories && categories.find((el) => el.id === id),
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
              title={'Вы действительно хотите удалить категорию?'}
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
    <React.Fragment>
      <CategoryModal modalProps={modalProps} closeModal={closeModal} />
      <Button
        size="large"
        onClick={() =>
          setModalProps({
            visible: !modalProps.visible,
            actionType: 'save',
            currentCategory: null,
          })
        }
        type="primary"
        style={{ marginBottom: 1 }}>
        Добавить категорию
      </Button>
      <Table columns={columns} dataSource={categories}></Table>
    </React.Fragment>
  );
}
