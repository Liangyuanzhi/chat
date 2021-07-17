/*
 * @Author: your name
 * @Date: 2021-06-22 15:52:03
 * @LastEditTime: 2021-06-22 17:13:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chat-app/src/components/DynamicTable/model/index.js
 */

export default {
  namespace: "dynamicTable",
  state: {
    dataSource: [
      {
        key: "1",
        name: "胡彦斌",
        age: 32,
        address: "西湖区湖底公园1号",
      },
      {
        key: "2",
        name: "胡彦祖",
        age: 42,
        address: "西湖区湖底公园1号",
      },
    ],
    columns: [
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
    ],
  },
  effects: {},
  reducers: {
    increase(state, action) {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    },
  },
};
