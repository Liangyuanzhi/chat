import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { layout, tailLayout } from "./config/layout";

const Demo = () => {
  const [form] = Form.useForm();

  const { resetFields } = form;

  const onFinish = (values) => {
    console.table("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.table("Failed:", errorInfo);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  useEffect(() => {
    // console.log("form:", form);
  }, []);

  return (
    <Form
      form={form}
      style={{ width: "420px" }}
      {...layout}
      name="basic"
      initialValues={{}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        initialValue="rose"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item label="Files:" required>
        <Form.Item
          name="files"
          rules={[
            {
              required: true,
              message: "Please upload your files!",
            },
          ]}
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger
            name="files"
            action="//www.mocky.io/v2/5cc8019d300000980a055e76"
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginRight: "15px" }}
        >
          Submit
        </Button>
        <Button
          type="primary"
          onClick={() => {
            // console.log("resetFields():");
            resetFields();
          }}
        >
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Demo;
