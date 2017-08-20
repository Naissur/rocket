import React from 'react';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

import s from './ChatView.css';

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
      <div className={s.chatView}>
        <div className={s.sendContainer}>
          <h1 className={s.heading}>Чат</h1>

          <TextArea
            className={s.textArea}
            placeholder="Сообщение"
            value={this.state.chatMessage}
            onChange={this.handleChatMessageChange}
            onKeyDown={this.handleTextAreaKeyDown}
          />
          <Button
            className={s.sendButton}
            onClick={this.sendChatMessage}
          >
            Отправить
          </Button>
        </div>
      </div>
    );
  }
}
