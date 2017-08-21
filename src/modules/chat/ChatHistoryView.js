import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { groupBy, keys } from 'ramda';

import moment from 'moment';

import UserMessageView from './UserMessageView';


import s from './ChatHistoryView.css';


class ChatMessage extends React.PureComponent {
  render() {
    const { message } = this.props;

    if (message.type === 'text') {
      const { text, userAvatar, userName, fromMe } = message;

      return (
        <UserMessageView
          text={text}
          userAvatar={userAvatar}
          userName={userName}
          alignRight={!!fromMe}
        />
      );
    }
    return (
      <noscript />
    );
  }
}

class ChatHistoryDateGroup extends React.PureComponent {
  render() {
    const { date, messages } = this.props;

    return (
      <div className={s.dateGroup}>
        <div className={s.date}>
          — {date} —
        </div>
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
    );
  }
}

@connect(state => ({
  messages: state.chat.messages
}))
export default class ChatHistoryView extends React.PureComponent {
  render() {
    const { messages } = this.props;

    const groupedByDate = groupBy(msg => moment(msg.date).format('DD.MM.YYYY'), messages);
    const vals = keys(groupedByDate).sort().reverse();

    return (
      <div className={s.root}>
        {vals.map(date => (
          <ChatHistoryDateGroup
            key={date}
            messages={groupedByDate[date]}
            date={date}
          />
        ))}
      </div>
    );
  }
}

ChatHistoryView.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape())
};

