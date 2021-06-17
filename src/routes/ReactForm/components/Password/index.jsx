/*
 * @Author: your name
 * @Date: 2021-06-09 11:49:21
 * @LastEditTime: 2021-06-09 20:05:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chat-app/src/routes/ReactForm/components/Input/index.js
 */
import React, { Component } from "react";

class index extends Component {
  handleChange = (value) => {
    const { onChange } = this.props;
    onChange(value);
  };
  render() {
    const {
      form: { getFieldError },
      value = "",
      name = "",
      required = false,
    } = this.props;
    const error = getFieldError(name);
    return (
      <div style={{ marginBottom: "20px" }}>
        <label>
          {required ? (
            <span style={{ color: 'red' }}>*</span>
          ) : (
            ""
          )}
          密码:{" "}
        </label>
        <input
          type="password"
          value={value}
          onChange={this.handleChange}
          style={error ? { border: "2px solid red" } : {}}
        />
        <div style={{ color: "red", marginLeft: "40px" }}>
          {error ? error.join(",") : ""}
        </div>
      </div>
    );
  }
}

export default index;
