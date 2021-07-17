import React, { Component } from "react";

export default class index extends Component {
  state = {
    value1: "peter",
    value2: "123",
    value3: "23",
  };

  onChange1 = ({ target: { value } }) => {
    this.setState({ value1: value });
  };

  onChange2 = ({ target: { value } }) => {
    this.setState({ value2: value });
  };

  onChange3 = ({ target: { value } }) => {
    this.setState({ value3: value });
  };

  submit = async () => {
    const { value1, value2, value3 } = this.state;
    const obj = {
      value1,
      value2,
      value3,
    };
    // const res = await axios("url", obj)
  };
  render() {
    const { value1, value2, value3 } = this.state;
    return (
      <div>
        <form action="">
          <label for="">用户名: </label>
          <input type="text" value={value1} onChange={this.onChange1} />
          <br />
          <label for="">密码: </label>
          <input type="text" value={value2} onChange={this.onChange2} />
          <br />
          <label for="">年龄: </label>
          <input type="text" value={value3} onChange={this.onChange3} />
        </form>
        <button onClick={this.submit}>提交</button>
      </div>
    );
  }
}
