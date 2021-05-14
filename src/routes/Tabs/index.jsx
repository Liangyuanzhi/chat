import React from "react";
import { Tabs, Card, Table, Form, Button, message } from "antd";
import { returnTableProps, list } from "./config/table";
import { ZoomInOutlined, ZoomOutOutlined } from "@ant-design/icons";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Demo = (props) => {
  const [form] = Form.useForm();
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const handleSubmit = () => {
    // validateFields((err, value) => {
    //   console.log(value);
    // });
  };

  const reducer = () => {
    const [key = ""] = selectedRowKeys;
    if (!key) {
      message.info("请选中表格行!");
    }
  };
  const add = () => {};
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
                title={() => {
                  return (
                    <React.Fragment>
                      <Button
                        type="link"
                        icon={<ZoomInOutlined />}
                        onClick={add}
                      >
                        新增行
                      </Button>
                      <Button
                        type="link"
                        icon={<ZoomOutOutlined />}
                        onClick={reducer}
                      >
                        删除行
                      </Button>
                    </React.Fragment>
                  );
                }}
                rowSelection={{
                  type: "radio",
                  selectedRowKeys,
                  onChange: (selectedRowKeys) => {
                    setSelectedRowKeys(selectedRowKeys);
                  },
                }}
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
