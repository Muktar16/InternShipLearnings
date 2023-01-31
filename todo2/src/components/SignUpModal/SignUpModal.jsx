
import { Button, DatePicker, Form, Input, message, Modal, Spin, TimePicker } from "antd";
import axios from "axios";
import React, { useState } from "react";
import parse from 'html-react-parser';

export default function SignUpModal(props) {

    const [open,setOpen] = useState(true);
    const [loading,setLoading] = useState(false);

    const handleCancel = () => {
        setOpen(false);
        props.setOpenSignUpModal(false);
    }

    const onFinish = async(values) => {
        setLoading(true)
        const user = {
            userName : values.userName,
            email: values.email,
            password: values.password
        }
        console.log(process.env.REACT_APP_apiBaseUrl)
        axios.post(process.env.REACT_APP_apiBaseUrl+'/user/signUp',user)
            .then((res)=>{
                
                Modal.info({
                    title:"Success",
                    content: (<div>{parse(res.data)}</div>)
                })
                setLoading(false);
                props.setOpenSignUpModal(false);
                setOpen(false);
            })
            .catch(error=>{
                console.log(error)
                Modal.error({
                    title:"Oops.....",
                    content: (<div>{parse(error.response.data)}</div>)
                })
                setLoading(false);
            });
        
    };
    const onFinishFailed = (errorInfo) => {
        Modal.error({
            title:'Error!!',
            content:errorInfo
        })
    };
 

    return (<React.Fragment>
        
        <Modal open={open} onCancel={handleCancel} footer={false} title="Sign Up Form">
            <Spin spinning={loading}>
            <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="on">
                <Form.Item label="User Name" name="userName"
                    rules={[{required:true, message: "Please enter your user Name"}]}>
                    <Input type="text" placeholder="Username"/>
                </Form.Item>

                <Form.Item label="Email address" name="email"
                    rules={[{ required: true, message: "Please provide your email address" }]}>
                    <Input placeholder="email" type="email"/>
                </Form.Item>

                <Form.Item name="password" label="Password" hasFeedback
                    rules={[{required: true,message: 'Please input your password!',},]}>
                    <Input.Password placeholder='password'/>
                </Form.Item>

                <Form.Item name="confirm" label="Confirm Password" dependencies={['password']} hasFeedback
                    rules={[{required: true,message: 'Please confirm your password!',},
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder='Confirm password'/>
                </Form.Item>
                
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button style={{marginLeft:'30px'}} type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
            </Spin>
        </Modal>
        
    </React.Fragment>)
}

