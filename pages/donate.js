import React from 'react';
import styles from '../styles/Home.module.css';

class Donation extends React.Component{
	constructor(props){
		super(props);
	}

	render(){	
		return(
			<>	
				<h2 className={styles.giveFunds}>Give Funds</h2>
				<p className={styles.description}>
					One of the best ways you can assist Reynoldsburg Helping 
					Hands fight hunger is by providing a monetary gift. We apply your contribution directly 
					toward our community's current and most pressing needs. By providing a struggling family
					with nutritious food, you are providing more than just a meal, you are fueling their future.
				</p>

				<div className={styles.donateButton}>
					<form action="https://www.paypal.com/donate" method="post" target="_top">
						<input type="hidden" name="hosted_button_id" value="XXPZ6XT6GA876" />
						<input type="image" src="https://i.imgur.com/6iaphoI.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
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
			</>
		);
	}
}

export default Donation;
