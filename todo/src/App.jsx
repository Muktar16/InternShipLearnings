
import "./App.css";
import React from 'react';
import { Layout, theme,Space } from 'antd';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import NewTodo from './components/NewTodo/NewTodo';

const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Router>
    <Layout>
      <nav>
        <div className="nav-items">
          <button><Link className="nav-item" to='/'>Home</Link></button>
          <button><Link className="nav-item" to='/addnew'>Add New</Link></button>
        </div>
        <h1 className="heading">To Do List - Schedule Planner</h1>
      </nav>
      {/* <Header className="header">
        <div className="nav-items">
          <button><Link className="nav-item" to='/'>Home</Link></button>
          <button><Link className="nav-item" to='/addnew'>Add New</Link></button>
        </div>
        <h1 className="heading">To Do List - Schedule Planner</h1>
      </Header> */}
      
      <Content className="site-layout" style={{ display:"flex", width:'100%', padding: '2rem 2rem 0rem', } }>
        <div style={{width:'100%', padding: 24, minHeight: 'auto', background: colorBgContainer }}>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/addnew" element={<NewTodo/>}/>
          </Routes>
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>ToDo List</Footer>
    </Layout>
    </Router>
     
  );
};

export default App;
