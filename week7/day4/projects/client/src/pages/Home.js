import React, { useState, useEffect } from "react"
import { Card, Spin, Space, Row, Col } from "antd"
import { getProjects } from "../services/projects"
import { Link } from "react-router-dom"

const Home = () => {
  const [projects, setProjects] = useState(null)

  async function fetchProjects() {
    const projects = await getProjects()
    setProjects(projects)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <Row gutter={[16, 16]}>
      {projects ? (
        projects.map(project => (
          <Col sm={24} md={12} lg={6}>
            <Card
              title={project.title}
              key={project._id}
              extra={<Link to={`/project/${project._id}`}>Details</Link>}
            >
              <p>{project.description}</p>
            </Card>
          </Col>
        ))
      ) : (
        <Space size='large'>
          <Spin size='large' />
        </Space>
      )}
    </Row>
  )
}

export default Home
