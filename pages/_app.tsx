import '../styles/global.css';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mirosław Kowalik - oficjalna strona artysty</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato|Roboto+Slab:400,500,700,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Menu />
      <div className="container">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
