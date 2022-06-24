import React from 'react';
import { ERROR, SUCCESS } from '../constants/globalConstants';

import styles from '../styles/Toast.module.css';

const Toast = ({ text, type }) => {
  if (type === ERROR)
    return <div className={`${styles.container} error`}>{text}</div>;
  if (type === SUCCESS)
    return <div className={`${styles.container} success`}>{text}</div>;
};

export default Toast;
