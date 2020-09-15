import React from "react"
import { Button, Typography, Row, Col, Skeleton, Progress } from "antd"
import LayoutApp from "./components/Layout"
import OurForm from "./components/OurForm"
import Modals from "./components/Modals"

function App() {
  return (
    <LayoutApp>
      <Row>
        <Col span={24}>
          <OurForm />
        </Col>
        <Col span={24}>
          <Skeleton active />
        </Col>
        <Modals />
        <Progress percent={70} status='active' />
      </Row>
    </LayoutApp>
  )
}

export default App
