import React from 'react';
import styles from './News.module.css';

interface Props {
  full: boolean;
}

export const ContentComponent: React.FC<Props> = ({ full }) => {
  if (full) {
    return (
      <div>
        <p>
          Zrealizowano w ramach programu stypendialnego Ministra Kultury i
          Dziedzictwa Narodowego – Kultura w sieci. Utwór nosi tytuł
          "Butterfly", a w tworzeniu go wzięli udział:
        </p>
        <p>
          Wykonawcy:
          <br />
          Dobrosław Jabłoński - gitary
          <br />
          Bartłomiej Golec - puzony
          <br />
          Krzysztof Jakubowski - akordeon
          <br />
          Bartłomiej Brózda - bas
          <br />
          Paweł Kowalik - trąbki, instrumenty klawiszowe
          <br />
          Mirosław Kowalik - lupy
          <br />
        </p>

        <p>
          muz. Dobrosław Jabłoński, Bartłomiej Golec, Bartłomiej Brózda,
          Krzysztof Jakubowski Paweł Kowalik, Mirosław Kowalik
        </p>

        <p>
          zgranie i mastering - Jacek Gładkowski
          <br />
          produkcja muzyczna - Mirosław Kowalik
        </p>
        <div className={styles.articleBigImgContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yauL_gBGQQw"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.columnContainer}>
      <iframe
        width="100%"
        height="157"
        src="https://www.youtube.com/embed/yauL_gBGQQw"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div>
        <p>
          Prezentujemy drugi utwór z cyklu "Kultura w Sieci" w ramach programu
          stypendialnego Ministra Kultury i Dziedzictwa Narodowego. Utwór nosi
          tytuł "Butterfly"...
        </p>
      </div>
    </div>
  );
};
