import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';

class Donation extends React.Component{
	render(){
	
	return(
	<div className={styles.container}>
		<Head>
			<title>Reynoldsburg Food Pantry</title>
            <link rel="icon" href="https://i.pinimg.com/originals/a7/21/15/a72115694d8a0f3c972a9b04a64c0159.png" />
		</Head>

		<main className={styles.main}>
            <img src="https://i.imgur.com/WfEqPdQ.jpg" className={styles.logo}/>
            <hr className={styles.horLine} />

            <img src="https://fixcom.azureedge.net/assets/content/15713/pantry-power-header.jpg" className={styles.image}/>
          
			<h2 className={styles.announcements}>Give Funds</h2>
			<p className={styles.description}>One of the best ways you can help Reynoldsburg Helping Hands fight hunger is by providing a monetary gift. We apply your contribution directly toward our community's current and most pressing needs. By providing a struggling family with nutritious food, you are providing more than just a meal, you are fueling their future.</p>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
				<input type="hidden" name="cmd" value="_donations" />
				<input type="hidden" name="business" value="4SEVMNS7AXNWQ" />
				<input type="hidden" name="item_name" value="Food Pantry" />
				<input type="hidden" name="currency_code" value="USD" />
				<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
				<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
			</form>
          </main>

          <footer className={styles.footer}>
            <p>Street <br/> City <br/> Phone <br/> Email</p>
          </footer>
	
	</div>
	);
	}
}

export default Donation;