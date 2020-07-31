import React from 'react';
import styles from './News.module.css';

interface Props {
  full: boolean;
}

export const ContentComponent: React.FC<Props> = ({ full }) => {
  if (full) {
    return (
      <>
        <p>
          W ramach otrzymanego stypendium przez trzy najbliższe miesiące
          tworzymy z młodymi ludźmi „Nową Kulturę”. W każdym miesiącu
          zaprezentujemy Państwu utwór muzyczny.
        </p>
        <div className={styles.articleBigImgContainer}>
          <img
            src={`/img/news/nowa-kultura.jpg`}
            title="Nowa Kultura"
            className={styles.articleBigImg}
          />
        </div>
      </>
    );
  }

  return (
    <div className={styles.columnContainer}>
      <img
        src={`/img/news/min-nowa-kultura.jpg`}
        title="Nowa Kultura"
        className={styles.articleImg}
      />
      <p>
        W ramach otrzymanego stypendium przez trzy najbliższe miesiące tworzymy
        z młodymi ludźmi „Nową Kulturę”. W każdym miesiącu zaprezentujemy
        Państwu utwór muzyczny.
      </p>
    </div>
  );
};
