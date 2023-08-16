import React from 'react'
import ContactCard from "../components/ContactCard"
import styles from "@/app/contact/contact.module.css"
import ContactForm from "../components/ContactForm"

const page = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1>CONTACT US</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>We'd love to hear <span> from you</span></h2>
          <ContactForm />
        </section>
      </div>
    </div>
  )
}

export default page
