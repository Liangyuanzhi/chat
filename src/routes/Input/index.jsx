import React, { Component } from "react";
import { Card } from "antd";
import DynamicTable from "../../components/DynamicTable";
export default class index extends Component {
  render() {
    return (
      <Card>
        <DynamicTable />
      </Card>
    );
  }
}
