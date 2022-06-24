import React from 'react';

import styles from '../styles/CustomButton.module.css';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <div className={styles.container}>
      <button className={styles.custom_button} {...otherProps}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
