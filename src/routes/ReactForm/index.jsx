import React, { useEffect } from "react";
import { createForm } from "../../rc-form";
// import ReactClass from "./components/ReactClass";
import AntdForm from "./components/AntdForm";
import FnClass from "./components/FnClass";
import AsyncValidator from "async-validator";
import { Card } from "antd";

const RcForm = (props) => {
  const {
    form: { getFieldDecorator, validateFields },
  } = props;

  const handleSubmit = (e) => {
    e && e.preventDefault();
    validateFields((err, value) => {
      if (!err) {
        console.table(value);
      }
    });
  };
  const initAsyncValidtor = () => {
    const descriptor = {
      name: {
        type: "string",
        required: true,
        validator: (rule, value) => value === "muji",
        message: "请输入",
      },
    };
    const validator = new AsyncValidator(descriptor);
    validator.validate({ name: "" }, (errors, fields) => {
      if (errors) {
        // validation failed, errors is an array of all errors
        // fields is an object keyed by field name with an array of
        // errors per field
        return {
          errors,
          fields,
        };
      }
      // validation passed
    });

    // PROMISE USAGE
    validator
      .validate({ name: "muji", age: 16 })
      .then(() => {
        // validation passed or without error message
      })
      .catch(({ errors, fields }) => {
        return {
          errors,
          fields,
        };
      });
  };

  useEffect(() => {
    // initAsyncValidtor();
  }, []);
  return (
    <div style={{ padding: 20, background: "#fff" }}>
      <form onSubmit={handleSubmit}>
        <label>姓名: </label>
        {getFieldDecorator("user.username", {
          rules: [{ required: true, message: "请输入用户名!" }],
          // initialValue: "peter",
        })(<input type="text" />)}
        <br />
        <label>密码: </label>
        {getFieldDecorator("user.password", {
          rules: [
            { required: true, message: "请输入密码!" },
            { pattern: /^[a-z0-9_-]{6,18}$/, message: "只允许数字!" },
          ],
          initialValue: "32u4324343443",
        })(<input type="password" style={{ margin: "15px 0" }} />)}
        <br />
        <label>备注: </label>
        {getFieldDecorator("user.memo", {
          rules: [{ required: true, message: "请输入备注!" }],
        })(<FnClass />)}
        <br />
        <label>记住密码: </label>
        {getFieldDecorator("user.lockpassword", {
          valuePropName: "checked",
        })(<input type="checkbox" style={{ marginTop: "15px" }} />)}
        <br />
        <button style={{ marginTop: "15px" }}>提交</button>
      </form>
      <Card style={{marginTop: '20px'}}>
        <AntdForm />
      </Card>
    </div>
  );
};
export default createForm({
  name: "react-form",
})(RcForm);
