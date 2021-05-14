import { createForm } from "../../rc-form";
// import ReactClass from './ReactClass'
import RefClass from './RefClass'
import {Input} from 'antd'
const { TextArea } = Input;


const RcForm = (props) => {
  const {
    form: { getFieldDecorator, validateFields , getFieldValue},
  } = props;

  const handleSubmit = (e) => {
    e && e.stopPropagation();
    validateFields((err, value) => {
      if (!err) {
        console.log(value);
      }
    });
  };

  return (
    <div style={{ padding: 20, background: "#fff" }}>
      <form>
        <label>姓名: </label>
        {getFieldDecorator("user.username", {
          rules: [{ required: true, message: "请输入用户名!" }],
          initialValue: "peter",
        })(<input type="text" />)}
        <br />
        <label>密码: </label>
        {getFieldDecorator("user.password", {
          rules: [
            { required: true, message: "请输入密码!" },
            { pattern: /^[a-z0-9_-]{6,18}$/, message: "只允许数字!" },
          ],
          initialValue:'32u4324343443'
        })(<input type="password" style={{ marginTop: "15px" }} />)}
        <br />
        {/* <label>备注: </label>
        {getFieldDecorator("user.memo", {
        })(<TextArea style={{ marginTop: "15px" }} />)}
        <br /> */}
        <label>记住密码: </label>
        {getFieldDecorator("user.lockpassword", {
          valuePropName: "checked",
        })(<input type="checkbox" style={{ marginTop: "15px" }} />)}
        <br />
        <button onClick={handleSubmit} style={{ marginTop: "15px" }}>
          提交
        </button>
      </form>

      {/* <RefClass/> */}
    </div>
  );
};
export default createForm({
  name: "react-form",
})(RcForm);
