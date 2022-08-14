import React from 'react'
import { profile, Resume } from '../images';
import "./Header.css";


const Header = () => {
  return (
  <main className="header-main">
    <section className="header-section1">
    <h1>Welcome to <br />
      My Personal Portfolio
    </h1>
    <p>Enthusiastic Front-End Developer eager to contribute to team success through hardwork, attention to detail and excellent organizational skills. Clear understanding of projects and training in Front-End development. Motivated to learn, grow and execel. Eager to secure entry-level Front-End developer position.</p>
    <button className="header-btn"><a href={Resume} target="_blank" download>Get Resume</a></button>
    </section>
    <section className="header-section2">
          <img src={profile} alt="this is profile pic" width="100%" />
    </section>
  </main>
  )
}

export default Header