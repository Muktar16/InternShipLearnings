import React, { useContext ,useEffect, useState} from 'react';
import TodoState from './context/todo/TodoState';
import TodoContext from './context/todo/TodoContext';
import axios from 'axios';
import Topbar from './components/Topbar/Topbar';

const apiBaseUrl = `http://192.168.0.140:5432/api/v1`;

const App = () => {

  const [todoList,setTodoList] = useState([]);
  const [recycleList,setRecycleList] = useState([]);
  const [taskCounter,setTaskCounter] = useState(0);
  const [deleteTaskCounter,setDeleteTaskCounter] = useState(0);


  useEffect(()=>{
    getTodoList();
    getRecycleList();
  },[])

  const getTodoList = async()=>{
    const result = await axios.get(apiBaseUrl + '/todo/getAll');
    setTodoList(result?.data);
    todoList.sort((a, b) => a.time.localeCompare(b.time));
    todoList.sort((a, b) => ((new Date(a.date)) - (new Date(b.date))));
    console.log("todoList after sort",todoList)
  }
  const getRecycleList = async()=>{

  }

  return (
    <TodoContext.Provider value={{todoList,taskCounter,setTaskCounter,setTodoList,recycleList,setRecycleList,deleteTaskCounter,setDeleteTaskCounter}}>
          
            <Topbar></Topbar>
         
    </TodoContext.Provider>
    
  )  
};

export default App;
