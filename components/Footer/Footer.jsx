import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        Wszelkie prawa zastrzeżone &copy; Mirosław Kowalik{' '}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
