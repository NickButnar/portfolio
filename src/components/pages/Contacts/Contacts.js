import React from "react";
import Form from "../../Form/Form";
import styles from './contacts.module.css'
import FinalForm from "../../FinalForm/FInalForm";

const Contacts = () => {
  return (
    <div>
      <div className={styles.contacts}>
        <h1 className={styles.title}>Contacts</h1>
        <div className={styles.section}>
          <h2 className={styles.subtitle}>Location</h2>
          <p>Batumi, Georgia</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.subtitle}>Facetime</h2>
          <a href="facetime:+995511296890" className={styles.item}>+995 (999) 99-99-99</a>
        </div>

        <div className={styles.section}>
          <h2 className={styles.subtitle}>Email</h2>
          <a href="mailto:test@test.com" className={styles.item}>test@test.com</a>
        </div>
      </div>

      <Form />
      <FinalForm />
    </div>
  )
}

export default Contacts;
