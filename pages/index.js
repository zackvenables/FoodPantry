import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import React from 'react';




class Home extends React.Component{
    constructor(props){
        super (props);

        this.getAnnouncement = this.getAnnouncement.bind(this);
        this.getEvents = this.getEvents.bind(this);
    }

    getAnnouncement(){
        return(
            <p>Here's where you can put announcements concerning the pantry</p> 
        );
    }

    getEvents(){
        return(
            <p>Here's where you can add upcoming dates and times for the pantry</p>
        ); 
    }

    render(){
      return (
        <div className={styles.container}>
          <Head>
            <title>Reynoldsburg Food Pantry</title>
            <link rel="icon" href="https://i.pinimg.com/originals/a7/21/15/a72115694d8a0f3c972a9b04a64c0159.png" />
          </Head>

          <main className={styles.main}>
            <img src="https://i.imgur.com/WfEqPdQ.jpg" className={styles.logo}/>
            <hr className={styles.horLine} />

            <img src="https://fixcom.azureedge.net/assets/content/15713/pantry-power-header.jpg" className={styles.image}/>
            
            <div className={styles.grid}>
              <a href="/donate" className={styles.card}>
                <h3>Donate Today</h3>
                <p></p>
              </a>
            </div>

            <h2 className={styles.announcements}>Pantry Announcements</h2>
            {this.getAnnouncement()}

            <h2 className={styles.announcements}>Upcoming Events</h2>
            {this.getEvents()}

          </main>

          <footer className={styles.footer}>
            <p>Street <br/> City <br/> Phone <br/> Email</p>
          </footer>
        </div>
      );
     }
}

export default Home;
