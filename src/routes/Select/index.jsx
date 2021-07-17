import React, { Component } from "react";
import { Card, Table } from "antd";
import { columns } from "./config/source";
import axios from "axios";

class index extends Component {

  state = {
    dataSource: [],
  };

  fetch = () => {
    axios
      .get("api/userinfo")
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  componentDidCatch() {
    this.fetch();
  }

  render() {
    const { dataSource = []} = this.state;

    return (
      <Card>
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    );
  }
}

export default index;
