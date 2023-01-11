import React from "react";
import { Button, Form, Input, DatePicker, TimePicker, Modal } from "antd";
import dayjs from "dayjs";
import moment from "moment";
import ButtonGroup from "antd/es/button/button-group";
import { useState } from "react";

const ModalForm = (props) => {

    const [isModalOpen,setIsModalOpen] = useState(props.isModalOpen);

  
      const handleCancel = () => {
        setIsModalOpen(false);
        props.callBackFunction([]);
      };

  const onFinish = (values) => {
    console.log("Success:", moment(values.time.toString()).format("LT"));
    props.callBackFunction(values);
    setIsModalOpen(false);
      
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const formTitle = (props.item)?`......Edit Task Details......`:`.....Add new Task......`;
  console.log(props.item)
  return (
    <Modal
      title={formTitle}
      open={isModalOpen}
      footer={null}
    //   onOk={handleOk}
       onCancel={handleCancel}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item
          label="Task Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please enter a title for your task",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Due Date"
          name="date"
          rules={[
            {
              required: true,
              message: "Please set a due date",
            },
          ]}
        >
          <DatePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Set Time"
          name="time"
          rules={[
            {
              required: true,
              message: "Please set a time",
            },
          ]}
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

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ModalForm;
