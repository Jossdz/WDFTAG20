import React, { useState } from "react"
import { Layout, Menu } from "antd"
import { Link } from "react-router-dom"
import {
  ProjectOutlined,
  SnippetsOutlined,
  HomeOutlined
} from "@ant-design/icons"

const { Header, Content, Footer, Sider } = Layout

const LayoutApp = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  function onCollapse() {
    setCollapsed(!collapsed)
  }
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Menu theme='dark' mode='inline'>
          <Menu.Item key='1' icon={<HomeOutlined />}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key='2' icon={<ProjectOutlined />}>
            <Link to='/project/new'>New project</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header style={{ padding: 0, backgroundColor: "white" }} />
        <Content style={{ margin: "16px 16px" }}>
          <div
            style={{ padding: 24, minHeight: 360, backgroundColor: "white" }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Projects ©2020 Created by Ironhackers
        </Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutApp
