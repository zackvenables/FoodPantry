import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';

class Donation extends React.Component{
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
						<a href="/events">Events</a>
						<a className={styles.active} href="/donate">Donate</a>
					</div>

					<img src="https://fixcom.azureedge.net/assets/content/15713/pantry-power-header.jpg" className={styles.image}/>
          
					<h2 className={styles.giveFunds}>Give Funds</h2>
					<p className={styles.description}>
						One of the best ways you can assist Reynoldsburg Helping 
						Hands fight hunger is by providing a monetary gift. We apply your contribution directly 
						toward our community's current and most pressing needs. By providing a struggling family
						with nutritious food, you are providing more than just a meal, you are fueling their future.
					</p>

					<div className={styles.donateButton}>
						<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
							<input type="hidden" name="cmd" value="_donations" />
							<input type="hidden" name="business" value="4SEVMNS7AXNWQ" />
							<input type="hidden" name="currency_code" value="USD" />
							<input type="image" src="https://i.imgur.com/8PTN6BI.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
							<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
						</form>
					</div>

					<h2 className={styles.giveFunds}>Donate Goods</h2>
					<p className={styles.description}>
						We've made donating goods as simple as possible.  Just Drive up Cypress Alley and volunteers will be waiting to unload your donations!<br/><br/>The following items are in high demand: 
					</p>
					<ul className={styles.list}>
						<li>Non-perishable and non-expired food items</li>
						<li>Personal items such as toiletries, cleaning supplies and laundry items</li>
						<li>Baby items like formula and diapers</li>
					</ul>
				  </main>

				<footer className={styles.footer}>
					<p>7453 E. Main Street <br/> Reyonoldsburg, Ohio <br/> (614) 868-9394 <br/>  </p>
				</footer>
			</div>
		);
	}
}

export default Donation;