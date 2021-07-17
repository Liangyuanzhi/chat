import React, { useState } from "react";
import CostumModal from "../../components/Modal";
import { Button, Card } from "antd";
import UseModalDemo from "./components/useModal";

const index = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Card
      extra={
        <Button type="primary" onClick={() => setVisible(true)}>
          打开Modal
        </Button>
      }
    >
      <CostumModal
        instance={this}
        visible={visible}
        onChange={({ visible }) => setVisible(visible)}
      />
      <UseModalDemo />
    </Card>
  );
};

export default index;
