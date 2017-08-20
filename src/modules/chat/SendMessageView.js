import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sendChatTextMessage } from './ChatState';

import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

import s from './SendMessageView.css';


@connect(null, dispatch => bindActionCreators({
  sendChatTextMessage
}, dispatch))
export default class ChatSendMessageView extends React.PureComponent {
  state = {
    chatMessage: ''
  }

  handleChatMessageChange = val => {
    this.setState({ chatMessage: val });
  }

  handleTextAreaKeyDown = ev => {
    if ((ev.keyCode === 13) && ev.ctrlKey) {
      this.sendMessage();
    }
  }

  sendMessage = () => {
    this.props.sendChatTextMessage({
      type: 'message',
      text: this.state.chatMessage,
      userAvatar: 'https://randomuser.me/api/portraits/men/35.jpg',
      userName: 'Иван',
      fromMe: true
    });

    this.setState({ chatMessage: '' });
  }

  render() {
    return (
      <div className={s.root}>
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
            onClick={this.sendMessage}
          >
            Отправить
          </Button>
        </div>
      </div>
    );
  }
}
