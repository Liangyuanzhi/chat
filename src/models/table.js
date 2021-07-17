/*
 * @Author: your name
 * @Date: 2021-06-22 15:52:03
 * @LastEditTime: 2021-06-28 17:13:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chat-app/src/components/DynamicTable/model/index.js
 */

let count = new Date().getTime().toString();
export default {
  namespace: "dynamicTable",
  state: {
    dataSource: [
      {
        key: count++,
        name: `胡彦斌${count}`,
        age: count,
        address: `西湖区湖底公园${count}号`,
      },
      {
        key: count++,
        name: `胡彦斌${count}`,
        age: count,
        address: `西湖区湖底公园${count}号`,
      },
      {
        key: count++,
        name: `胡彦斌${count}`,
        age: count,
        address: `西湖区湖底公园${count}号`,
      },
    ],
    visible: false,
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: "increase" });
    },
  },
  reducers: {
    delete({ dataSource = [] }, { payload }) {
      const {
        record: { key },
      } = payload;
      return {
        dataSource: dataSource.filter((item) => item.key !== key),
      };
    },
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
