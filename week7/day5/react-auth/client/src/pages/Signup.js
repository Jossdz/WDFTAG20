import React, { useContext } from "react"
import { Form, Input, Button } from "antd"
import { signup } from "../services/auth"
import { Redirect } from "react-router-dom"
import { Context } from "../context"
const Signup = ({ history }) => {
  const [form] = Form.useForm()
  const { user } = useContext(Context)

  async function onFinish(values) {
    await signup(values)
    history.push("/login")
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

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  ) : (
    <Redirect to='/profile' />
  )
}

export default Signup
