import React from 'react';
import "./Accomplishment.css"

const Accomplishment = () => {
  return (
   <main id='about' className="accomplish-main">
    <div className="accomplish-topLine"></div>
    <h2>Projects that proves, I'm ready for you</h2>
    <section className="tech-container">
<section className="tech-section">
  <div className="tech-icon">
  <i className="fa-brands fa-css3"></i>
  </div>
  <h4>Website Responsiveness</h4>
  <p>Clone 35+ w3schools css framework based websites templates with pure css and javaScript</p>
</section>
<section className="tech-section">
  <div className="tech-icon">
  <i className="fa-brands fa-js"></i>
  </div>
  <h4>Website functionality</h4>
  <p>Make 10+ projects with vanilla javascript for different purposes like notes taking, college library, postmasters clone, Clocks, snake games, etc. </p>
</section>
<section className="tech-section">
  <div className="tech-icon">
  <i className="fa-brands fa-react"></i>
  </div>
  <h4>React - JS Library</h4>
  <p>Make 10+ websites with uses of it's various packages and hooks.</p>
</section>
<section className="tech-section">
  <div className="tech-icon">
  <i className="fa-solid fa-database"></i>
  </div>
  <h4>MERN - Full stack</h4>
  <p>Created projects like - iNotebook for taking notes and Mern Memories to save personal memories just like social media</p>
</section>
<section className="tech-section">
  <div className="tech-icon">
  <i className="fa-brands fa-github-alt"></i>
  </div>
  <h4>Git and GitHub </h4>
  <p>To work with team and collaboration on different projects. You can get almost all above projects on my github repositories.</p>
</section>
</section>
    
   
   </main>
  )
}

export default Accomplishment