
import "./Home.css";
import { Drawer} from 'antd';
import {MenuOutlined} from '@ant-design/icons'
import AppMenu from '../../components/AppMenu/AppMenu';
import { useState} from 'react';
import React from 'react';
import TodoList from "../../components/TodoLIst/TodoList";



function Home(){

  const [openMenu,setOpenMenu] = useState(false);

  return(
    <>
    <div className="nav-bar">
      <div 
        style={{
          backgroundColor:'#010d14', 
          height:60,
          paddingTop:12,
          paddingLeft:12
        }}
        className="menuIcon"
        >
          <MenuOutlined 
            style={{
              color:'white',
              fontSize: 20
            }}
            onClick={()=>{
              setOpenMenu(true);
            }}
        />
      </div>
      
      <span className='headerMenu'>
        <AppMenu></AppMenu>
      </span>
      <Drawer 
        open={openMenu}
        onClose={()=>{
          setOpenMenu(false);
        }}
        closable={false}
        bodyStyle={{backgroundColor:'#010d14'}}
        placement="left"
      >
        <AppMenu isInline></AppMenu>
      </Drawer>
    </div>

    <div className="mainContainer">
        <div className="middle-panel">
          <TodoList></TodoList>
        </div>
    </div>
    </>
  );
}

export default Home;
