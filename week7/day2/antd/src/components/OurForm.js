import React from "react"
import { Form, Input, Button } from "antd"

const OurForm = () => {
  const [form] = Form.useForm()

  const submitForm = value => {
    console.log(value)
  }

  return (
    <div>
      <Form form={form} onFinish={submitForm}>
        <Form.Item name='note' label='Note' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='Name' label='Name' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='Email' label='Email' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Send
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default OurForm
