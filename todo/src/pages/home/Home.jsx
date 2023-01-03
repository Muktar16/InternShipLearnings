
import { useState } from "react";
import "./Home.css"

const dummy_todoList = 
[
  {
    id:"1",
    name: "todo-1",
    priority: 1,
    date:new Date(2023,12,3)
  },
  {
    id:"2",
    name: "todo-2",
    priority: 3,
    date:new Date(2022,1,5)
  },
  {
    id:"3",
    name: "todo-1",
    priority: 2,
    date:new Date(2022,1,3)
  },
]


function Home(props){
    const [todoList,setTodoList] = useState(dummy_todoList);
    return (
        <>
        <h1>Home page</h1>
        </>
    )
}

export default Home;