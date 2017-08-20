import React from 'react';
import ChatSendMessageView from './ChatSendMessageView';

const debug = require('debug')('rocket:chat-view');


export default class ChatView extends React.PureComponent {
  render() {
    return (
      <div>
        <ChatSendMessageView onSendMessage={msg => debug('send message', msg)} />
      </div>
    );
  }
}

