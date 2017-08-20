import React from 'react';
import PropTypes from 'prop-types';

import s from './UserAvatar.css';


export default class UserAvatar extends React.PureComponent {
  render() {
    const { url } = this.props;

    return (
      <div className={s.root}>
        <div
          style={{ backgroundImage: `url(${url})` }}
          className={s.avatar}
        />
      </div>
    );
  }
}

UserAvatar.propTypes = {
  url: PropTypes.string.isRequired
};

