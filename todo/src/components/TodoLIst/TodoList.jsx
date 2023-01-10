import React from 'react';
import { Card,Col,Row,Button ,Space} from 'antd';


  const todoList = [
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
    {
      todoID: '4',
      name: 'Task-4',
      priority: 32,
      date: '12-12-2023'
  },
  {
    todoID: '5',
    name: 'Tasl-5',
    priority: 32,
    date: '12-12-2023'
},
{
  todoID: '6',
  name: 'Tasl-6',
  priority: 32,
  date: '12-12-2023'
},
  ];


function TodoList(){
    return(
      <div className="site-card-wrapper" style={{alignSelf:'center',}}>
        <Row gutter={16} style={{paddingTop:10,paddingLeft:10,paddingRight:10,alignContent:'center', display:"flex",flexDirection:'flex-flow' ,flexWrap:'wrap'} }>
          {todoList.map((todo)=>(
            <Col span={8} key={todo.todoID}>
                <Card title={`Task title: {todo.name}`} style={{backgroundColor:'#8fcfa0',minWidth:200, height:150, marginBottom:10}} bordered={false}>
                <div style={{float:'left'}}>Date: {todo.date}</div>
                  <Space style={{float:'right'}} > 
                    <Button  type='primary' danger style={{flexWrap:'wrap'}}>Update</Button>
                    <Button type='primary' ghost style={{flexWrap:'wrap'}}>Delete</Button>
                  </Space>
                </Card>
            </Col>
          ))}  
        </Row>
      </div>
    )
}

export default TodoList;