import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import React from 'react';


class About extends React.Component{
	constructor(props){
        super(props);
    }

	render(){
		return(
			 <div className={styles.container}>
                  <Head>
                    <title>Reynoldsburg Helping Hands</title>
                    <link rel="icon" href="https://i.pinimg.com/originals/a7/21/15/a72115694d8a0f3c972a9b04a64c0159.png" />
                  </Head>

                  <main className={styles.main}>
                    <img src="https://i.imgur.com/2sDvrtP.png" className={styles.logo}/>

                    <div className={styles.topnav}>
				        <a href="/">Home</a>
				        <a className={styles.active} href="/about">About Us</a>
				        <a href="/events">Events</a>
				        <a href="/donate">Donate</a>
			        </div>
           
                    <img src="https://fixcom.azureedge.net/assets/content/15713/pantry-power-header.jpg" className={styles.image}/>
            
                    <div className={styles.grid}>
                      <a href="/donate" className={styles.card}>
                        <h3>Donate Today</h3>
                      </a>
                    </div>

                    <img className={styles.aboutImg} src="https://i.imgur.com/KAo2O4r.jpg"/>
                    <h2 className={styles.announcements}>Our Story</h2>
                    <p className={styles.description}>In 1958, retired Reynoldsburg School nurse, Mary Frances, decided to give aid to those students and families she had served for many years. Along with some local help, she began Reynoldsburg Helping Hands food pantry to benefit those that lived in the Reynoldsburg School District. Today, Reynoldsburg Helping Hands has grown to serve individuals and families living within the entire City of Reynoldsburg. Over 20 volunteers give hours of their time each week shopping for food, sorting donations, stocking shelves, making appointments, and packing food for clients. Reynoldsburg Helping Hands is committed to serving their community and providing assistance to those in need.</p>

                  </main>

                  <footer className={styles.footer}>
                    <p>7453 E. Main Street <br/> Reyonoldsburg, Ohio <br/> (614) 868-9394 <br/>  </p>
                  </footer>
                </div>
		);
	}
}

export default About;