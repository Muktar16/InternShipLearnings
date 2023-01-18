import React from "react";
import "./Topbar.css"
import {AppBar,Toolbar,useTheme,useMediaQuery,Tab,Tabs, Avatar, Button} from '@mui/material'
import { useState } from "react";
import TodoList from "../TodoLIst/TodoList";
import RecycleBin from "../RecycleBin/RecycleBin";
import AppDrawer from "../Drawar/Drawer";


export default function Topbar() {

  const [value,setValue] = useState(0);
  const theme = useTheme();
  console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'))
  console.log(isMatch)
  
  return (
    <React.Fragment>
      <AppBar sx={{background: '#457f8c'}}>
        <Toolbar variant="dense" sx={{height:'115px'}}>
        <Avatar sx={{height:'95px', width:'75px'}} alt="Logo" src="./logo2.png" variant="rounded"/>
          <h1 className="logo-text">Chemistry<span>Lab</span><br />
            <p className="logo-description">Natural Product Research Group</p>
          </h1>
            {isMatch?(<>
              <AppDrawer></AppDrawer>
            </>):(<>
              <Tabs textColor="#2b2727" sx={{paddingLeft:'40px',}} value={value} indicatorColor="secondary" onChange={(e,value)=>setValue(value)}>
              <Tab label="HOME" LinkComponent={<TodoList/>}/>
              <Tab label="ABOUT US" LinkComponent={RecycleBin}><RecycleBin/></Tab>
              <Tab label="PEOPLE"/>
              <Tab label="PUBLICATIONS"/>
              <Tab label="RESEARCH FACILITIES"/>
            </Tabs>
            <Button sx={{marginLeft:'auto '}} variant="contained">Login</Button>
            <Button sx={{marginLeft:'10px'}} variant="contained">SignUp</Button>
            </>)}
            
        
        </Toolbar>
        
      </AppBar>
    </React.Fragment>
    // <Header justify='center' style={{padding:0 ,textAlign:'center', position: 'sticky', top: 0, width: '100%' }}>
    //   <h1 style={{color:'white', paddingBottom:20}}>Task Management System</h1>
    //     {/* <Menu mode="horizontal" >
    //       <Menu.Item key="upcoming"><Link to="/upcoming" />Upcoming Todos</Menu.Item>
    //       <Menu.Item key="Recycle Bin"><Link to="/recycleBin" />Recycle Bin</Menu.Item>
    //       <Menu.Item> <span>{taskCounter.taskCounter} </span> <GroupOutlined /> Tasks</Menu.Item>
    //       <Menu.Item><span>{deleteTaskCounter.deleteTaskCounter} </span><DeleteOutlined/> Deleted</Menu.Item>
    //     </Menu> */}
    // </Header>
  );
}
