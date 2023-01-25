import "./Topbar.css"
import React,{ useContext,useState } from "react";
import { AppBar, Toolbar, Avatar, Tabs, Tab, Badge } from '@mui/material'
import ListAltIcon from '@mui/icons-material/ListAlt';
import { TabPanel,TabContext } from '@mui/lab';
import TodoList from "../TodoLIst/TodoList";
import RecycleBin from "../RecycleBin/RecycleBin";
import DeleteIcon from '@mui/icons-material/Delete';
import TodoContext from "../../context/todo/TodoContext";
import { useEffect } from "react";
import axios from "axios";

const apiBaseUrl = `http://192.168.0.140:5432/api/v1`;

export default function Topbar() {

  const todoContext = useContext(TodoContext)
  const [value, setValue] = useState('1');

  useEffect(()=>{
    setCounterValue();
  },[])

  const setCounterValue = async()=>{
    const tempList = await axios.get(apiBaseUrl + "/todo/getAll");
    todoContext?.setTaskCounter(tempList?.data?.length);
    const tempList2 = await axios.get(apiBaseUrl + "/todo/getRecycleBinList");
    todoContext.setDeleteTaskCounter(tempList2?.data?.length);
  }
 
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
              <Tab label={`Current List (${todoContext.taskCounter})`} value="1" />
              <Tab label={`RecycleBin (${todoContext.deleteTaskCounter})`} value="2" />
              <Tab label="About" value="3" />
            </Tabs>
            <Badge badgeContent={todoContext.taskCounter} sx={{ marginLeft: 'auto' }} color="secondary">
              <ListAltIcon fontSize="large" color="white" />
            </Badge>
            <Badge badgeContent={todoContext.deleteTaskCounter} sx={{ marginLeft: '40px'}} color="secondary">
              <DeleteIcon fontSize="large" color="white" />
            </Badge>
          </Toolbar>
        </AppBar>
        <TabPanel value="1"><TodoList></TodoList></TabPanel>
        <TabPanel value="2"><RecycleBin></RecycleBin></TabPanel>
        <TabPanel value="3">About</TabPanel>
      </TabContext>
    </React.Fragment>
  );
}
