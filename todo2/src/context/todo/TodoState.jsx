

import { useState } from "react";
import TodoContext from "./TodoContext";

export default function TodoState(props){

    
    const [taskCounter,setTaskCounter] = useState(0);
    const [deleteTaskCounter,setDeleteTaskCounter] = useState(0);

    return(
        <TodoContext.Provider value={{taskCounter, setTaskCounter, deleteTaskCounter, setDeleteTaskCounter}}>
            {props.children}
        </TodoContext.Provider>
    ) 
}