import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
   <main className="navbar-main">
    <section className="navbar-section1">
      <ul className="navbar-list">
        <li className="navbar-listItemhead">
          <a className="navbar-link" href="#home">PortFolio</a>
        </li>
      </ul>
    </section>
    <section className="navbar-section2">
      <ul className="navbar-list">
        <li className="navbar-listItem">
          <a href="https://github.com/creativeSandeepKumar" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github"></i>
        </a>
        </li>
        <li className="navbar-listItem">
        <a href="https://www.linkedin.com/in/sandeepkumarofficial/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin"></i>
        </a>
        </li>
        <li className="navbar-listItem">
        <i className="fa-brands fa-instagram"></i>
        </li>
      </ul>
    </section>
    <section className="navbar-section3">
      <ul className="navbar-list">
        <li className="navbar-listItem">
          <a href="#projects" className="navbar-link">Projects</a>
        </li>
        <li className="navbar-listItem">
          <a href="#tech" className="navbar-link">Technologies</a>
        </li>
        <li className="navbar-listItem">
          <a href="#about" className="navbar-link">About Repo</a>
        </li>
      </ul>
    </section>
   </main>
  )
}

export default Navbar