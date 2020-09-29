import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import React from 'react';


class Home extends React.Component{

    render(){
      return (
        <div className={styles.container}>
          <Head>
            <title>Reynoldsburg Food Pantry</title>
            <link rel="icon" href="https://i.pinimg.com/originals/a7/21/15/a72115694d8a0f3c972a9b04a64c0159.png" />
          </Head>

          <main className={styles.main}>
            <h1 className={styles.title}>
              Reynoldsburg Food Pantry
            </h1>

            <p className={styles.description}>
              Cool pantry slogan here!
            </p>
            
            <img src="https://fixcom.azureedge.net/assets/content/15713/pantry-power-header.jpg" className={styles.image}/>
            

            <h2>Pantry announcements and upcoming events</h2>

            <div className={styles.grid}>
              <a href="/donate" className={styles.card}>
                <h3>Make A Donation Here &rarr;</h3>
                <p></p>
              </a>

         
            </div>
          </main>

          <footer className={styles.footer}>
            <p>Street <br/> City <br/> Phone <br/> Email</p>
          </footer>
        </div>
      );
     }
}

export default Home;
