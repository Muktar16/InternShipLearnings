
import React from 'react';
import './App.css';
import 'antd/dist/reset.css';

import AppHeader from './components/Header/Header';


import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      {/* <Content>
        <AppHome/>
      </Content>
      <Footer>
        <AppFooter/>  
      </Footer>       */}
    </Layout>
  );
}

export default App;
