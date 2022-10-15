import React from 'react';
import styles from '../styles/Home.module.css';


class Contact extends React.Component{
	constructor(props){
        super(props);
    }

	render(){
		return(
      <>
        <img src="https://fixcom.azureedge.net/assets/content/15713/pantry-power-header.jpg" className={styles.image}/>    
        <div className={styles.grid}>
          <a href="/donate" className={styles.card}>
            <h3>Donate Today</h3>
          </a>
        </div>
      </>  
		);
	}
}

export default Contact;
