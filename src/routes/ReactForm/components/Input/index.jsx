/*
 * @Author: your name
 * @Date: 2021-06-09 11:49:21
 * @LastEditTime: 2021-06-09 20:03:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chat-app/src/routes/ReactForm/components/Input/index.js
 */
import React, { Component } from "react";

class index extends Component {
  handleChange = (e) => {
    const { value } = e && e.target;
    const { onChange, type = "text" } = this.props;

    if (type === "text") {
      onChange(value);
    } else {
      onChange(e);
    }
  };

  render() {
    const {
      form: { getFieldError },
      value = "",
      name = "",
      checked = "",
      type = "text",
      label = "",
      required = false,
    } = this.props;

    const error = getFieldError(name);

    const getAsyncValue = (type) => {
      if (type === "checkbox") {
        return {
          checked: checked,
        };
      } else {
        return {
          value: value,
        };
      }
    };

    return (
      <div style={{ marginBottom: "20px" }}>
        <label>
          {required ? <span style={{ color: "red" }}>*</span> : ""}
          {label}:{" "}
        </label>
        <input
          type={type}
          {...getAsyncValue(type)}
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
