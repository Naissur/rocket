import React from 'react';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

import './ChatView.css';

const debug = require('debug')('rocket:chat-view');


export default class Chat extends React.PureComponent {
  state = {
    chatMessage: ''
  }

  handleChatMessageChange = val => {
    this.setState({ chatMessage: val });
  }

  handleTextAreaKeyDown = ev => {
    if ((ev.keyCode === 13) && ev.ctrlKey) {
      this.sendChatMessage();
    }
  }

  sendChatMessage = () => {
    debug('yay', this.state.chatMessage);
    this.setState({ chatMessage: '' });
  }

  render() {
    return (
      <div className="chat-view">
        <div className="chat-view__send-container" >
          <h1 className="chat-view__heading">Чат</h1>

          <TextArea
            className="chat-view__text-area"
            placeholder="Сообщение"
            value={this.state.chatMessage}
            onChange={this.handleChatMessageChange}
            onKeyDown={this.handleTextAreaKeyDown}
          />
          <Button
            className="chat-view__send-button"
            onClick={this.sendChatMessage}
          >
            Отправить
          </Button>
        </div>
      </div>
    );
  }
}
