import React from 'react'
import styles from "../styles/navbar.module.css"
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className={styles.navbar_brand}>
        <div >
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}>
                    <Link href="/">HOME</Link>

                </li>
                <li className={styles.navbarItem}>
                    <Link href="/about">ABOUT</Link>
                    
                </li>
                <li className={styles.navbarItem}>
                    <Link href="/movie">MOVIES</Link>
                    
                </li>
                <li className={styles.navbarItem}>
                    <Link href="/contact">CONTACT</Link>
                    
                </li>
            </ul>
        </div>

    </nav>
  )
}

export default Nav
