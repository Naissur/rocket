import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './TextArea.css';


export default class TextArea extends React.PureComponent {
  render() {
    const { value, onChange, className, ...restProps } = this.props;

    return (
      <textarea
        className={cn('text-area', className)}
        value={value}
        onChange={ev => (onChange && onChange(ev.target.value))}
        {...restProps}
      />
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

