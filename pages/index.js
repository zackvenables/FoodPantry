import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import React from 'react';


class Home extends React.Component{
    constructor(props){
        super (props);  
    }

    render(){
      return (
        <div className={styles.container}>
          <Head>
            <title>Reynoldsburg Helping Hands</title>
            <link rel="icon" href="https://i.pinimg.com/originals/a7/21/15/a72115694d8a0f3c972a9b04a64c0159.png" />
          </Head>

          <main className={styles.main}>
            <div className={styles.logo}>
                <img src="https://i.imgur.com/2sDvrtP.png"/>
            </div>
            <div className={styles.topnav}>
				<a className={styles.active} href="/">Home</a>
				<a href="/about">About Us</a>
                <a  href="/events">Events</a>
                <a  href="/donate">Donate</a>
			</div>
           
            <img src="https://fixcom.azureedge.net/assets/content/15713/pantry-power-header.jpg" className={styles.image}/>
            
            <div className={styles.grid}>
              <a href="/donate" className={styles.card}>
                <h3>Donate Today</h3>
              </a>
            </div>

<<<<<<< HEAD
            <h2 className={styles.announcements}>Announcements</h2>
                <p className={styles.description}>The food pantry is closed today, Feb. 4th, and tomorrow, Feb. 5th, due to inclement weather. Please call and leave a message to make an appointment for Tuesday morning.</p>

            <h2 className={styles.announcements}>For Assistance</h2>
                <h4 className={styles.assistanceTitles}>Hours of Operation: </h4>
                    <p className={styles.description}>Tuesday, Wednesday*, Friday, Saturday from 10:00AM - Noon</p>
=======
            <p className={styles.description}>Don’t forget to go to the Moo Moo Express Car Wash on E Mail Street in front of Value City Furniture to snag your $1 fall scented air freshener! Not only do 100% of the proceeds benefit our pantry but you’ll also have a chance to win free car washes for a year! Each Moo Moo location is supporting a different local charity! Check out the great company we are in:</p>

            <img src="https://scontent.fcmh1-1.fna.fbcdn.net/v/t1.6435-9/242079333_247503164046501_1914248487091696600_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=jjz-bK3rJvkAX_c1hOh&_nc_ht=scontent.fcmh1-1.fna&oh=1339b231db12afd83b406cbe70803214&oe=6168ED97"className={styles.image}/>

            <h2 className={styles.announcements}>Upcoming Events</h2>
                <p className={styles.description}>Reynoldsburg Helping Hands is holding a Food Drive on November 6th, 2021 from 10:00AM - 2:00PM.</p>

            <h2 className={styles.announcements}>For Assistance</h2>
                <h4 className={styles.assistanceTitles}>Hours of Operation: </h4>
                    <p className={styles.description}>Tuesday, Friday, Saturday from 10:00AM - Noon, Wednesday 4:00pm-6:00pm</p>
>>>>>>> 4b55fd6591f85ca35234878886a31dca73696a10
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

          </main>

          <footer className={styles.footer}>
            <p>7453 E. Main Street <br/> Reyonoldsburg, Ohio <br/> (614) 868-9394 <br/>  </p>
          </footer>
        </div>
      );
     }
}

export default Home;