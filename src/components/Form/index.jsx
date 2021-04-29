import React, { createRef } from "react";
import { Form, Input, Button, Select } from "antd";
import { layout, tailLayout, rules } from "./config/form";

const FormItem = Form.Item;
const Option = Select.Option;

const CustomForm = () => {
  const formRef = createRef();
  const onFinish = (value) => {
    console.table(value);
  };
  return (
    <Form layout="horizontal" onFinish={onFinish} ref={formRef} {...layout}>
      <FormItem
        label="一级供应商:"
        name="supplier1"
        rules={rules("一级供应商")}
      >
        <Input placeholder="请输入" />
      </FormItem>
      <FormItem
        label="二级供应商名称:"
        name="supplier2"
        rules={rules("二级供应商名称")}
      >
        <Input placeholder="请输入" />
      </FormItem>
      <FormItem
        label="采购人姓名:"
        name="name"
        rules={rules("二级供应商名称")}
      >
        <Select style={{ width: '100%' }} placeholder="请选择">
          <Option value="1">杰克</Option>
          <Option value="2">皮的</Option>
          <Option value="3">提莫</Option>
          <Option value="4">金葵花</Option>
          <Option value="5">金箍棒</Option>
        </Select>
      </FormItem>
      <FormItem {...tailLayout}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
        <Button
          htmlType="button"
          style={{ marginLeft: 15 }}
          onClick={() => formRef.current.resetFields()}
        >
          重置
        </Button>
      </FormItem>
    </Form>
  );
};
export default CustomForm;
