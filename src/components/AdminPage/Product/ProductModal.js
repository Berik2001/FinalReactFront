import React, { useEffect } from 'react';
import { Modal, message, Form, Input } from 'antd';
import ProductService from '../../../services/ProductService';

export function ProductModal({ modalProps, closeModal }) {
  const { actionType, visible, currentProduct, currentCategory } = modalProps;
  const [form] = Form.useForm();

  const modalTitle = actionType === 'edit' ? `Редактирование продукта` : 'Создание продукта';
  const requiredMessage = `Это поле обязательно для заполенения`;

  const initialState = {
    price: null,
    image: null,
    description: null,
    name: null,
    category: {
      id: null,
      img: null,
      name: null,
    },
  };

  useEffect(() => {
    actionType === 'edit' && form.setFieldsValue(currentProduct);
  }, [actionType, currentProduct, form]);

  const onCreateCategory = () => {
    ProductService.createProduct({ category: { id: currentCategory }, ...form.getFieldsValue() })
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

  const onUpdateProduct = () => {
    ProductService.updateProduct(form.getFieldsValue())
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
      onOk={actionType === 'edit' ? onUpdateProduct : onCreateCategory}
      onCancel={() => closeModal()}
      okText={'Сохранить'}
      cancelText={'Отменить'}
      width={1000}>
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={actionType === 'edit' ? currentProduct : initialState}>
        <Form.Item name="id" style={{ display: 'none' }}>
          <Input type={'hidden'} />
        </Form.Item>
        <Form.Item
          name="name"
          label={'Наименование продукта'}
          rules={[{ required: true, message: requiredMessage }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label={'Описание продукта'}
          rules={[{ required: true, message: requiredMessage }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label={'Стоимость продукта'}
          rules={[{ required: true, message: requiredMessage }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="image"
          label={'Ссылка на изображение'}
          rules={[{ required: true, message: requiredMessage }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
