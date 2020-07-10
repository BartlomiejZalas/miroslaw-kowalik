import React from 'react';
import Link from 'next/link';
import styles from './ActionButton.module.css';

interface Props {
  href: string;
  to: string;
  title: string;
}

const ActionButton: React.FC<Props> = ({ href, to, title }) => {
  return (
    <div className={styles.ActionButton}>
      <Link href={href} as={to}>
        <a className={styles.ActionButtonLink}>{title}</a>
      </Link>
    </div>
  );
};

export default ActionButton;
