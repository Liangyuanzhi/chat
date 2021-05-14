import React, { useState, useEffect } from "react";
import { Modal as AntModal } from "antd";
import CustomForm from "../Form";


let timer;
const Modal = (props) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  useEffect(() => {
    timer = null;
  });
  const { visible } = props;
  const actionVisible = (isClose, arg = {}) => {
    const { onChange } = props;
    onChange({
      visible: isClose ? false : true,
      ...arg,
    });
  };
  const handleOk = () => {
    setConfirmLoading(true);
    timer = setTimeout(() => {
      setConfirmLoading(false);
      actionVisible(true);
    }, 2000);
  };
  const handleCancel = () => {
    actionVisible(true);
  };

  return (
    <div>
      <AntModal
        visible={visible}
        title="弹框"
        onOk={handleOk}
        okText="确定"
        cancelText="取消"
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <CustomForm />
      </AntModal>
    </div>
  );
};

export default Modal;
