import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import UserAvatar from '../../components/UserAvatar';
import s from './UserMessageView.css';


export default class UserMessageView extends React.PureComponent {
  render() {
    const { text, userAvatar, userName, alignRight } = this.props;

    const Avatar = (
      <div key="1" className={s.avatar}>
        <UserAvatar url={userAvatar} />
      </div>
    );

    const Text = (
      <div key="2" className={s.text}>
        <b>{userName}</b>: { text }
      </div>
    );

    return (
      <div className={cn(s.root, alignRight && s.alignRight)}>
        {alignRight ? [Text, Avatar] : [Avatar, Text]}
      </div>
    );
  }
}

UserMessageView.propTypes = {
  text: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  alignRight: PropTypes.bool.isRequired
};

