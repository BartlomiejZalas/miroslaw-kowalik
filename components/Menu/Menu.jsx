import React from 'react';
import styles from './Menu.module.css';
import Link from 'next/link';
import MenuLink from './MenuLink';

const Menu = () => {
  return (
    <header className={styles.menuContainer}>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <Link href="/">
            <a className={styles.logoLink}>Mirsoław Kowalik</a>
          </Link>
        </div>
        <div className={styles.links}>
          <MenuLink href="/aktualnosci" title="Aktualności" />
          <MenuLink href="/biografia" title="Biografia" />
          <MenuLink href="/dyskografia" title="Dyskografia" />
        </div>
      </div>
    </header>
  );
};

export default Menu;
