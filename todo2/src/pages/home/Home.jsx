// import React, { useEffect } from "react";
// import { useState } from "react";
// import { createContext } from "react";
// import Topbar from "../../components/Topbar/Topbar";
// import axios from "axios";
// const apiBaseUrl = `http://192.168.0.140:5432/api/v1`;


// export default function Home() {

//   const [taskCounter, setTaskCounter] = useState(0);
//   const [deleteTaskCounter, setDeleteTaskCounter] = useState(0);
  

//   useEffect(()=>{
//     getTodoList();
//     getRecycleList();
//   },[])

//   const getTodoList = async()=>{
//     const result = await axios.get(apiBaseUrl + '/todo/getAll');
//     setTodoList(result?.data);
//     console.log()
//     todoList.sort((a, b) => a.time.localeCompare(b.time));
//     todoList.sort((a, b) => ((new Date(a.date)) - (new Date(b.date))));
//     setTaskCounter(todoList.length); 
//   }

//   const getRecycleList = async()=>{
//     const result = await axios.get(apiBaseUrl + "/todo/getRecycleBinList");
//     setRecycleList(result?.data);
//     // recycleList.sort((a, b) => a.time.localeCompare(b.time));
//     // recycleList.sort((a, b) => ((new Date(a.date)) - (new Date(b.date))));
//     setDeleteTaskCounter(recycleList.length); 
//   }
    
  
//   return (
//     <Topbar></Topbar>
//   );
// }

