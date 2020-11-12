import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import React from 'react';


class Contact extends React.Component{
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
				        <a href="/donate">Donate</a>
				        <a className={styles.active}  href="/contact">Contact</a>
				        <a href="/about">About</a>
			        </div>
           
                    <img src="https://fixcom.azureedge.net/assets/content/15713/pantry-power-header.jpg" className={styles.image}/>
            
                    <div className={styles.grid}>
                      <a href="/donate" className={styles.card}>
                        <h3>Donate Today</h3>
                        <p></p>
                      </a>
                    </div>

                  </main>

                  <footer className={styles.footer}>
                    <p>7453 E. Main Street <br/> Reyonoldsburg, Ohio <br/> (614) 868-9394 <br/>  </p>
                  </footer>
                </div>
		);
	}
}

export default Contact;