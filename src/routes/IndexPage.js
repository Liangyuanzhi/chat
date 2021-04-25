import React from 'react';
import { connect } from 'dva';
// import '@chatui/core/es/styles/index.less';
// 引入组件
import Chat, { Bubble, useMessages } from '@chatui/core';
// 引入样式
import '@chatui/core/dist/index.css';


const initialMessages = [
  {
    type: 'text',
    content: { text: '主人好，我是智能助理，你的贴心小助手~' },
    user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
  },
  {
    type: 'image',
    content: {
      picUrl: '//img.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png',
    },
  },
];


// 默认快捷短语，可选
const defaultQuickReplies = [
  {
    icon: 'message',
    name: '联系人工服务111',
    isNew: true,
    isHighlight: true,
  },
  {
    name: '短语1',
    isNew: true,
  },
  {
    name: '短语2',
    isHighlight: true,
  },
  {
    name: '短语3',
  },
];

const App = () => {
  // 消息列表
  const { messages, appendMsg, setTyping } = useMessages(initialMessages);

  function handleSend(type, val) {
    if (type === 'text' && val.trim()) {
      appendMsg({
        type: 'text',
        content: { text: val },
        position: 'right',
      });

      setTyping(true);

      setTimeout(() => {
        appendMsg({
          type: 'text',
          content: { text: 'Bala bala' },
        });
      }, 1000);
    }
  }

  function renderMessageContent(msg) {
    const { type, content } = msg;

    // 根据消息类型来渲染
    switch (type) {
      case 'text':
        return(
          <Bubble content={content.text} />
        )
      default:
        return null;
    }
  }


  return (
    <Chat
      navbar={{ title: '智能助理' }}
      messages={messages}
      quickReplies={defaultQuickReplies}
      renderMessageContent={renderMessageContent}
      onSend={handleSend}
    />
  );
};

App.propTypes = {
};

export default connect()(App);
