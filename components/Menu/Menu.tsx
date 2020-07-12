import React, { useState, useEffect } from 'react';
import styles from './Menu.module.css';
import Link from 'next/link';
import MenuLink from './MenuLink';
import { Router } from 'next/router';

const Menu: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleRouteChange = () => setMobileMenuOpen(false);

  useEffect(() => {
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, []);

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

        <div className={styles.mobileMenuToggle}>
          <a
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen((current) => !current);
            }}
          >
            ☰
          </a>
        </div>
      </div>
      <div
        className={
          mobileMenuOpen
            ? styles.mobileLinks + ' ' + styles.extended
            : styles.mobileLinks
        }
      >
        <MenuLink href="/aktualnosci" title="Aktualności" />
        <MenuLink href="/biografia" title="Biografia" />
        <MenuLink href="/dyskografia" title="Dyskografia" />
      </div>
    </header>
  );
};

export default Menu;
