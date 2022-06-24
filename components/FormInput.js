import React from 'react';

import styles from '../styles/FormInput.module.css';

const FormInput = ({ id, label, handleChange, ...otherProps }) => {
  return (
    <React.Fragment>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        className={styles.input}
        onChange={handleChange}
        {...otherProps}
      />
    </React.Fragment>
  );
};

export default FormInput;
