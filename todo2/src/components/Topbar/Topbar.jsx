
import React from 'react';
import { Layout, Menu } from 'antd';
const { Header} = Layout;

export default function Topbar(){
    return(
    <Header style={{padding:0, position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <Menu mode="horizontal" defaultSelectedKeys={['upcoming']}>
          <Menu.Item key="upcoming">Upcoming Todos</Menu.Item>
          <Menu.Item key="completed">Completed Todos</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="Recycle Bin">Recycle Bin</Menu.Item>
        </Menu>
    </Header>
    )
}

