
import "./Home.css";
import React from 'react';
import { Drawer} from 'antd';
import {MenuOutlined} from '@ant-design/icons'
import AppMenu from '../../components/AppMenu/AppMenu';
import { useState } from 'react';


function Home(){

  const [openMenu,setOpenMenu] = useState(false);

  return(
    <div>
      <div 
        style={{
          backgroundColor:'blueviolet', 
          height:60,
          paddingTop:12,
          paddingLeft:12
        }}
        >
          <MenuOutlined 
            style={{
              color:'white',
              fontSize: 30
            }}
            onClick={()=>{
              setOpenMenu(true);
            }}
            className="menuIcon"
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
        bodyStyle={{backgroundColor:'blueviolet'}}
        placement="left"
      >
        <AppMenu isInline></AppMenu>
      </Drawer>
    </div>
  );
}

export default Home;
