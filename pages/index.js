import React from 'react';
import styles from '../styles/Home.module.css';

class Home extends React.Component{
  constructor(props){
      super (props);  
  }

  render(){
    return (
      <>  
        <h2 className={styles.announcements}>Announcements</h2>
        <p className={styles.description}>Due to severe weather, the Food Pantry is closed today, Friday, Dec. 23rd. The Food Pantry will be closed from Saturday, Dec. 24th - Monday, Jan. 2nd</p>
        <h2 className={styles.announcements}>For Assistance</h2>
        <h4 className={styles.assistanceTitles}>Hours of Operation: </h4>
        <p className={styles.description}>Tuesday, Friday, Saturday from 10:00AM - Noon, Wednesday 2:00-4:00PM</p>
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
      </>
    );
  }
}

export default Home;
