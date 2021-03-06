import React from 'react';
import styles from './Article.module.css';
import { News } from '../../news/news';
import Link from 'next/link';

interface Props {
  news: News;
  short?: boolean;
}

const Article: React.FC<Props> = ({ news, short }) => {
  const { ContentComponent } = require(`../../news/${news.componentName}`);

  if (short) {
    return (
      <section className={styles.article}>
        <div className={styles.head}>
          <h2 className={styles.title + ' ' + styles.titleSmall}>
            {news.title}
          </h2>
          <span className={styles.date}>{news.date}</span>
        </div>
        <ContentComponent full={false} />
        <div className={styles.moreContainer}>
          <Link href={`/aktualnosci/[id]`} as={`/aktualnosci/${news.id}`}>
            <a className={styles.moreLink}>czytaj więcej &raquo;</a>
          </Link>
        </div>
      </section>
    );
  } else {
    return (
      <section className={styles.article}>
        <div className={styles.padding}>
          <div className={styles.head}>
            <h2 className={styles.title}>{news.title}</h2>
            <span className={styles.date}>{news.date}</span>
          </div>
          <ContentComponent full={true} />
        </div>
      </section>
    );
  }
};

export default Article;
