import { classNames } from '@telegram-apps/sdk-react';
import React from 'react';

import './RGB.css';

export const RGB = ({ color, className, ...rest }) => (
  <span {...rest} className={classNames('rgb', className)}>
    <i className='rgb__icon' style={{ backgroundColor: color }}/>
    {color}
  </span>
);
