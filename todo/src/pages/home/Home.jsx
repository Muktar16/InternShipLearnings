
import React from 'react'
import { Card, Col, Row } from 'antd';


function Home(){
  return(
    <>
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Assignment-1" bordered={false}>
            date and time content
            <button style={{float:'right'}}>Update</button>
            <button style={{float:'right'}}>Delete</button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            
          date and time
          <button style={{float:'right'}}>Update</button>
            <button style={{float:'right'}}>Delete</button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
            <button style={{float:'right'}}>Update</button>
            <button style={{float:'right'}}>Delete</button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
            <button style={{float:'right'}}>Update</button>
            <button style={{float:'right'}}>Delete</button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
            <button style={{float:'right'}}>Update</button>
            <button style={{float:'right'}}>Delete</button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
            <button style={{float:'right'}}>Update</button>
            <button style={{float:'right'}}>Delete</button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
            <button style={{float:'right'}}>Update</button>
            <button style={{float:'right'}}>Delete</button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
            <button style={{float:'right'}}>Update</button>
            <button style={{float:'right'}}>Delete</button>
          </Card>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Home;