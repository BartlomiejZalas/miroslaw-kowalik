import React from 'react';
import styles from './News.module.css';
import ActionButton from '../ActionButton/ActionButton';
import { NEWS } from '../../news/news';
import Article from '../Article/Article';

const News = ({ short = false }) => {
  return (
    <section className={styles.news}>
      <h2 className={styles.title}>Aktualności</h2>
      {NEWS.slice(0, short ? 5 : NEWS.length).map((n) => (
        <Article news={n} short={true} />
      ))}
      {short && (
        <ActionButton
          to="/aktualnosci"
          href="/aktualnosci"
          title="zobacz więcej aktualności &raquo;"
        />
      )}
    </section>
  );
};

export default News;
