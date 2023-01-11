import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import TodoList from "../../components/TodoLIst/TodoList"
import { Layout, theme ,Button, Row} from 'antd';

const {Content} = Layout;

export default function Home(){
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    
      return (
        <Layout>
          <Topbar></Topbar>      
          <Content className="site-layout" style={{ padding: '0 50px' }}>
            <div style={{ padding: 24, minHeight: '100vh', background: colorBgContainer }}>
              <TodoList></TodoList>
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
      );
}