import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import { Avatar, Badge, Layout, Row, Space, Tabs, theme } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecycleBin from "../../components/RecycleBin/RecycleBin";
import { useState } from "react";
import { createContext } from "react";
import TabPane from "antd/es/tabs/TabPane";
import { GroupOutlined,DeleteOutlined } from "@ant-design/icons";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";
import TodoList from "../../components/TodoLIst/TodoList";

const { Content } = Layout;
const counterContext1 = createContext();
const counterContext2 = createContext();

export default function Home() {
  const [taskCounter, setTaskCounter] = useState(0);
  const [deleteTaskCounter, setDeleteTaskCounter] = useState(0);

  const operations = (
    <>
      <Space style={{ paddingLeft: "2rem" }}>
        <Badge count={taskCounter}>
          <Avatar shape="circle" size="large" ><GroupOutlined></GroupOutlined> </Avatar>
        </Badge>
        <Badge count={deleteTaskCounter} showZero>
          <Avatar shape="circle" size="large" ><DeleteOutlined></DeleteOutlined> </Avatar>
        </Badge>
      </Space>
    </>
  );

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <counterContext1.Provider value={{ taskCounter, setTaskCounter }}>
      <counterContext2.Provider
        value={{ deleteTaskCounter, setDeleteTaskCounter }}
      >
        <Router>
        {/* <ResponsiveAppBar></ResponsiveAppBar> */}
        {/* <Topbar></Topbar> */}
          <Layout>
          
            <Content className="site-layout" style={{ padding: "0 50px" }}>
              <div
                style={{
                  padding: 24,
                  minHeight: "100vh",
                  background: colorBgContainer,
                }}
              >
                <Tabs style={{position:'static'}} tabBarExtraContent={operations}>
                  <TabPane tab={`Upcoming Task(${taskCounter})`} key="1">
                    <TodoList></TodoList>
                  </TabPane>
                  <TabPane tab={`Recycle Bin(${deleteTaskCounter})`} key="2">
                    <RecycleBin></RecycleBin>
                  </TabPane>
                  <TabPane tab="About" key="3"></TabPane>
                </Tabs>
              </div>
            </Content>
          </Layout>
        </Router>

        {/* <Router>
          <Layout>
            <Topbar></Topbar>
            <Content className="site-layout" style={{ padding: "0 50px" }}>
              <div
                style={{
                  padding: 24,
                  minHeight: "100vh",
                  background: colorBgContainer,
                }}
              >
                <Routes>
                  <Route exact path="/" element={<TodoList />} />
                  <Route path="/upcoming" element={<TodoList />} />
                  <Route path="/recycleBin" element={<RecycleBin />} />
                </Routes>
              </div>
            </Content>
          </Layout>
        </Router> */}
      </counterContext2.Provider>
    </counterContext1.Provider>
  );
}

export { counterContext1, counterContext2 };
