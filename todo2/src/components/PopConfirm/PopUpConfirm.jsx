import { message, Popconfirm } from "antd";
import axios from "axios";
import { useState } from "react";
const apiBaseUrl = `http://localhost:5432/api/v1`;

const PopUpConfirm = (props) => {
  const [openPopUp, setOpenPopUp] = useState(true);
  const confirm = async (e) => {
    const result = await axios.put(
      apiBaseUrl + "/todo/recycleBin/" + props.item.id
    );
    if (result) message.info("Updated Successfully");
    setOpenPopUp(false);
    console.log(e);
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    setOpenPopUp(false);
    console.log(e);
    message.error("Click on No");
  };

  return (
    <Popconfirm
      open={openPopUp}
      title={props.title}
      description={props.description}
      onConfirm={confirm}
      onCancel={cancel}
      okText={props.okText}
      cancelText={props.cancelText}
    ></Popconfirm>
  );
};

export default PopUpConfirm;
