import React from 'react';
import styles from './Menu.module.css';

import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
  href: string;
  title: string;
}

const MenuLink: React.FC<Props> = ({ href, title }) => {
  const { pathname } = useRouter();

  return (
    <Link href={href}>
      <a
        className={
          pathname.startsWith(href)
            ? `${styles.link} ${styles.linkActive}`
            : styles.link
        }
      >
        <span>{title}</span>
      </a>
    </Link>
  );
};

export default MenuLink;
