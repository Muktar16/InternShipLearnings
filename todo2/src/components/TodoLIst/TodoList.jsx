import React, { useEffect, useState } from "react";
import { Button, List, Row, Skeleton, message, Popconfirm } from "antd";
import ModalForm from "../ModalForm/ModalForm";
import { timeToDate } from "../Helpers/helper";
import moment from "moment";
import axios from 'axios';
import { useContext } from "react";
import TodoContext from "../../context/todo/TodoContext";
const apiBaseUrl = `http://192.168.0.140:5432/api/v1`;


const TodoList = () => {

  const todoContext = useContext(TodoContext);

  const [isEditFormActive, setIsEditFormActive] = useState(false);
  const [itemCount, setItemCount] = useState(1);
  const [itemToBeUpdated, setItemToBeUpdated] = useState([]);
  const [isAddFormActive, setIsAddFormActive] = useState(false);
  const [initLoading, setInitLoading] = useState(true);
  const [loading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [effectController, setEffectController] = useState(true);
  const [itemToBeDelete, setItemToBeDelete] = useState();


  useEffect(() => {
    getTodoList();
  },[effectController, itemCount]);

  const getTodoList = async () => {
    setInitLoading(true);
    const result = await axios.get(apiBaseUrl+'/todo/getAll');
    result?.data?.sort((a, b) => a.time.localeCompare(b.time));
    result?.data?.sort((a, b) => new Date(a.date) - new Date(b.date));
    todoContext.setTaskCounter(result?.data?.length);
    setTodoList(result?.data?.slice(0,itemCount*5))
    setInitLoading(false);
  }
  
  const confirmDelete = async (e) => {
    const result = await axios.put(apiBaseUrl + "/todo/recycleBin/" + itemToBeDelete.id);
    if (result) {
      todoContext.setTaskCounter(todoContext?.taskCounter - 1);
      todoContext.setDeleteTaskCounter(todoContext?.deleteTaskCounter + 1);
      setEffectController(!effectController);
      message.success('Successfully Moved to The Recycle Bin');
    }
  };

  const updateTodo = async (updatedTodo) => {
    setIsEditFormActive(false)
    updatedTodo.date = updatedTodo.date.toISOString().split('T')[0]
    updatedTodo.time = moment(updatedTodo.time.toString()).format('LT');
    const result = await axios.put(apiBaseUrl + '/todo/update/' + itemToBeUpdated.id,updatedTodo);
    setEffectController(!effectController)
    message.info('Updated Successfully');
  }

  const saveTodo = async (newTodo) => {
    setIsAddFormActive(false);
    newTodo.date = newTodo.date.toISOString().split('T')[0];
    newTodo.time = moment(newTodo.time.toString()).format('LT');
    const result = await axios.post(apiBaseUrl + '/todo/newtodo', newTodo);
    todoContext.setTaskCounter(todoContext.taskCounter + 1);
    message.info('Saved Successfully');
    setEffectController(!effectController);
  }

  const loadMore = (
    <div style={{ textAlign: "center", marginTop: 12, height: 32, lineHeight: "32px" }}>
      <Button onClick={() => setItemCount(itemCount + 1)}>load more...</Button>
    </div>
  ) 

  return (
    <>
    {(isAddFormActive) ? <ModalForm modalTitle='Add New Task' callBackFunction={saveTodo}></ModalForm> : null}
    {(isEditFormActive) ? <ModalForm modalTitle='Edit Assignment' item={itemToBeUpdated} callBackFunction={updateTodo}></ModalForm> : null}

    <Row justify="end">
      <Button onClick={() => setIsAddFormActive(true)}>Add new</Button>
    </Row>

    <List className="demo-loadmore-list" loading={initLoading} itemLayout="horizontal" loadMore={loadMore} dataSource={todoList}
      renderItem={(item) => (
        <List.Item actions={[
          <a onClick={() => { setItemToBeUpdated(item); setIsEditFormActive(true) }} key="edit">Edit</a>,

          <Popconfirm zIndex={2} title="Delete the task" description="Are you sure to delete this task?" onConfirm={confirmDelete} okText="Yes" cancelText="No">
            <a onClick={() => { setItemToBeDelete(item) }}>Move to Bin</a>
          </Popconfirm>
        ]}>
          <Skeleton avatar title={false} loading={loading} active>
            <List.Item.Meta title={item.name} description={`Due Date: ${moment(item.date.toString()).format("LL")} at ${moment(timeToDate(item.time)).format('LT')}`}/>
            <div className="flex-div">{item.note}</div>
          </Skeleton>
        </List.Item>
      )}
    />
  </>
);
}
export default TodoList;
