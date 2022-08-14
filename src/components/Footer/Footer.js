import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <main className="footer-main">
      <hr />
      <section className="footer-contact">
       <section className="footer-call">
        <p>CALL</p>
        <div><a href="tel:773-978-4209">773-978-4209</a></div>
       </section>
       <section className="footer-mail">
        <p>EMAIL</p>
        <div><a href="mailto:sdp4209@gmail.com">sdp4209@gmail.com</a></div>
       </section>
      </section>

      <section className="footer-icons">
        <section className="footer-section">
        <p>I don't just build websites, I build websites that SELLS”</p>
        </section>
        <section className="footer-section">
        <ul className="footer-list">
        <li className="footer-listItem">
          <a href="https://github.com/creativeSandeepKumar" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github"></i>
        </a>
        </li>
        <li className="footer-listItem">
          <a href="https://www.linkedin.com/in/sandeepkumarofficial/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin"></i>
        </a>
        </li>
        <li className="footer-listItem">
        <i className="fa-brands fa-instagram"></i>
        </li>
      </ul>
        </section>
        
      </section>
    </main>
  )
}

export default Footer