import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
 
const Navbar = () => {
    const router = useRouter();
    return (
        <>
            <div className={styles.navcontainer}>
                <div className={styles.navitem}>
                    <div className={styles.logo}>
                        <img src="https://i.imgur.com/2sDvrtP.png"/>
                    </div>
                    <div className={styles.topnav}>
                        <Link href="/"><a className={router.pathname === '/' ? styles.active : ''}>Home</a></Link>
                        <Link href="/about"><a className={router.pathname === '/about' ? styles.active : ''}>About Us</a></Link>
                        <Link href="/events"><a className={router.pathname === '/events' ? styles.active : ''}>Events</a></Link>
                        <Link href="/donate"><a className={router.pathname === '/donate' ? styles.active : ''}>Donate</a></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
