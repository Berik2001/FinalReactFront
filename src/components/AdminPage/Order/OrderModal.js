import React, { useEffect } from 'react';
import { Modal, message, Form, Input, DatePicker } from 'antd';
import OrderService from '../../../services/OrderService';
const { RangePicker } = DatePicker;

export function OrderModal({ modalProps, closeModal }) {
  const { actionType, visible, currentOrder } = modalProps;
  const [form] = Form.useForm();

  const modalTitle = actionType === 'edit' ? `Редактирование заказа` : 'Создание заказа';
  const requiredMessage = `Это поле обязательно для заполенения`;

  const initialState = {
    name: null,
    img: null,
  };
  useEffect(() => {
    actionType === 'edit' && form.setFieldsValue(currentOrder);
  }, [actionType, currentOrder, form]);

  const onUpdateOrder = () => {
    OrderService.updateOrder({
      ...form.getFieldsValue(),
      startDate: form.getFieldValue('date')[0].format('YYYY-MM-DD'),
      endDate: form.getFieldValue('date')[1].format('YYYY-MM-DD'),
    })
      .then((response) => {
        message.success('Успешно обновлено', 4);
        form.resetFields();
        closeModal();
      })
      .catch(() => {
        message.error('Ошибка при обновлении', 4);
        closeModal();
      });
  };

  return (
    <Modal
      title={modalTitle}
      visible={visible}
      onOk={onUpdateOrder}
      onCancel={() => closeModal()}
      okText={'Сохранить'}
      cancelText={'Отменить'}
      width={1000}>
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={actionType === 'edit' ? currentOrder : initialState}>
        <Form.Item name="id" style={{ display: 'none' }}>
          <Input type={'hidden'} />
        </Form.Item>
        <Form.Item
          name="productName"
          label={'Название продукта'}
          rules={[{ required: true, message: requiredMessage }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="date"
          label={'Дата начала аренды/Дата конца аренды'}
          rules={[{ required: true, message: requiredMessage }]}>
          <RangePicker />
        </Form.Item>
        <Form.Item
          name="username"
          label={'Заказчик'}
          rules={[{ required: true, message: requiredMessage }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="totalPrice"
          label={'Общая стоимость заказа'}
          rules={[{ required: true, message: requiredMessage }]}>
          <Input />
        </Form.Item>
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
