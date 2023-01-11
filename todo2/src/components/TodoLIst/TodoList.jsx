import React, { useEffect, useState } from "react";
import { Avatar, Button, List, Modal, Row, Skeleton } from "antd";
import PopUpForm from "../PopUpForm/PopUpForm";
import ModalForm from "../ModalForm/ModalForm";
import moment from "moment";
const count = 5;
//const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const DemoTodos = [
  {
    id: "1",
    name: "Assignment-1",
    date: new Date(2022, 12, 2),
    time: "8:40am",
    note: "this is a short note about the task",
  },
  {
    id: "2",
    name: "Assignment-2",
    date: new Date(2022, 12, 2),
    time: "8:40am",
    note: "this is a short note about the task",
  },
  {
    id: "3",
    name: "Assignment-3",
    date: new Date(2022, 12, 2),
    time: "8:40am",
    note: "this is a short note about the task",
  },
  {
    id: "1",
    name: "Assignment-1",
    date: new Date(2022, 12, 2),
    time: "8:40am",
    note: "this is a short note about the task",
  },
];

const TodoList = () => {
  const [isModalForm, setIsModalForm] = useState(false);
  const [initLoading, setInitLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  //const [data, setData] = useState(demoData);
  const [list, setList] = useState(DemoTodos);

  // useEffect(() => {
  //     fetch(fakeDataUrl)
  //         .then((res) => res.json())
  //         .then((res) => {
  //             setInitLoading(false);
  //             setData(res.results);
  //             setList(res.results);
  //         });
  // }, []);

  async function onLoadMore() {
    setLoading(true);
    setTimeout(() => { }, 10000);
    setList(
      list.concat([
        {
          id: "1",
          name: "Assignment-1",
          date: new Date(2022, 12, 2),
          time: "8:40am",
          note: "this is a short note about the task",
        },
        {
          id: "1",
          name: "Assignment-1",
          date: new Date(2022, 12, 2),
          time: "8:40am",
          note: "this is a short note about the task",
        },
        {
          id: "1",
          name: "Assignment-1",
          date: new Date(2022, 12, 2),
          time: "8:40am",
          note: "this is a short note about the task",
        },
        {
          id: "1",
          name: "Assignment-1",
          date: new Date(2022, 12, 2),
          time: "8:40am",
          note: "this is a short note about the task",
        },
        {
          id: "1",
          name: "Assignment-1",
          date: new Date(2022, 12, 2),
          time: "8:40am",
          note: "this is a short note about the task",
        },
      ])
    );
    setLoading(false);
  }
  // const onLoadMore = () => {
  //     setLoading(true);
  //     setList(
  //         data.concat(
  //             [...new Array(count)].map(() => ({
  //                 loading: true,
  //                 name: {},
  //                 picture: {},
  //             })),
  //         ),
  //     );
  //     fetch(fakeDataUrl)
  //         .then((res) => res.json())
  //         .then((res) => {
  //             const newData = data.concat(res.results);
  //             setData(newData);
  //             setList(newData);
  //             setLoading(false);
  //             // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
  //             // In real scene, you can using public method of react-virtualized:
  //             // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
  //             window.dispatchEvent(new Event('resize'));
  //         });
  // };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>load more...</Button>
      </div>
    ) : null;

    let itemToBeUpdated = null
  const openEditForm = (item) => {
    itemToBeUpdated = item;
    setIsModalForm(true);
  };
  const openDeletePopUp = (item) => {
    console.log("Delete button clicked", item);
  };

 const addButtonHandler = ()=>{
    setIsModalForm(true);
 }

 const afterFormSubmision = (FormData)=>{
    console.log(FormData);
    setIsModalForm(false);
    //setList(list.unshift(tempTodo));
 }

  return (
    <>
    {(isModalForm)?<ModalForm item={itemToBeUpdated} isModalOpen={true} callBackFunction={afterFormSubmision}></ModalForm>:null}
    
      <Row justify="end">
        <Button onClick={() => addButtonHandler()}>Add new</Button>
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
              <a onClick={() => openEditForm(item)} key="edit">
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
                )} at ${item.time}`}
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
