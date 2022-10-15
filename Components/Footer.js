import React from 'react';
import styles from '../styles/Home.module.css';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <p>7453 E. Main Street, Reyonoldsburg, Ohio <br/>
                    <span className={styles.footerphone}>(614) 868-9394 </span></p>
            </footer>
        </>
    );
}

export default Footer;
