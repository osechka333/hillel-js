import { Button, Checkbox, Form, Input } from 'antd'

export default function Header ({ onSubmit }) {
  const onFinish = (values) => {
    console.log('Success:', values)
    onSubmit({
      ...values,
      id: Math.random().toString()
    })
  }

  // throw new Error('Error from Header')

  return (
    <Form
      initialValues={{
        done: false,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Title required!',
          },
          {
            min: 3,
            message: 'Min 3 symbols!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="done"
        valuePropName="checked"
      >
        <Checkbox>Done</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}