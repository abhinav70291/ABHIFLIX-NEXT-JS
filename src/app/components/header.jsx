import React from 'react'
import styles from "../styles/navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'

const Header = () => {
  return (
    <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
            <Link href="/" className={styles.title}>
                <h2>ABHIFLIX</h2>
                <p>Designed by Abhinav</p>
            </Link>
        </div>
        <Nav />


    </header>
  )
}

export default Header
