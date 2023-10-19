import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.list}>
        <li>
          <a href="https://github.com/NickButnar">
            <img src="/images/social/github.svg" alt="GitHub"></img>
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/nikita-butnar-22156226a">
            <img src="/images/social/linkedIn.svg" alt="linkedIn"></img>
          </a>
        </li>


        <li>
          <a href="https://www.instagram.com/nick_butnar">
            <img src="/images/social/instagram.svg" alt="Instagram"></img>
          </a>
        </li>
      </ul>

      <p className={styles.privacy}>Built with using React. © 2023 frontend-dev.com. All rights reserved</p>

    </div>
  )
}

export default Footer;
