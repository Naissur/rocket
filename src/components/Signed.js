import React from 'react';
import PropTypes from 'prop-types';

export default class Signed extends React.PureComponent {
  render() {
    const { positive, children } = this.props;

    return (
      <span style={{ color: positive ? '#6ece1a' : '#de1c28' }}>{children}</span>
    );
  }
}

Signed.propTypes = {
  positive: PropTypes.bool.isRequired
};

