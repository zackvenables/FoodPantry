import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import React from 'react';


class Events extends React.Component{
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
                        <a href="/about">About Us</a>
                        <a className={styles.active} href="/events">Events</a>
				        <a href="/donate">Donate</a>
			        </div>
           
                    <img src="https://fixcom.azureedge.net/assets/content/15713/pantry-power-header.jpg" className={styles.image}/>
            
                    <div className={styles.grid}>
                      <a href="/donate" className={styles.card}>
                        <h3>Donate Today</h3>
                        <p></p>
                      </a>
                    </div>

                    
                    <img src="https://i.imgur.com/Z0Raoax.jpg"  className={styles.golfSponsors} />
                    <p className={styles.description}>The Chuck Martin Memorial Golf Outing is an event that raises money every year to donate to charities in the community. In the summer of 2020, the Martin Family chose to donate proceeds from the golf outing to support Reynoldsburg Helping Hands. After collaborating with the food pantry's volunteers to gain sponsors and organize prizes for the outing, the culminating event on September 13th, 2020 saw 18 groups participate in the golf outing and ended with a raffle for donated prizes. Thank you to the Martin Family and all the participants and local sponsors for making this event fun and extremely successful!</p>
                    

                  </main>

                  <footer className={styles.footer}>
                    <p>7453 E. Main Street <br/> Reyonoldsburg, Ohio <br/> (614) 868-9394 <br/>  </p>
                  </footer>
                </div>
		);
	}
}

export default Events;