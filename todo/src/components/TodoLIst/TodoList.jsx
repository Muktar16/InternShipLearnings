import React from 'react';
import { Space, Table, Button } from 'antd';

const columns = [
    {
      title: 'Name of the Task',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <th>{text},</th>
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">Edit</Button>
          <Button type="danger">Delete</Button>
        </Space>
      ),
    },
  ];


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
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default TodoList;