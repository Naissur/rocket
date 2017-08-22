import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import UserAvatar from '../../components/UserAvatar';
import s from './MessageView.css';


export default class MessageView extends React.PureComponent {
  render() {
    const { text, userAvatar, alignRight } = this.props;

    const Avatar = (
      <div key="1" className={s.avatar}>
        <UserAvatar url={userAvatar} />
      </div>
    );

    const Text = (
      <div key="2" className={s.text}>
        {text}
      </div>
    );

    return (
      <div className={cn(s.root, alignRight && s.alignRight)}>
        {alignRight ? [Text, Avatar] : [Avatar, Text]}
      </div>
    );
  }
}

MessageView.propTypes = {
  text: PropTypes.any.isRequired,
  userAvatar: PropTypes.string.isRequired,
  alignRight: PropTypes.bool.isRequired
};

