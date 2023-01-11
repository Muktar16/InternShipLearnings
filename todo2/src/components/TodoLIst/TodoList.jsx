import React, { useEffect, useState } from "react";
import { Button, List, Row, Skeleton,message } from "antd";
import ModalForm from "../ModalForm/ModalForm";
import moment from "moment";
import axios from 'axios';
const apiBaseUrl = `http://localhost:5432/api/v1`;

const timeToDate = (time) => {
  let tempTime = time.split(":");
  let dt = new Date();
  dt.setHours(tempTime[0]);
  dt.setMinutes(tempTime[1]);
  dt.setSeconds(tempTime[2]);
  return dt;
}


const TodoList = () => {

  const [isEditFormActive,setIsEditFormActive] = useState(false);
  const [itemCount,setItemCount] = useState(1);
  const [itemToBeUpdated,setItemToBeUpdated] = useState([]);
  const [isAddFormActive, setIsAddFormActive] = useState(false);
  const [initLoading, setInitLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(apiBaseUrl+"/todo/getAll")
      .then((res) => res.json())
      .then((res) => {
        //sort according to time, then date
        res.sort((a, b)=> a.time.localeCompare(b.time));
        res.sort((a, b)=> ((new Date(a.date))-(new Date(b.date) )))
        setInitLoading(false);
        setList(res.slice(0,itemCount*5));
    });
  }, [itemCount]);


  const loadMore = (!initLoading && !loading) ? (
      <div style={{textAlign: "center", marginTop: 12, height: 32, lineHeight: "32px"}}>
        <Button onClick={()=>setItemCount(itemCount+1)}>load more...</Button>
      </div>
    ) : null;


  const openDeletePopUp = (item) => {
    console.log("Delete button clicked", item);
  };

  const updateTodo = async(updatedTodo)=>{
    setIsEditFormActive(false)
    updatedTodo.date = updatedTodo.date.toISOString().split('T')[0]
    updatedTodo.time = moment(updatedTodo.time.toString()).format('LT');
    const header = { 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*" };
    const result = await axios.post(apiBaseUrl+'/todo/update',updatedTodo,{headers: header});
    message.info('Updated Successfully');
    setItemCount(itemCount);
    console.log(result.data);
  }

  const saveTodo = async(newTodo)=>{
    setIsAddFormActive(false);
    newTodo.date = newTodo.date.toISOString().split('T')[0];
    newTodo.time = moment(newTodo.time.toString()).format('LT');
    const header = { 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*" };
    const result = await axios.post(apiBaseUrl+'/todo/newtodo',newTodo,{headers: header});
    message.info('Saved Successfully');
    setItemCount(itemCount);
    console.log(result.data);
  }

  return (
    <>
    {(isAddFormActive)?<ModalForm  modalTitle='Add New Task'  callBackFunction={saveTodo}></ModalForm>:null}
    {(isEditFormActive)?<ModalForm modalTitle='Edit Assignment' item={itemToBeUpdated} callBackFunction={updateTodo}></ModalForm>:null}

      <Row justify="end">
        <Button onClick={() => setIsAddFormActive(true)}>Add new</Button>
      </Row>
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a onClick={() => {setItemToBeUpdated(item); setIsEditFormActive(true)}} key="edit">
                Edit
              </a>,
              <a onClick={() => openDeletePopUp(item)} key="delete">
                Delete
              </a>,
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
