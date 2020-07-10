import React from 'react';

import Head from 'next/head';
import Header from '../components/Header/Header';
import Biography from '../components/Biography/Biography';
import Discography from '../components/Discography/Discography';
import News from '../components/News/News';

export default function Home() {
  return (
    <>     
      <Header />
      <News short={true} />
      <Biography short={true} />
      <Discography short={true} />
    
    </>
  );
}
