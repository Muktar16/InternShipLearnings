import { message, Row, List, Button, Popconfirm, Skeleton } from "antd";
import axios from "axios";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { timeToDate } from "../Helpers/helper";
import TodoContext from "../../context/todo/TodoContext";

const apiBaseUrl = `http://localhost:5432/api/v1`;

export default function RecycleBin() {

  const todoContext = useContext(TodoContext)

  const [recycleList,setRecycleList] = useState([]);
  const [initLoading, setInitLoading] = useState(true);
  const [loading] = useState(false);
  const [itemCount, setItemCount] = useState(1);
  const [itemToBeDelete, setItemToBeDelete] = useState();
  const [effectController, setEffectController] = useState(true);

  useEffect(() => {
    getRecycleList();
  }, [effectController, itemCount]);

  const getRecycleList = async () => {
    setInitLoading(true);
    const result = await axios.get(apiBaseUrl + "/todo/getRecycleBinList");
    todoContext.setDeleteTaskCounter(result?.data?.length);
    result?.data?.sort((a, b) => a.time.localeCompare(b.time));
    result?.data?.sort((a, b) => new Date(a.date) - new Date(b.date));
    setInitLoading(false);
    setRecycleList(result?.data?.slice(0, itemCount * 5));
  };

  const clearAll = async () => {
    const result = await axios.delete(apiBaseUrl + "/todo/deleteAll");
    if (result) message.success("Successfully cleared Recycle Bin");
    todoContext.setDeleteTaskCounter(0);
    setEffectController(!effectController);
  };

  const confirmRestore = async (id) => {
    const result = await axios.put(apiBaseUrl + "/todo/restore/" + id);
    if (result) message.success("Restored Successfully");
    todoContext.setDeleteTaskCounter(todoContext.deleteTaskCounter - 1);
    todoContext.setTaskCounter(todoContext.taskCounter + 1);
    setEffectController(!effectController);
  };

  const confirm = async (e) => {
    const result = await axios.delete(
      apiBaseUrl + "/todo/delete/" + itemToBeDelete.id
    );
    if (result) message.success("Deleted Successfully");
    setEffectController(!effectController);
    todoContext.setDeleteTaskCounter(todoContext.deleteTaskCounter - 1);
  };

  const loadMore = ( 
    <div style={{textAlign: "center",marginTop: 12, height: 32, lineHeight: "32px"}}>
      <Button onClick={() => setItemCount(itemCount + 1)}>
        load more...
      </Button>
    </div>
    )

  return (
    <>
    <Row justify="end">
      <Popconfirm title="Delete the task" description="Are you sure to delete this task?" onConfirm={clearAll} okText="Yes" cancelText="No">
        <Button>Clear All</Button>
      </Popconfirm>
    </Row>

    <List className="demo-loadmore-list" loading={initLoading} itemLayout="horizontal" loadMore={loadMore} dataSource={recycleList}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Popconfirm title="Restore" description="Are you sure you want to restore?" onConfirm={()=>{confirmRestore(item.id)}} okText="Yes" cancelText="No">
              <a onClick={()=>{setItemToBeDelete(item)}}>Restore</a>
            </Popconfirm>,

            <Popconfirm title="Delete the task" description="Are you sure to delete this task?" onConfirm={confirm} okText="Yes" cancelText="No">
              <a onClick={()=>{setItemToBeDelete(item)}}>Delete</a>
            </Popconfirm>,
          ]}>
          <Skeleton avatar title={false} loading={loading} active>
            <List.Item.Meta title={item.name} description={`Due Date: ${moment(item.date.toString()).format("LL")} at ${moment(timeToDate(item.time)).format("LT")}`}/>
            <div className="flex-div">{item.note}</div>
          </Skeleton>
        </List.Item>
      )}
    />
    </>
  );
}
