import React, { useEffect } from 'react';
import { Modal, message, Form, Input } from 'antd';
import QuestionService from '../../../services/QuestionService';

export function QuestionModal({ modalProps, closeModal }) {
  const { actionType, visible, currentQuestion } = modalProps;
  const [form] = Form.useForm();

  const modalTitle = 'Редактирование вопроса';
  const requiredMessage = `Это поле обязательно для заполенения`;

  const initialState = {
    name: null,
    email: null,
    question: null,
  };

  useEffect(() => {
    actionType === 'edit' && form.setFieldsValue(currentQuestion);
  }, [actionType, currentQuestion, form]);

  const onUpdateQuestion = () => {
    QuestionService.updateQuestion(form.getFieldsValue())
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
      onOk={onUpdateQuestion}
      onCancel={() => closeModal()}
      okText={'Сохранить'}
      cancelText={'Отменить'}
      width={1000}>
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={actionType === 'edit' ? currentQuestion : initialState}>
        <Form.Item name="id" style={{ display: 'none' }}>
          <Input type={'hidden'} />
        </Form.Item>
        <Form.Item
          name="name"
          label={'Имя пользователя'}
          rules={[{ required: true, message: requiredMessage }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label={'Email'}
          rules={[{ required: true, message: requiredMessage }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="question"
          label={'Вопрос'}
          rules={[{ required: true, message: requiredMessage }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
