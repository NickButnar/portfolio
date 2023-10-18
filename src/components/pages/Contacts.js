import React from "react";
import Form from "./Form";

const Contacts = () => {
  return (
    <div className="Contacts">
      <div className=" main__wrapper info">
        <h1 className="info__title">Contacts</h1>
        <div className="info__section">
          <h2 className="info__subtitle">Location</h2>
          <p>Batumi, Georgia</p>
        </div>

        <div className="info__section">
          <h2 className="info__subtitle">Facetime</h2>
          <a href="facetime:+995511296890" className="info__item">+995 (999) 99-99-99</a>
        </div>


        <div className="info__section">
          <h2 className="info__subtitle">Email</h2>
          <a href="mailto:test@test.com" className="info__item">test@test.com</a>
        </div>
      </div>
      <Form />
    </div>
  )
}

export default Contacts;
