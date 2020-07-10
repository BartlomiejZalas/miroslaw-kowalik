import React from 'react';
import styles from './Discography.module.css';
import ActionButton from '../ActionButton/ActionButton';

const albums = [
  {
    name: 'Okruchy',
    year: 2019,
    description:
      'Agora / DCU Mirosław Kowalik, Joanna Szczepkowska, Andrzej Poniedzielski, Aleksander Fiut, Zosia Trebunia, Michał Miśkiewicz, Joachim Mencel, Tomasz Wendt, Marcin Zaleś, Paweł Kowalik',
    img: '/img/covers/okruchy.png',
  },
  {
    name: 'Ernest Bryll',
    year: 2018,
    description:
      'Edycja Św. Pawła Krystyna Prońko, Jerzy Trela, Ania Rusowicz, Jan Trebunia-Tutka z zespołem, Anna Trebunia-Tutka, Andrzej Polak',
    img: '/img/covers/ernest-bryll.png',
  },
  {
    name: 'Tischner Mocna Nuta',
    year: 2018,
    description:
      'Agora, Mirosław Kowalik, Mateusz Pospieszalki, Jorgos Skolias, Zygmunt Staszczyk, Trebunie-Tutki, Kayach. Wojciech Waglewski',
    img: '/img/covers/tischner.png',
  },
  {
    name: 'eM Band',
    year: 2016,
    description: 'Polskie Radio, Jan Trebunia-Tutka eM Band',
    img: '/img/covers/em-band.png',
  },
  {
    name: 'Kolędałka',
    year: 2016,
    description:
      'Edycja Św. Pawła, Jan Trebunia-Tutka, Lidia Pospieszalska, Maleo, Ernest Bryll, Zbigniew Wodecki, Jerzy Trela, Zuzanna i Yanina Iwańscy, Mieszkańcy Gminy Stare Bogaczowice i Przyjaciele',
    img: '/img/covers/koledalka.png',
  },
  {
    name: 'Między Chmurami a Niebem',
    year: 2013,
    description:
      'Edycja Św. Pawła, Mirosław Kowalik, Jerzy Trela, Ernest Bryll, Marcin Styczeń',
    img: '/img/covers/miedzy-chmurami-a-niebem.png',
  },
  {
    name: 'Kiedy Bóg się Rodzi...',
    year: 2013,
    description:
      "Edycja Św. Pawła, Mirosław Kowalik, Jazgot, Trebunie-Tutki, Pospieszalscy, New Life'M, Hanna Rybka, Jerzy Trela, Lidia Pospieszalska, Mateusz Pospieszalski",
    img: '/img/covers/kiedy-bog-sie-rodzi.png',
  },
  {
    name: 'Święta z Jazgotem',
    year: 2011,
    description: '4everMusic, Jazgot',
    img: '/img/covers/jazgot.png',
  },
  {
    name: 'Góry w Sercu',
    year: 2010,
    description: '4everMusic, Jan Trebunia-Tutka',
    img: '/img/covers/gory-w-sercu.png',
  },
  {
    name: 'Betlejemska Nowina',
    year: 2009,
    description: '4everMusic, Tabasco Club',
    img: '/img/covers/tabasco.png',
  },
];

const Discography = ({ short = false }) => {
  const albumsToDisplay = short ? albums.slice(0, 3) : albums;

  return (
    <section className={styles.Discography}>
      <h2 className={styles.title}>Dyskografia</h2>
      <div className={styles.content}>
        <div className={styles.albums}>
          {albumsToDisplay.map((a) => (
            <div className={styles.albumContainer}>
              <img src={a.img} className={styles.cover} alt={a.name} />
              <div className={styles.details}>
                <div className={styles.title}>{a.name}</div>
                <div className={styles.year}>{a.year}</div>
                <div className={styles.description}>{a.description}</div>
              </div>
            </div>
          ))}
        </div>
        {short && (
          <ActionButton
            to="/dyskografia"
            href="/dyskografia"
            title="zobacz wszystko &raquo;"
          />
        )}
      </div>
    </section>
  );
};

export default Discography;
