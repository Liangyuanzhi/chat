import React from "react";
import { Tabs, Card, Table, Form, Button } from "antd";
import { returnTableProps, list } from "./config/table";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Demo = (props) => {
  const [form] = Form.useForm();
  const handleSubmit = () => {
    // validateFields((err, value) => {
    //   console.log(value);
    // });
  };
  return (
    <Card
      extra={
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Submit
        </Button>
      }
    >
      <Tabs defaultActiveKey="1" onChange={callback}>
        {list.map((vNode) => {
          return (
            <TabPane tab={vNode.name} key={vNode.key}>
              <Table
                {...returnTableProps(props, form)}
              />
            </TabPane>
          );
        })}
      </Tabs>
    </Card>
  );
};

export default Demo;
