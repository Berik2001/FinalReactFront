import React, { useEffect } from 'react';
import { Modal, message, Form, Input } from 'antd';
import CategoryService from '../../../services/CategoryService';

export function CategoryModal({ modalProps, closeModal }) {
  const { actionType, visible, currentCategory } = modalProps;
  const [form] = Form.useForm();

  const modalTitle = actionType === 'edit' ? `Редактирование категории` : 'Создание категории';
  const requiredMessage = `Это поле обязательно для заполенения`;

  const initialState = {
    name: null,
    img: null,
  };

  useEffect(() => {
    actionType === 'edit' && form.setFieldsValue(currentCategory);
  }, [actionType, currentCategory, form]);

  const onCreateCategory = () => {
    CategoryService.createCategory(form.getFieldsValue())
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

  const onUpdateCategory = () => {
    CategoryService.updateCategory(form.getFieldsValue())
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
      onOk={actionType === 'edit' ? onUpdateCategory : onCreateCategory}
      onCancel={() => closeModal()}
      okText={'Сохранить'}
      cancelText={'Отменить'}
      width={1000}>
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={actionType === 'edit' ? currentCategory : initialState}>
        <Form.Item name="id" style={{ display: 'none' }}>
          <Input type={'hidden'} />
        </Form.Item>
        <Form.Item
          name="name"
          label={'Наименование категории'}
          rules={[{ required: true, message: requiredMessage }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="img"
          label={'Ссылка на изображение'}
          rules={[{ required: true, message: requiredMessage }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
