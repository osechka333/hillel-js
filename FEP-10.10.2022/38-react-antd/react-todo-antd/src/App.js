import React, { useState } from 'react'
import { Col, Table, Row, Checkbox } from 'antd'
import './App.css'
import Header from './Header'
import ErrorBoundary from './ErrorBoundary'

const initialData = [
  { 'title': 'Lorem ipsum dolor sit ame', 'done': true, 'id': '114' },
  { 'title': 'xxx 14', 'done': false, 'id': '116' }
]

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
  },
  {
    title: 'Status',
    dataIndex: 'done',
    render: (text) => <Checkbox checked={text}></Checkbox>
  },
  {
    title: 'Title',
    dataIndex: 'title',
  },
]

function App () {
  const [list, setList] = useState(initialData)

  function onTodoSubmit (todo) {
    setList([...list, todo])
  }

  return (
    <div>
      <Row justify="center">
        <Col span={8}>
          Todo List
        </Col>
      </Row>
      <Row justify="center">
        <Col span={8}>

          <ErrorBoundary>
            <Header onSubmit={onTodoSubmit}/>
          </ErrorBoundary>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={14}>
          <Table columns={columns} dataSource={list} rowKey="id"/>
        </Col>
      </Row>
    </div>
  )
}

export default App
