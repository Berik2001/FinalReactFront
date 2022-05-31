import React, { useEffect, useState } from 'react';
import ProductService from '../../services/ProductService';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import CategoryService from '../../services/CategoryService';
import { Table, Image, Tooltip, Popconfirm, Button, Select, Row, Col } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { ProductModal } from './ProductModal';

const { Option } = Select;

export default function ProductTable() {
  const [categories, setCurrentCategories] = React.useState();
  const [currentCategory, setCurrentCategory] = React.useState();
  const [products, setProducts] = useState([]);
  const [modalProps, setModalProps] = useState({
    visible: false,
    actionType: null,
    currentProduct: null,
  });

  useEffect(() => {
    CategoryService.getCategories().then((response) => {
      setCurrentCategories(response.data);
    });
  }, []);

  useEffect(() => {
    debugger;
    !!currentCategory &&
      ProductService.getProductByCategoryId(currentCategory).then((response) => {
        setProducts(response.data);
      });
  }, [currentCategory]);

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
      title: `Название продукта`,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: `Изображение`,
      dataIndex: 'image',
      key: 'image',
      fixed: 'left',
      render: (text, record, index) => <Image width={200} src={text} />,
    },
    {
      title: `Описание`,
      dataIndex: 'description',
      key: 'description',
      fixed: 'left',
    },
    {
      title: `Стоимость`,
      dataIndex: 'price',
      key: 'price',
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
      <Header />
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <h1>Выберите категорию</h1>
          <Select
            size="large"
            placeholder="Выберите категорию"
            optionFilterProp="children"
            value={currentCategory}
            onChange={(e) => {
              debugger;
              setCurrentCategory(e);
            }}>
            {!!categories &&
              categories.map((el) => {
                return <Option value={el.id}>{el.name}</Option>;
              })}
          </Select>
        </Col>
        <Col span={8}></Col>
      </Row>

      {!!currentCategory && (
        <>
          <ProductModal modalProps={modalProps} closeModal={closeModal} />
          <Button
            size="large"
            onClick={() =>
              setModalProps({
                visible: !modalProps.visible,
                actionType: 'save',
                currentProduct: null,
              })
            }
            type="primary"
            style={{ marginBottom: 1 }}>
            Добавить продукт
          </Button>
          <Table columns={columns} dataSource={products}></Table>
        </>
      )}
      <Footer />
    </React.Fragment>
  );
}
