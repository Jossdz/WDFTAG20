import React, { useContext } from "react"
import { Layout, Menu, Breadcrumb } from "antd"
import { Link } from "react-router-dom"
import { Context } from "../context"
import { logoutP } from "../services/auth"

const { Header, Content, Footer } = Layout
const LayoutApp = ({ children }) => {
  const { user, logout } = useContext(Context)

  async function setlogout() {
    await logoutP()
    logout()
  }

  return (
    <Layout className='layout' style={{ height: "100vh" }}>
      <Header>
        <Menu theme='dark' mode='horizontal'>
          <Menu.Item key='1'>
            <Link to='/'>Home</Link>
          </Menu.Item>
          {!user && (
            <Menu.Item key='2'>
              <Link to='/login'>Login</Link>
            </Menu.Item>
          )}
          {!user && (
            <Menu.Item key='3'>
              <Link to='/signup'>Signup</Link>
            </Menu.Item>
          )}
          {user && (
            <Menu.Item key='4' onClick={setlogout}>
              Logout
            </Menu.Item>
          )}
          {user && (
            <Menu.Item key='5'>
              <Link to='/profile'>Profile</Link>
            </Menu.Item>
          )}
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <br />
        <br />
        {children}
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Auth ©2018 Created by Ironhackers
      </Footer>
    </Layout>
  )
}

export default LayoutApp
