import React, { useState, useEffect } from "react"
import { Space, Spin, Row, Col, Button, Form } from "antd"
import { getProject, editProject } from "../services/projects"

const EditProject = ({
  match: {
    params: { projectId }
  },
  history
}) => {
  const [project, setProject] = useState(null)
  const [form] = Form.useForm()

  async function fetchProject() {
    const project = await getProject(projectId)
    setProject(project)
  }

  async function sendUpdate({ title, description }) {
    await editProject(projectId, title, description)
    history.push(`/project/${projectId}`)
  }

  useEffect(() => {
    fetchProject()
  }, [])

  return project ? (
    <Form layout='vertical' form={form} onFinish={sendUpdate}>
      <Row>
        <Col span={24}>
          <Form.Item name='title' label='Title' initialValue={project.title}>
            <input type='text' style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            name='description'
            label='Description'
            initialValue={project.description}
          >
            <input type='text' style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Button block type='primary' htmlType='submit'>
            Update project
          </Button>
        </Col>
      </Row>
    </Form>
  ) : (
    <Space size='large'>
      <Spin size='large' />
    </Space>
  )
}

export default EditProject
