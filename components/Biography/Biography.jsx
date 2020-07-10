import React from 'react';
import styles from './Biography.module.css';
import ActionButton from '../ActionButton/ActionButton';

const Biography = ({ short = false }) => {
  let content = null;
  if (short) {
    content = (
      <>
        <p>
          Kompozytor, autor muzyki i tekstów, producent muzyczny, od dwudziestu
          dziewięciu lat gra na gitarze basowej i kontrabasie w zespole Raz Dwa
          Trzy.
        </p>
        <ActionButton to="/biografia" href="/biografia" title="czytaj więcej &raquo;" />
      </>
    );
  } else {
    content = (
      <div className={styles.full}>
        <p>
          Kompozytor, autor muzyki i tekstów, producent muzyczny, od dwudziestu
          dziewięciu lat gra na basie i kontrabasie w zespole Raz Dwa Trzy.
        </p>
        <p>Współautor i producent muzyczny następujących płyt: </p>
        <p>
          „Góry w sercu” - nagrana z Janem Trebunią - Tutką. Płyta plasowała
          się w złotej dwudziestce Europejskiej Listy Przebojów Muzyki Folkowej
          „Word Music Charts Europe”, była nominowana do nagrody Fryderyki 2011
          i wysoko notowana w plebiscytach radiowych.{' '}
        </p>
        <p>
          „Muzyko siłę daj” - płyta zespołu Jazgot, to kolejny album, który
          znalazł się na liście przebojów „World Music Charts Europe”.{' '}
        </p>
        <p>„Po co tyle mówić”- z Janem Trebunia-Tutką i zespołem eMBand. </p>
        <p>
          „Kolędałka” – z udziałem Zbigniewa Wodeckiego, Jerzego Treli, Maleo,
          Ernesta Brylla, Lidii Pospieszalskiej, Zuzanny i Yaniny Iwańskich.
          Płyta nagrana z mieszkańcami Gminy Stare Bogaczowice.{' '}
        </p>
        <p>
          „Między chmurami a niebem” – autorski projekt oparty na własnej
          poezji i kompozycjach muzycznych. Teksty czytają Ernest Bryll, Jerzy
          Trela i Marcin Styczeń.{' '}
        </p>
        <p>
          „Tischner. Mocna Nuta”. Płyta jest oparta na inspiracjach filozofią
          księdza profesora Józefa Tischnera. Udział w nagraniu płyty wzięli:
          Kayah, Wojciech Waglewski, Jorgos Skolias, Zygmunt (Muniek) Staszczyk,
          zespół Trebunie - Tutki, Mateusz Pospieszalski. Album był nominowany
          do nagrody Fryderyki 2019.
        </p>
        <p>
          „Jasność Narodzenia” z tekstami Ernesta Brylla i z udziałem Ani
          Rusowicz, Krystyny Prońko, Jana Trebuni-Tutki, Anny Trebuni-Wyrostek,
          Andrzeja Polaka. Album był nominowany do nagrody Fryderyki 2019.
        </p>
        <p>
          Również w 2010 roku wydał tomik z poezją i płytą oparta na tekstach z
          tego tomu "Okruchy".
        </p>
      </div>
    );
  }

  return (
    <section className={styles.biography}>
      <h2>Biografia</h2>
      <div className={styles.content}>{content}</div>
    </section>
  );
};

export default Biography;
