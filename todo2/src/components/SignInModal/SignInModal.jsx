
import { Button, Form, Input, Modal, Spin } from "antd";
import axios from "axios";
import React from "react"
import { useState } from "react";


const SignInModal = (props) => {

    const [open,setOpen] = useState(true);
    const [loading,setLoading] = useState(false);
    const handleCancel = ()=>{
        setOpen(false);
        props.setOpenSignInModal(false);
    }

    const onFinish = async(values) => {
        axios.post(process.env.REACT_APP_apiBaseUrl+'/user/signin',values)
            .then((res)=>{

            }).catch((err)=>{

            })
    };

    const onFinishFailed = (errorInfo) => {
        Modal.error({
            title:'Error!!',
            content:errorInfo
        })
    };

    return (<React.Fragment>
        <Modal title="Sign In" open={open} footer={null} onCancel={handleCancel}>
            <Spin spinning={loading}>
            <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="on">
            <Form.Item label="Task Title" name="email"
                rules={[{required:true, message: "Please enter your email"}]}>
                <Input type="email" placeholder="User Email"/>
            </Form.Item>

            <Form.Item label="Note" name="note" hasFeedback
                rules={[{required: true, message: "Please enter your password"}]}>
                <Input.Password placeholder="Password"/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
            </Form>
            </Spin>
        </Modal>
    </React.Fragment>)
}

export default SignInModal;