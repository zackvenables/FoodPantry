import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import React from 'react';

import MapContainer from '../assets/map'



class Home extends React.Component{
    constructor(props){
        super (props);

        this.getAnnouncement = this.getAnnouncement.bind(this);
        this.getEvents = this.getEvents.bind(this);
    }

    getAnnouncement(){
        return(
                <p className={styles.description}>Here's where you can add announcements about the pantry</p>
        );
    }

    getEvents(){
        return(
            <p className={styles.description}>Here's where you can add upcoming dates and times for the pantry</p>
        ); 
    }

    render(){
      return (
        <div className={styles.container}>
          <Head>
            <title>Reynoldsburg Helping Hands</title>
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

            <h2 className={styles.announcements}>Announcements</h2>
                {this.getAnnouncement()}

            <h2 className={styles.announcements}>Upcoming Events</h2>
                {this.getEvents()}
            
            <h2 className={styles.announcements}>Our Location</h2>
                <p className={styles.description}>We are located on the back side of Site Engineering Inc.</p>

            <div>
                <img className={styles.map} src="https://i.imgur.com/yCSfdea.png" />
            </div>            

          </main>

          <footer className={styles.footer}>
            <p>7453 E. Main Street <br/> Reyonoldsburg, Ohio <br/> (614) 868-9394 <br/>  </p>
          </footer>
        </div>
      );
     }
}

export default Home;