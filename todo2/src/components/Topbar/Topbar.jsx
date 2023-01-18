import React from "react";
import "./Topbar.css"
import { AppBar, Toolbar, Avatar, Tabs, Tab, Badge } from '@mui/material'
import { useState } from "react";
import ListAltIcon from '@mui/icons-material/ListAlt';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import TodoList from "../TodoLIst/TodoList";
import TabContext from '@mui/lab/TabContext';
import { TabPanel } from '@mui/lab';
import { useContext } from "react";
import TodoContext from "../../context/todo/TodoContext";


export default function Topbar() {

  const todoContext = useContext(TodoContext)
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <TabContext value={value}>
        <AppBar position="sticky" sx={{ background: '#457f9c',zIndex:1 }}>
          <Toolbar variant="dense" sx={{ height: '115px' }}>
            <Avatar sx={{ height: '90px', width: '70px' }} alt="Logo" src="./logo2.png" variant="rounded" />
            <h1 className="logo-text">Task<span>Manager</span><br />
              <p className="logo-description">Manage Your Regular Task</p>
            </h1>
            <Tabs textColor="white" value={value} onChange={handleChange} indicatorColor='secondary' sx={{ marginLeft: '40px' }}>
              <Tab label="Current List" value="1" />
              <Tab label="Recycle Bin" value="2" />
              <Tab label="About" value="3" />
            </Tabs>
            <Badge badgeContent={todoContext.taskCounter} sx={{ marginLeft: 'auto' }} color="secondary">
              <ListAltIcon fontSize="large" color="white" />
            </Badge>
            <Badge badgeContent={todoContext.deleteTaskCounter} sx={{ marginLeft: '40px', marginRight: '40px' }} color="secondary">
              <DeleteOutlinedIcon fontSize="large" color="white" />
            </Badge>
          </Toolbar>
        </AppBar>
        <TabPanel value="1"><TodoList></TodoList></TabPanel>
        <TabPanel value="2"></TabPanel>
        <TabPanel value="3"></TabPanel>
      </TabContext>
    </React.Fragment>
  );
}
