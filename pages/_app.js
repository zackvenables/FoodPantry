import Navbar from '../Components/Navbar';
import Head from 'next/head';
import Footer from '../Components/Footer';
import Script from 'next/script'
import Router from 'next/router';
import styles from '../styles/Home.module.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-69G3N9QJT9`} />
      <Script strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-69G3N9QJT9', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      <div className={styles.container}>
        <main className={styles.main}>
          <Head>
              <title>Reynoldsburg Helping Hands</title>
              <link rel="icon" href="https://i.pinimg.com/originals/a7/21/15/a72115694d8a0f3c972a9b04a64c0159.png" />
          </Head>
          <Navbar />
          <img className={styles.image} src="https://fixcom.azureedge.net/assets/content/15713/pantry-power-header.jpg"/>
          <Component {...pageProps} /> 
          <Footer />
        </main>
      </div>
    </>
  ); 
}

export default MyApp
