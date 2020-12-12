import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import React from 'react';


class Home extends React.Component{
    constructor(props){
        super (props);  
    }

    render(){
      return (
        <div className={styles.container}>
          <Head>
            <title>Reynoldsburg Helping Hands</title>
            <link rel="icon" href="https://i.pinimg.com/originals/a7/21/15/a72115694d8a0f3c972a9b04a64c0159.png" />
          </Head>

          <main className={styles.main}>
            <div className={styles.logo}>
                <img src="https://i.imgur.com/2sDvrtP.png"/>
            </div>
            <div className={styles.topnav}>
				<a className={styles.active} href="/">Home</a>
				<a href="/about">About Us</a>
                <a  href="/events">Events</a>
                <a  href="/donate">Donate</a>
			</div>
           
            <img src="https://fixcom.azureedge.net/assets/content/15713/pantry-power-header.jpg" className={styles.image}/>
            
            <div className={styles.grid}>
              <a href="/donate" className={styles.card}>
                <h3>Donate Today</h3>
                <p></p>
              </a>
            </div>

            <h2 className={styles.announcements}>Upcoming Events</h2>
                <p className={styles.description}>Reynoldsburg Helping Hands is holding a Food Drive on November 21st from 10:00AM - 2:00PM.</p>

            <h2 className={styles.announcements}>For Assistance</h2>
                <h4 className={styles.assistanceTitles}>Hours of Operation: </h4>
                    <p>Tuesday, Wednesday, Friday, Saturday from 10:00AM - Noon</p>
                    <ul className={styles.list}>
                        <li>It is necessary to call a day ahead for an appointment.</li>
                        <li>Identification and proof of address are required when picking up groceries.</li>
                        <li>One call per address. Please be on time for your appointment.</li>
                        <li>It is the client's responsibility to check all food for freshness before using.</li>
                    </ul>

                <h4 className={styles.assistanceTitles}>Other Sources of Help: </h4>
                    <ul className={styles.list}>
                        <li>Lutheran Social Services: (614)443-4508 (Food)</li>
                        <li>Salvation Army: (614)221-6561</li>
                        <li>Volunteers of America: (614)224-8650</li>
                        <li>Joseph's Coat (Furniture and Clothing): (614)863-1371</li>
                        <li>Heart Food Pantry: (614)600-6065</li>
                        <li>Hands On of Central Ohio (Food): <b>211 for Emergency Help Line</b> or (614)221-2255 or (614)341-2282</li>
                    </ul>
            
            <h2 className={styles.announcements}>Our Location</h2>
                <p className={styles.description}>We are located on the Cypress Alley side of Site Engineering Inc.</p>

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