import React from 'react';
import styles from './News.module.css';

interface Props {
    full: boolean;
}

export const ContentComponent: React.FC<Props> = ({full}) => {
    if (full) {
        return (
            <div>
                <p>
                    Zrealizowano w ramach programu stypendialnego Ministra Kultury i
                    Dziedzictwa Narodowego – Kultura w sieci. Utwór nosi tytuł
                    "Siódma rano", a w tworzeniu go wzięli udział:
                </p>
                <p>
                    Wykonawcy:
                    <br/>
                    Martyna Bieszczad - saksofon
                    <br/>
                    Ignacy Wendt - trąbka
                    <br/>
                    Paweł Kowalik - instrumenty klawiszowe, lupy
                    <br/>
                    Mirosław Kowalik - bas
                    <br/>
                    Marcin Zaleś - gitara
                    <br/>
                </p>

                <p>
                    muzyka - Martyna Bieszczad, Ignacy Wendt, Paweł Kowalik, Mirosław Kowalik<br/>
                    konsultacja aranżacyjna - Tomasz Wendt
                </p>

                <p>
                    zgranie i mastering - Jacek Gładkowski
                    <br/>
                    produkcja muzyczna - Mirosław Kowalik
                </p>
                <div className={styles.articleBigImgContainer}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/0Szkao1NwHk"
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
                src="https://www.youtube.com/embed/0Szkao1NwHk"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            <div>
                <p>
                    Prezentujemy trzeci utwór z cyklu "Kultura w Sieci" w ramach programu
                    stypendialnego Ministra Kultury i Dziedzictwa Narodowego. Utwór nosi
                    tytuł "Siódma rano"...
                </p>
            </div>
        </div>
    );
};
