import React from "react"
import { Form, Button } from "antd"
import { createTask } from "../services/tasks"
// import { useHistory } from "react-router-dom"

const TaskForm = ({ projectId, addTask }) => {
  const [form] = Form.useForm()
  // const history = useHistory()

  async function sendTask({ title, description }) {
    const task = await createTask(projectId, title, description)
    // history.push(`/`)
    addTask(task)
  }

  return (
    <Form form={form} onFinish={sendTask} layout='vertical'>
      <Form.Item label='Title' name='title'>
        <input style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item label='Description' name='description'>
        <input style={{ width: "100%" }} />
      </Form.Item>
      <Button htmlType='submit' block type='primary'>
        Add task
      </Button>
    </Form>
  )
}

export default TaskForm
