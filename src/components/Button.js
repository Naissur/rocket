import React from 'react';
import cn from 'classnames';

import s from './Button.css';


export default class Button extends React.PureComponent {
  render() {
    const { className, children, ...restProps } = this.props;

    return (
      <button
        className={cn(s.button, className)}
        {...restProps}
      >
        {children}
      </button>
    );
  }
}
