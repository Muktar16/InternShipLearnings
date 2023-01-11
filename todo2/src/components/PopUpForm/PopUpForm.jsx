import React, { useState } from 'react';
import { Button, Modal } from 'antd';


const PopUpForm = (props) => {
    console.log("Hi")

    const [isModalOpen, setIsModalOpen] = useState(true);
    
    const handleOk = () => {
        // setIsModalOpen(false);
    };
    const handleCancel = () => {
        // setIsModalOpen(false);
    };
    return (
        <>
            <Modal title="Basic Modal" open={true} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};
export default PopUpForm;