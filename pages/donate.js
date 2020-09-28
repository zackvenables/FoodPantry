import Link from 'next/link';
import styles from '../styles/Home.module.css';
import React from 'react';

class Donation extends React.Component{
	render(){
	
	return(
	<div className={styles.container}>
		<h1>Donate</h1>
		<p>Here is the page where people will make their donations through PayPal <br/> (It works don't donate to me)</p>
		<img src = "https://lh3.googleusercontent.com/proxy/h_wlZBfH68AfN96-kDq1XaIFasbC8Nl3SJKPFdZ0L_JuCcNVivP4rhW8-UcKLm7cGe-B8vbAtAKmtnvF3_Uvx4l7" />
		<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_donations" />
			<input type="hidden" name="business" value="4SEVMNS7AXNWQ" />
			<input type="hidden" name="item_name" value="Food Pantry" />
			<input type="hidden" name="currency_code" value="USD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
			<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
	</div>
	);
	}
}

export default Donation;