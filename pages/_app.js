import Navbar from '../Components/Navbar';
import Head from 'next/head';
import Footer from '../Components/Footer';
import styles from '../styles/Home.module.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <Head>
              <title>Reynoldsburg Helping Hands</title>
              <link rel="icon" href="https://i.pinimg.com/originals/a7/21/15/a72115694d8a0f3c972a9b04a64c0159.png" />
          </Head>
          <Navbar />
          <img className={styles.navimage} src="https://fixcom.azureedge.net/assets/content/15713/pantry-power-header.jpg" className={styles.image}/>
          <Component {...pageProps} /> 
          <Footer />
        </main>
      </div>
    </>
  ); 
}

export default MyApp
