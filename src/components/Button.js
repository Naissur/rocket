import React from 'react';
import cn from 'classnames';

import './Button.css';


export default class Button extends React.PureComponent {
  render() {
    const { className, children, ...restProps } = this.props;

    return (
      <button
        className={cn('button', className)}
        {...restProps}
      >
        {children}
      </button>
    );
  }
}
