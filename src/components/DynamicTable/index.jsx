import React, { Component, createRef } from "react";
import { Table, Modal, Form } from "antd";
import { connect } from "dva";
import { getHeader, getColumns } from "./config/table-data";

let count = new Date().getTime().toString();
@connect(({ dynamicTable }) => ({
  dynamicTable,
}))
export default class index extends Component {
  formRef = createRef();
  
  // 增加
  handleRow = () => {
    const { dispatch, dynamicTable = {} } = this.props;
    const { dataSource = [] } = dynamicTable;
    const list = JSON.parse(JSON.stringify(dataSource));

    list.push({
      key: count++,
      name: `胡彦斌${count}`,
      age: count,
      address: `西湖区湖底公园${count}号`,
    });
    dispatch({ type: "dynamicTable/save", payload: { dataSource: list } });
  };
  handleOk = () => {
    console.log("handleOk:");
  };
  render() {
    const { dynamicTable = {}, dispatch } = this.props;
    const { dataSource, visible } = dynamicTable;
    
    return (
      <Form ref={this.formRef} name="control-ref">
        <Table
          dataSource={dataSource}
          columns={getColumns(this)}
          bordered
          title={() => getHeader(this)}
        />

        <Modal
          title="新增列"
          visible={visible}
          onOk={this.handleOk}
          onCancel={() => {
            dispatch({
              type: "dynamicTable/save",
              payload: { visible: false },
            });
          }}
        >
          <p>...</p>
          <p>...</p>
          <p>...</p>
        </Modal>
      </Form>
    );
  }
}
