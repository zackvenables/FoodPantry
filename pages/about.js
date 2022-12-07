import React from 'react';
import styles from '../styles/Home.module.css';

class About extends React.Component{
	constructor(props){
        super(props);
    }

	render(){
		return(
			<>
        <img className={styles.aboutImg} src="https://i.imgur.com/KAo2O4r.jpg"/>
        <h2 className={styles.announcements}>Our Story</h2>
        <p className={styles.description}>In 1958, retired Reynoldsburg School nurse, Mary Frances, decided to give aid to those students and families she had served for many years. Along with some local help, she began Reynoldsburg Helping Hands food pantry to benefit those that lived in the Reynoldsburg School District. Today, Reynoldsburg Helping Hands has grown to serve individuals and families living within the entire City of Reynoldsburg. Over 20 volunteers give hours of their time each week shopping for food, sorting donations, stocking shelves, making appointments, and packing food for clients. Reynoldsburg Helping Hands is committed to serving their community and providing assistance to those in need.</p>
      </>
		);
	}
}

export default About;
