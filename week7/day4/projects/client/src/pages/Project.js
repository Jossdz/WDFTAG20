import React, { useEffect, useState } from "react"
import {
  Row,
  Col,
  Space,
  Spin,
  Typography,
  Button,
  Modal,
  Card,
  Popconfirm
} from "antd"
import { getProject, deleteProject } from "../services/projects"
import TaskForm from "../components/TaskForm"
import { Link } from "react-router-dom"

const { Title, Text } = Typography

const Project = ({
  match: {
    params: { projectId }
  },
  history
}) => {
  const [project, setProject] = useState(null)
  const [showModal, setShowModal] = useState(false)

  async function fetchProject() {
    const project = await getProject(projectId)
    setProject(project)
  }

  function addTask(task) {
    setProject({ ...project, tasks: [...project.tasks, task] })
    setShowModal(false)
  }

  async function removeProject() {
    await deleteProject(projectId)
    history.push("/")
  }

  useEffect(() => {
    fetchProject()
  }, [])

  return project ? (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Title level={1}>{project.title}</Title>
        <Text type='secondary'>{project.description}</Text>
        <br />
        <br />
        <Row gutter={16}>
          <Col sm={24} md={8}>
            <Button block type='primary' onClick={() => setShowModal(true)}>
              Add task
            </Button>
          </Col>
          <Col sm={24} md={8}>
            <Button block type='dashed'>
              <Link to={`/project/edit/${projectId}`}>Edit project</Link>
            </Button>
          </Col>
          <Col sm={24} md={8}>
            <Popconfirm
              title='Are you sure delete'
              okText='Delete project'
              cancelText='Cancel'
              onConfirm={removeProject}
            >
              <Button block type='secondary' danger>
                Delete project
              </Button>
            </Popconfirm>
          </Col>
        </Row>

        <Modal
          title='Add task'
          visible={showModal}
          // onOk={() => setShowModal(false)}
          footer={[
            <Button
              type='dashed'
              danger
              key='cancel'
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>
          ]}
          onCancel={() => setShowModal(false)}
        >
          <TaskForm projectId={projectId} addTask={addTask} />
        </Modal>
      </Col>

      <Col span={24}>
        <Title level={3}>Tasks: </Title>
      </Col>
      {project.tasks.map(task => (
        <Col key={task._id} sm={24} md={12}>
          <Card title={task.title}>{task.description}</Card>
        </Col>
      ))}
    </Row>
  ) : (
    <Space size='large'>
      <Spin size='large' />
    </Space>
  )
}

export default Project
