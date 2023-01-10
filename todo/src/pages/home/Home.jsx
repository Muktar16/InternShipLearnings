
import React from 'react';
import { Layout } from 'antd';
import AppHeader from '../../components/Header/Header';
const { Header} = Layout;


function Home(){

  return(
    <Layout className="mainLayout">
      <Header theme='white' style={{background:'white'}}>
        <AppHeader></AppHeader>
      </Header>
    </Layout>
  );
}

export default Home;
