/*
 * @Author: your name
 * @Date: 2021-04-26 16:35:50
 * @LastEditTime: 2021-04-26 17:21:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chat-app/src/routes/Tabs/config/table.js
 */
import React from "react";
import { Tag, Space, Input, InputNumber, Select, Form } from "antd";

const returnColumns = (props, form) => {
  const { getFieldInstance } = form;
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      render: (text) => {
        return (
          <Form.Item
            name={["user", "age"]}
            rules={[{ required: true, message: "请输入" }]}
          >
            <InputNumber placeholder="请输入" />
          </Form.Item>
        );
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (text) => {
        return (
          <Form.Item
            name={["user", "address"]}
            rules={[{ required: true, message: "请输入" }]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
        );
      },
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
};

const dataSource = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const list = [
  {
    name: "Tab 1",
    key: 1,
  },
  {
    name: "Tab 2",
    key: 2,
  },
  {
    name: "Tab 3",
    key: 3,
  },
];

const returnTableProps = (props, form) => {
  return {
    dataSource: dataSource,
    columns: returnColumns(props, form),
  };
};
export { returnTableProps, list };
