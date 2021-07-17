/*
 * @Author: your name
 * @Date: 2021-04-29 16:35:13
 * @LastEditTime: 2021-04-29 16:53:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chat-app/src/components/Modal/config/form.js
 */
export const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};
export const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 18,
  },
};
export const rules = (label) => {
  return [
    {
      required: true,
      message: `请输入${label}!`,
    },
  ];
};