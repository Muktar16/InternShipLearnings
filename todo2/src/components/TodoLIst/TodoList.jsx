import React, { useEffect, useState } from "react";
import { Button, List, Row, Skeleton, message, Popconfirm } from "antd";
import ModalForm from "../ModalForm/ModalForm";
import { timeToDate } from "../Helpers/helper";
import moment from "moment";
import axios from 'axios';
// import { counterContext1, counterContext2, todoListContext } from "../../pages/home/Home";
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
  const [list, setList] = useState([]);
  const [effectController, setEffectController] = useState(true);
  const [itemToBeDelete, setItemToBeDelete] = useState();


  useEffect(() => {
    getTodoList();
  }, [effectController, itemCount]);

  const getTodoList = async () => {
    todoContext.setTaskCounter(todoContext?.todoList?.length);
    setInitLoading(false);
    setList(todoContext.todoList?.slice(0, itemCount * 5))
  }

  const confirm = async (e) => {
    const result = await axios.put(apiBaseUrl + "/todo/recycleBin/" + itemToBeDelete.id);
    if (result) {
      todoContext.setTaskCounter(todoContext?.taskCounter - 1);

      message.success('Deleted Successfully');
    }

    setEffectController(!effectController)
    todoContext.setDeleteTaskCounter(todoContext?.deleteTaskCounter + 1);
  };
  const cancel = (e) => {
    console.log(e);
  };


  const updateTodo = async (updatedTodo) => {
    setIsEditFormActive(false)
    updatedTodo.date = updatedTodo.date.toISOString().split('T')[0]
    updatedTodo.time = moment(updatedTodo.time.toString()).format('LT');
    console.log("Updated Todo", updateTodo);
    const header = { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" };
    const result = await axios.put(apiBaseUrl + '/todo/update/' + itemToBeUpdated.id, updatedTodo, { headers: header });
    setEffectController(!effectController);
    message.info('Updated Successfully');
    console.log(result.data);
  }

  const saveTodo = async (newTodo) => {
    console.log(newTodo)
    setIsAddFormActive(false);
    newTodo.date = newTodo.date.toISOString().split('T')[0];
    newTodo.time = moment(newTodo.time.toString()).format('LT');
    const header = { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" };
    const result = await axios.post(apiBaseUrl + '/todo/newtodo', newTodo, { headers: header });
    todoContext.setTaskCounter(todoContext.taskCounter + 1);
    message.info('Saved Successfully');

    setEffectController(!effectController);
    console.log(result.data);
  }


  const loadMore = (!loading) ? (
    <div style={{ textAlign: "center", marginTop: 12, height: 32, lineHeight: "32px" }}>
      <Button onClick={() => setItemCount(itemCount + 1)}>load more...</Button>
    </div>
  ) : null;


  return (
    <>
      {(isAddFormActive) ? <ModalForm modalTitle='Add New Task' callBackFunction={saveTodo}></ModalForm> : null}
      {(isEditFormActive) ? <ModalForm modalTitle='Edit Assignment' item={itemToBeUpdated} callBackFunction={updateTodo}></ModalForm> : null}


      <Row justify="end">
        <Button onClick={() => setIsAddFormActive(true)}>Add new</Button>
      </Row>

      <List className="demo-loadmore-list" loading={initLoading} itemLayout="horizontal" loadMore={loadMore} dataSource={list}
        renderItem={(item) => (
          <List.Item actions={[
            <a onClick={() => { setItemToBeUpdated(item); setIsEditFormActive(true) }} key="edit">
              Edit
            </a>,

            <Popconfirm zIndex={2} title="Delete the task" description="Are you sure to delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
              <a onClick={() => { setItemToBeDelete(item) }}>Move to Bin</a>
            </Popconfirm>
          ]}
          >
            <Skeleton avatar title={false} loading={loading} active>
              <List.Item.Meta
                title={item.name}
                description={`Due Date: ${moment(item.date.toString()).format(
                  "LL"
                )} at ${moment(timeToDate(item.time)).format('LT')}`}
              />
              <div className="flex-div">{item.note}</div>
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
};
export default TodoList;
