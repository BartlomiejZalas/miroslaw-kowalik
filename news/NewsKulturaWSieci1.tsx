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
          Prezentujemy pierwszy utwór z cyklu "Kultura w Sieci"w ramach programu
          stypendialnego Ministra Kultury i Dziedzictwa Narodowego. Utwór nosi
          tytuł "Pueri", a w tworzeniu go wzięli udział:
        </p>
        <ul>
          <li>Wojciech Roman - gitara</li>
          <li>Przemysław Żur - gitara basowa</li>
          <li>Teodor Lulis - perkusja</li>
          <li>Paweł Kowalik - instr. klawiszowe, trąbka</li>
          <li>Adrian Szymański - saksofon</li>
          <li>
            Muzykę skomponowali - Wojciech Roman, Przemysław Żur, Teodor Lulis,
            Paweł Kowalik.
          </li>
          <li>Konsultacja aranżacyjna - Marcin Zaleś</li>
          <li>Produkcja muzyczna - Mirosław Kowalik</li>
          <li>Zgranie i mastering - Jacek Gładkowski</li>
        </ul>
        <div className={styles.articleBigImgContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UIqheCEoM6k"
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
        src="https://www.youtube.com/embed/UIqheCEoM6k"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div>
        <p>
          Prezentujemy pierwszy utwór z cyklu "Kultura w Sieci"w ramach programu
          stypendialnego Ministra Kultury i Dziedzictwa Narodowego. Utwór nosi
          tytuł "Pueri"...
        </p>
      </div>
    </div>
  );
};
