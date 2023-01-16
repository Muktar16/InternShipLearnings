import React from "react";
import { Button, Layout, Menu, Tabs } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, GroupOutlined } from "@ant-design/icons";
import { counterContext1, counterContext2 } from "../../pages/home/Home";
import { useContext } from "react";

const { Header } = Layout;

export default function Topbar() {
  const taskCounter = useContext(counterContext1);
  const deleteTaskCounter = useContext(counterContext2);
  console.log("delete Count", deleteTaskCounter.deleteTaskCounter);


  return (
    <Header style={{padding:0, position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <Menu mode="horizontal" >
          <Menu.Item key="upcoming"><Link to="/upcoming" />Upcoming Todos</Menu.Item>
          <Menu.Item key="Recycle Bin"><Link to="/recycleBin" />Recycle Bin</Menu.Item>
          <Menu.Item> <span>{taskCounter.taskCounter} </span> <GroupOutlined /> Tasks</Menu.Item>
          <Menu.Item><span>{deleteTaskCounter.deleteTaskCounter} </span><DeleteOutlined/> Deleted</Menu.Item>
        </Menu>
    </Header>
    
  );
}
