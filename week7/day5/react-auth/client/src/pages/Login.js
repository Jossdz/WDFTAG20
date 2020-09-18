import React, { useState, useContext } from "react"
import { Form, Input, Button, Typography, notification } from "antd"
import { login } from "../services/auth"
import { Context } from "../context"
import { Redirect } from "react-router-dom"

const { Text } = Typography

const Login = ({ history }) => {
  const [form] = Form.useForm()
  const [error] = useState(null)
  const { loginUser, user } = useContext(Context)

  async function onFinish(values) {
    const user = await login(values).catch(err => {
      console.dir(err.response.data.message)

      openNotificationWithIcon(err.response.data.message)
    })
    delete user.password
    loginUser(user)
  }

  const openNotificationWithIcon = message => {
    notification.warning({
      message: "Error",
      description: message
    })
  }

  return !user ? (
    <Form layout='vertical' form={form} onFinish={onFinish}>
      <Form.Item
        label='Email'
        name='email'
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      {error && <Text type='danger'>{error}</Text>}
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Login
        </Button>
      </Form.Item>
    </Form>
  ) : (
    <Redirect to='/profile' />
  )
}

export default Login
