/*
 * @Author: your name
 * @Date: 2021-06-22 15:29:17
 * @LastEditTime: 2021-06-28 17:12:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chat-app/src/components/DynamicTable/config/data-source.js
 */

import React from "react";
import { Button, Switch, Form, Row, Col, Popconfirm } from "antd";
import { PlusCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
const { Item } = Form;

export const getColumns = (_this) => {
  const { dispatch } = _this.props;
  const columns = [
    {
      title: "",
      key: "delete",
      dataIndex: "",
      render: (text, record) => (
        <Popconfirm
          title="确定删除吗?"
          onConfirm={(key) =>
            dispatch({ type: "dynamicTable/delete", payload: { record } })
          }
          okText="确定"
          cancelText="取消"
        >
          <CloseCircleOutlined style={{ cursor: "pointer" }} />
        </Popconfirm>
      ),
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ];

  return columns;
};

export const getHeader = (_this) => {
  const { handleRow } = _this;
  const { dispatch } = _this.props;
  // const { getFieldValue = () => {} } = formRef.current || {};
  // console.log("isOpenDynamic:", getFieldValue("isOpenDynamic"));
  // const toggerVisible = getFieldValue("isOpenDynamic") || true;

  return (
    <Row style={{ display: "flex", justifyContent: "space-between" }}>
      <Row gutter={16}>
        <Col>
          <Button
            icon={<PlusCircleOutlined style={{ verticalAlign: "inherit" }} />}
            type="link"
            onClick={handleRow}
          >
            增加行
          </Button>
        </Col>
        <Col>
          <Button
            icon={<PlusCircleOutlined style={{ verticalAlign: "inherit" }} />}
            type="link"
            onClick={() => {
              dispatch({
                type: "dynamicTable/save",
                payload: { visible: true },
              });
            }}
          >
            增加列
          </Button>
        </Col>
      </Row>

      <Row>
        <Item
          label="是否开启动态行列"
          name="isOpenDynamic"
          valuePropName="checked"
          // rules={[{ required: true, message: "请选择是否开启动态行列!" }]}
        >
          <Switch
            checkedChildren="开启"
            unCheckedChildren="关闭"
            defaultChecked
          />
        </Item>
      </Row>
    </Row>
  );
};
