import React from "react";
import { Modal, Button, Space } from "antd";

const ReachableContext = React.createContext();
const UnreachableContext = React.createContext();

const config = {
  title: "Use Hook!",
  content: (
    <>
      <ReachableContext.Consumer>
        {(name) => `Reachable: ${name}!`}
      </ReachableContext.Consumer>
      <br />
      <UnreachableContext.Consumer>
        {(name) => `Unreachable: ${name}!`}
      </UnreachableContext.Consumer>
    </>
  ),
};

const useModalDemo = () => {
  const [modal, contextHolder] = Modal.useModal();

  return (
    <>
      <div>
        <h3>使用 hooks 获得上下文</h3>
        <p>通过 Modal.useModal 创建支持读取 context 的 contextHolder。</p>
      </div>
      <br />
      <ReachableContext.Provider value="Light">
        <Space>
          <Button
            onClick={() => {
              modal.confirm(config);
            }}
          >
            Confirm
          </Button>
          <Button
            onClick={() => {
              modal.warning(config);
            }}
          >
            Warning
          </Button>
          <Button
            onClick={() => {
              modal.info(config);
            }}
          >
            Info
          </Button>
          <Button
            onClick={() => {
              modal.error(config);
            }}
          >
            Error
          </Button>
        </Space>
        {/* `contextHolder` should always under the context you want to access */}
        {contextHolder}
      </ReachableContext.Provider>

      {/* Can not access this context since `contextHolder` is not in it */}
      <UnreachableContext.Provider value="Bamboo">
        {contextHolder}
      </UnreachableContext.Provider>
    </>
  );
};
export default useModalDemo;
