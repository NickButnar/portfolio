import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer__social">
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

      <p className="footer__privacy">Built with using React. © 2023 frontend-dev.com. All rights reserved</p>

    </div>
  )
}

export default Footer;
