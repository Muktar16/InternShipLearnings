import { message, Row, List, Button, Popconfirm, Skeleton } from "antd";
import axios from "axios";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { timeToDate } from "../Helpers/helper";
import { counterContext1,counterContext2 } from "../../pages/home/Home";

const apiBaseUrl = `http://localhost:5432/api/v1`;

export default function RecycleBin() {

    const taskCounter = useContext(counterContext1);
  const deleteTaskCounter = useContext(counterContext2);

  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [itemCount, setItemCount] = useState(1);
  const [list, setList] = useState([]);
  const [itemToBeDelete, setItemToBeDelete] = useState();
  const [effectController, setEffectController] = useState(true);

  useEffect(() => {
    getTodoLIst();
  }, [effectController, itemCount]);

  const getTodoLIst = async () => {
    setInitLoading(true);
    const result = await axios.get(apiBaseUrl + "/todo/getRecycleBinList");
    const fullList = result?.data;
    console.log("recycle list size ",fullList.length)
    deleteTaskCounter.setDeleteTaskCounter(fullList.length);
    console.log("counter-2 ",deleteTaskCounter.deleteTaskCounter)
    fullList.sort((a, b) => a.time.localeCompare(b.time));
    fullList.sort((a, b) => new Date(a.date) - new Date(b.date));
    setInitLoading(false);
    setList(fullList.slice(0, itemCount * 5));
  };

  const clearAll = async () => {
    const result = await axios.delete(apiBaseUrl + "/todo/deleteAll");
    if (result) message.success("Successfully cleared Recycle Bin");
    deleteTaskCounter.setDeleteTaskCounter(0);
    setEffectController(!effectController);
  };

  const confirmRestore = async (id) => {
    console.log(id);
    const result = await axios.put(apiBaseUrl + "/todo/restore/" + id);
    if (result) message.success("Restored Successfully");
    deleteTaskCounter.setDeleteTaskCounter(deleteTaskCounter.deleteTaskCounter-1);
    taskCounter.setTaskCounter(taskCounter.taskCounter+1);
    setEffectController(!effectController);
  };

  const cancelRestore = async () => {};

  const confirm = async (e) => {
    const result = await axios.delete(
      apiBaseUrl + "/todo/delete/" + itemToBeDelete.id
    );
    if (result) message.success("Deleted Successfully");
    setEffectController(!effectController);
    deleteTaskCounter.setDeleteTaskCounter(deleteTaskCounter.deleteTaskCounter-1);
  };
  const cancel = (e) => {
    console.log(e);
  };
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
        <Button onClick={() => setItemCount(itemCount + 1)}>
          load more...
        </Button>
      </div>
    ) : null;

  return (
    <>
      <Row justify="end">
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => {
            clearAll();
          }}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button>Clear All</Button>
        </Popconfirm>
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
              <Popconfirm
                title="Restore"
                description="Are you sure you want to restore?"
                onConfirm={() => {
                  confirmRestore(item.id);
                }}
                onCancel={cancelRestore}
                okText="Yes"
                cancelText="No"
              >
                <a
                  onClick={() => {
                    setItemToBeDelete(item);
                  }}
                >
                  Restore
                </a>
              </Popconfirm>,

              <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <a
                  onClick={() => {
                    setItemToBeDelete(item);
                  }}
                >
                  Delete
                </a>
              </Popconfirm>,
            ]}
          >
            <Skeleton avatar title={false} loading={loading} active>
              <List.Item.Meta
                title={item.name}
                description={`Due Date: ${moment(item.date.toString()).format(
                  "LL"
                )} at ${moment(timeToDate(item.time)).format("LT")}`}
              />
              <div className="flex-div">{item.note}</div>
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
}
