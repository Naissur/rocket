import React from 'react';
import PropTypes from 'prop-types';
import MessageView from './MessageView';

import s from './UserMessageView.css';


export default class UserMessageView extends React.PureComponent {
  render() {
    const { text, userAvatar, userName, alignRight } = this.props;

    return (
      <MessageView
        text={<span className={s.text}><b>{userName}</b>: { text }</span>}
        userAvatar={userAvatar}
        userName={userName}
        alignRight={alignRight}
      />
    );
  }
}

UserMessageView.propTypes = {
  text: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  alignRight: PropTypes.bool.isRequired
};

