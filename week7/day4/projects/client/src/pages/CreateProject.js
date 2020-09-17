import React from "react"
import { Row, Col, Form, Typography, Button } from "antd"
import { newProject } from "../services/projects"

const { Title } = Typography

const CreateProject = props => {
  const [form] = Form.useForm()

  async function createProject(value) {
    await newProject(value)
    props.history.push("/")
  }

  return (
    <div>
      <Title level={1}>Create Project</Title>
      <hr />
      <Form layout='vertical' form={form} onFinish={createProject}>
        <Row>
          <Col sm={24} md={12}>
            <Form.Item name='title' label='Title'>
              <input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col sm={24} md={12}>
            <Form.Item name='description' label='Description'>
              <input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Button htmlType='submit' block type='primary'>
            Create
          </Button>
        </Row>
      </Form>
    </div>
  )
}

export default CreateProject
