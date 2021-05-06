import { createForm } from "../../rc-form";
import ReactClass from "./ReactClass";
const RcForm = (props) => {
  const {
    form: { getFieldDecorator, validateFields },
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
        <label>姓名:</label>
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "请输入" }],
        })(<input type="text" />)}
        <br />
        <label>密码:</label>
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "请输入" }],
        })(<input type="text" style={{ marginTop: "15px" }} />)}
        <br />
        <button onClick={handleSubmit} style={{ marginTop: "15px" }}>
          提交
        </button>
      </form>
      <ReactClass />
    </div>
  );
};
export default createForm()(RcForm);
