
import "./App.css";
import React from 'react';
import { Layout, Button } from 'antd';
import { HomeOutlined, PlusCircleOutlined} from '@ant-design/icons';
import TodoList from "./components/TodoLIst/TodoList";


const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout>
        <Header style={{background:'#e1e9ed'}}>
          <div style={{display:'inline-block',marginRight:'1.5rem'}}>
            <HomeOutlined style={{color:'#3c4245'}}></HomeOutlined>
            <Button type="link" primary>Home</Button>
          </div>

          <div style={{display:'inline-block',marginRight:'1.5rem'}}>
          <PlusCircleOutlined style={{color:'#3c4245'}}/>
            <Button type="link" primary>Add new Task</Button>
          </div>
        </Header>
        <Content>
          <TodoList />
        </Content>
        <Footer>Footer</Footer>

    </Layout>
  );
};

export default App;
