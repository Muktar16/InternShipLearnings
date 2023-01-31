
import { Button, Form, Input, Modal, Spin } from "antd";
import axios from "axios";
import React from "react"
import { useState } from "react";
import parse from 'html-react-parser'


const SignInModal = (props) => {

    const [open,setOpen] = useState(true);
    const [loading,setLoading] = useState(false);

    const handleCancel = ()=>{
        setOpen(false);
        props.setOpenSignInModal(false);
    }

    const onFinish = async(values) => {
        setLoading(true)
        axios.post(process.env.REACT_APP_apiBaseUrl+'/user/signin',values)
            .then((res)=>{
                Modal.success({
                    title:'Success',
                    content: (<div>{parse(res.data.message)}</div>)
                })
                localStorage.setItem('token', res.data.token);
                console.log(localStorage.getItem('token'))
                setLoading(false);
                setOpen(false);
                props.setOpenSignInModal(false);
            }).catch((err)=>{
                Modal.error({
                    title:'Oops!!...',
                    content: (<div>{parse(err.response.data)}</div>)
                })
                setLoading(false);
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
            <Form.Item label="user email" name="email"
                rules={[{required:true, message: "Please enter your email"}]}>
                <Input type="email" placeholder="User Email"/>
            </Form.Item>

            <Form.Item label="password" name="password" hasFeedback
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