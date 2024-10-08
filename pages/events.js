import styles from '../styles/Home.module.css';
import React from 'react';

class Events extends React.Component{
	constructor(props){
    super(props);
  }

	render(){
		return(
      <>
      <img src="https://i.imgur.com/58MtYQT.jpg" ></img>
      <div>
        
      </div>
      <img src="https://i.imgur.com/7o4hkMl.jpg" ></img>
       <p className={styles.description}>The "Battle of 256" took place on Friday, Oct. 20th. Reynoldsburg competed against Pckerington Central in a high school football game as well as a food drive for their local communities. Reynoldsburg Helping Hands would like to thank BEAR, a Reynoldsburg-based organization, for leading this initiative and giving back to their community!</p>
        <div>

        </div>
        <img src="https://i.imgur.com/Z0Raoax.jpg"  className={styles.golfSponsors} />
        <img src="https://i.imgur.com/KINQW3d.png" className={styles.golfFamily}/>
        <p className={styles.description}>The Chuck Martin Memorial Golf Outing is an event that raises money every year to donate to charities in the community. In the summer of 2020, the Martin Family chose to donate proceeds from the golf outing to support Reynoldsburg Helping Hands. After collaborating with the food pantry's volunteers to gain sponsors and organize prizes for the outing, the culminating event on September 13th, 2020 saw 18 groups participate in the golf outing and ended with a raffle for donated prizes. Thank you to the Martin Family and all the participants and local sponsors for making this event fun and extremely successful!</p>
      </>
		);
	}
}

export default Events;
