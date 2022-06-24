import React from 'react';

import styles from '../styles/ProfileCard.module.css';

const ProfileCard = ({
  title,
  email = '',
  text1 = '',
  text2 = '',
  text3 = '',
  type,
}) => {
  switch (type) {
    case 'info':
      return (
        <div className={styles.card}>
          <h3>{title}:</h3>
          <p> {text1}</p>
          <p>&#128231; {email}</p>
          <p>&#9742; {text2}</p>
          <p>&#127760; {text3}</p>
        </div>
      );
    case 'address':
      return (
        <div className={styles.card}>
          <h3>{title}:</h3>
          <p>{text1}</p>
          <p>{text2}</p>
          <p>&#128205; {text3}</p>
        </div>
      );
    default:
      return (
        <div className={styles.card}>
          <h3>{title}:</h3>
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
        </div>
      );
  }
};

export default ProfileCard;
