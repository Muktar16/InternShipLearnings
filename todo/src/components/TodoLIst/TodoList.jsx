import React from 'react';
import { Card } from 'antd';


  const data = [
    {
      todoID: '1',
      name: 'Task-1',
      priority: 32,
      date: '12-12-2023'
    },
    {
        todoID: '2',
        name: 'Task-2',
        priority: 32,
        date: '12-12-2023'
    },
    {
        todoID: '3',
        name: 'Tasl-3',
        priority: 32,
        date: '12-12-2023'
      },
  ];


function TodoList(){
    return(
    <div className="site-card-border-less-wrapper">
      <Card title="Card title" bordered={false} style={{minWidth:"800px"}}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
    
    )
}

export default TodoList;