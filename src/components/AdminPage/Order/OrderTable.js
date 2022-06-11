import React, { useEffect, useState } from 'react';
import OrderService from '../../../services/OrderService';
import { Table, Tooltip, Popconfirm } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { OrderModal } from './OrderModal';
import moment from 'moment';

export default function OrderTable() {
  const [orders, setOrders] = useState([]);
  const [modalProps, setModalProps] = useState({
    visible: false,
    actionType: null,
    currentOrder: null,
  });

  useEffect(() => {
    OrderService.getAllOrder().then((response) => {
      setOrders(response.data);
    });
  }, [modalProps]);

  const onDelete = (id) => {
    OrderService.deleteOrder(id);
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
      title: `Название продукта`,
      dataIndex: 'productName',
      key: 'productName',
      fixed: 'left',
    },
    {
      title: `Дата начала аренды`,
      dataIndex: 'startDate',
      key: 'startDate',
      fixed: 'left',
      render: (text, record, index) => {
        return moment.unix(text / 1000).format('L');
      },
    },
    {
      title: `Дата конца аренды`,
      dataIndex: 'endDate',
      key: 'endDate',
      fixed: 'left',
      render: (text, record, index) => {
        return moment.unix(text / 1000).format('L');
      },
    },
    {
      title: `Заказчик`,
      dataIndex: 'username',
      key: 'username',
      fixed: 'left',
    },
    {
      title: `Общая стоимость заказа`,
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      fixed: 'left',
    },
    {
      title: `Адрес`,
      dataIndex: 'address',
      key: 'address',
      fixed: 'left',
    },
    {
      title: `Номер телефона`,
      dataIndex: 'phone',
      key: 'phone',
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
                  currentOrder: orders && {
                    ...orders.find((el) => el.id === id),
                  },
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
              title={'Вы действительно хотите удалить заказ?'}
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
      <OrderModal modalProps={modalProps} closeModal={closeModal} />
      <Table columns={columns} dataSource={orders}></Table>
    </React.Fragment>
  );
}
