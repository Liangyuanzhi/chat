import React, { useEffect } from "react";
import { createForm } from "../../plugins/rc-form";
import AntdForm from "./components/AntdForm";
import FnComponent from "./components/FnClass";
import Input from "./components/Input";
import Password from "./components/Password";
// import ReactClass from "./components/ReactClass";
// import AsyncValidator from "async-validator";
import { Card } from "antd";

const RcForm = (props) => {
  const {
    form: { getFieldDecorator, validateFields, resetFields },
    form,
  } = props;

  useEffect(() => {
    // initAsyncValidtor();
  }, []);

  const handleSubmit = (e) => {
    e && e.preventDefault();
    validateFields((err, value) => {
      if (!err) {
        const {
          user: {
            object: { params = {} },
          },
        } = value;
        console.table(params);
      }
    });
  };

  const handleReset = (e) => {
    e && e.preventDefault();
    resetFields();
  };

  return (
    <div style={{ padding: 20, background: "#fff" }}>
      <form onSubmit={handleSubmit}>
        {getFieldDecorator("user.object.params.username", {
          rules: [{ required: true, message: "请输入用户名!" }],
          // initialValue: "rose",
        })(
          <Input
            required
            label="姓名"
            type="text"
            form={form}
            name="user.object.params.username"
          />
        )}

        {getFieldDecorator("user.object.params.password", {
          rules: [
            { required: true, message: "请输入密码!" },
            { pattern: /^[a-z0-9_-]{6,18}$/, message: "6-18位,只允许数字!" },
          ],
        })(
          <Password required form={form} name="user.object.params.password" />
        )}

        {getFieldDecorator("user.object.params.memo", {
          rules: [{ required: true, message: "请输入备注!" }],
        })(
          <FnComponent
            required
            label="备注"
            type="textarea"
            form={form}
            name="user.object.params.memo"
          />
        )}

        {getFieldDecorator("user.object.params.lockpassword", {
          valuePropName: "checked",
          // initialValue: true
        })(
          <Input
            label="记住密码"
            type="checkbox"
            form={form}
            name="user.object.params.lockpassword"
          />
        )}

        <button onClick={handleReset} style={{ marginRight: "10px" }}>
          重置
        </button>
        <button>提交</button>
      </form>

      <Card style={{ marginTop: "20px" }}>
        <AntdForm />
      </Card>

    </div>
  );
};

export default createForm({
  // validateMessages: "自定义错误效验信息!",
  // onFieldsChange: () => {},
  // onValuesChange: (options, args, valuesAllSet) => {
  //   // console.log(options, args, valuesAllSet);
  // },
  // fieldNameProp: "fieldNameProp",
  // fieldMetaProp: "fieldMetaProp",
  // fieldDataProp: "",
  // formPropName: "form",
  // name: "rc-form-component",
})(RcForm);
