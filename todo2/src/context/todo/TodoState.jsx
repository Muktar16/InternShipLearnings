

import { useState } from "react";
import TodoContext from "./TodoContext";

export default function TodoState(props){

    const [todoList,setTodoList] = useState([]);
    const [recycleList,setRecycleList] = useState([]);
    const [taskCounter,setTaskCounter] = useState(0);
    const [deleteTaskCounter,setDeleteTaskCounter] = useState(0);

    return(
        <TodoContext.Provider value={{todoList,taskCounter,setTaskCounter,setTodoList,recycleList,setRecycleList,deleteTaskCounter,setDeleteTaskCounter}}>
            {props.children}
        </TodoContext.Provider>
    ) 
}