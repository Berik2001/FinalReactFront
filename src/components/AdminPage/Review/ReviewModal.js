import React, { useEffect } from 'react';
import { Modal, message, Form, Input } from 'antd';
import ReviewService from '../../../services/ReviewService';

export function ReviewModal({ modalProps, closeModal }) {
  const { actionType, visible, currentReview } = modalProps;
  const [form] = Form.useForm();

  const modalTitle = 'Редактирование отзыва';
  const requiredMessage = `Это поле обязательно для заполенения`;

  const initialState = {
    price: null,
    image: null,
    description: null,
    name: null,
  };

  useEffect(() => {
    actionType === 'edit' && form.setFieldsValue(currentReview);
  }, [actionType, currentReview, form]);

  const onUpdateCategory = () => {
    ReviewService.updateReview(form.getFieldsValue())
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
      onOk={actionType === 'edit' && onUpdateCategory}
      onCancel={() => closeModal()}
      okText={'Сохранить'}
      cancelText={'Отменить'}
      width={1000}>
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={actionType === 'edit' ? currentReview : initialState}>
        <Form.Item name="id" style={{ display: 'none' }}>
          <Input type={'hidden'} />
        </Form.Item>
        <Form.Item
          name="review"
          label={'Имя'}
          rules={[{ required: true, message: requiredMessage }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="reviewUsername"
          label={'Имя пользователя'}
          rules={[{ required: true, message: requiredMessage }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="reviewDesc"
          label={'Отзыв'}
          rules={[{ required: true, message: requiredMessage }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
