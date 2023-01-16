import React from "react";
import { Button, Form, Input, DatePicker, TimePicker, Modal } from "antd";
import { useState } from "react";
import moment from "moment";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const ModalForm = (props) => {
  const [form] = Form.useForm();

  let item = {};
  if (props.item) {
    form.setFieldsValue({
      name: props.item.name,
      date: dayjs(props.item.date.toString(), "YYYY-MM-DD"),
      time: dayjs(props.item.time, "HH:mm:ss"),
      note: props.item.note,
    });
  } else {
    item.name = "";
    item.date = null;
    item.time = null;
    item.note = "";
  }

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCancel = () => {
    setIsModalOpen(false);
    props.callBackFunction([]);
  };

  const onFinish = (values) => {
    console.log(values);
    props.callBackFunction(values);
    setIsModalOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title={props.modalTitle}
      open={isModalOpen}
      footer={null}
      onCancel={handleCancel}
    >
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item
          label="Task Title"
          name="name"
          rules={[
            { required: true, message: "Please enter a title for your task" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Due Date"
          name="date"
          rules={[{ required: true, message: "Please set a due date" }]}
        >
          <DatePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Set Time"
          name="time"
          rules={[{ required: true, message: "Please set a time" }]}
        >
          <TimePicker use12Hours format="h:mm a" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Note"
          name="note"
          rules={[
            {
              required: true,
              message: "Please enter a short note for your task",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalForm;
