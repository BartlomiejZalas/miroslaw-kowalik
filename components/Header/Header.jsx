import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <section
      className={styles.header}
      style={{ backgroundImage: `url('/img/mirekkowalik.jpg')` }}
    >
      <div className={styles.heading}>
        Mirosław
        <br />
        Kowalik
      </div>
      <div className={styles.signature}>Fot. Jacek Zych</div>
    </section>
  );
};

export default Header;
