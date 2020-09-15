import React, { useState } from "react"
import { Layout, Menu } from "antd"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons"

const { Header, Sider, Content } = Layout

const LayoutApp = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  function toggle() {
    setCollapsed(!collapsed)
  }

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo' />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={["1"]}>
          <Menu.Item key='1' icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key='3' icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header
          className='site-layout-background'
          style={{ padding: "0 10px", backgroundColor: "white" }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle
            }
          )}
        </Header>
        <Content
          className='site-layout-background'
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutApp
