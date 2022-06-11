import React, { useEffect } from 'react';
import { Modal, message, Form, Input } from 'antd';
import OrderService from '../../services/OrderService';


export function BookingModal({ modalProps, closeModal }) {
  const { actionType, visible, bookingInfo } = modalProps;
  const [form] = Form.useForm();

  const modalTitle =  `Потверждение заказа`
  const requiredMessage = `Это поле обязательно для заполенения`;

  const initialState = {
    price: null,
    image: null,
    description: null,
    name: null,
    productPrice:null,
    category: {
      id: null,
      img: null,
      name: null,
    },
  };

  const onCreateOrder = () => {
      debugger
    OrderService.createOrder({ ...bookingInfo, ...form.getFieldsValue() })
      .then((response) => {
        message.success('Успешно создано', 4);
        form.resetFields();
        closeModal();
      })
      .catch(() => {
        message.error('Ошибка при создании', 4);
        closeModal();
      });
  };

  return (
    <Modal
      title={modalTitle}
      visible={visible}
      onOk={onCreateOrder}
      onCancel={() => closeModal()}
      okText={'Сохранить'}
      cancelText={'Отменить'}
      width={1000}>
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={initialState}>
        <Form.Item
          name="address"
          label={'Адрес'}
          rules={[{ required: true, message: requiredMessage }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label={'Номер телефона'}
          rules={[{ required: true, message: requiredMessage }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
