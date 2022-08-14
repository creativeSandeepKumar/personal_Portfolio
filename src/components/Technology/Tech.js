import React from "react";
import "./tech.css";

const tech = () => {
  return (
    <main className="tech-main" id="tech">
      <div className="tech-topLine"></div>
      <h2>Technologies</h2>
      <p className="tech-main-para">
        Logical and result-driven web-development technologies dedicated to
        building and optimizing user-focused websites for customers with various
        business objectives. Judicious and creative when used technologies to
        crafting effective websites paltforms to propel competative advantage
        and revenue growth. Technically proficient and analytical problem solver
        with calm and focused demeanor.
      </p>
      <section className="accomplish-container">
        <section className="accomplish-section">
          <h4>HTML</h4>
          <p>SEO based practice</p>
        </section>
        <section className="accomplish-section">
          <h4>CSS</h4>
          <p>Responsiveness for all sreen sizes</p>
        </section>
        <section className="accomplish-section">
          <h4>JavaScript</h4>
          <p>Make websites functional for different purposes</p>
        </section>
        <section className="accomplish-section">
          <h4>MERN Stack</h4>
          <p>Combination of MongoDB, Express, React and Node.js</p>
        </section>
        <section className="accomplish-section">
          <h4>Tailwind CSS</h4>
          <p>Utility first css framework</p>
        </section>
        <section className="accomplish-section">
          <h4>Git & GitHub</h4>
          <p>Track changes and make repositories</p>
        </section>
        <section className="accomplish-section">
          <h4>Redux</h4>
          <p>Manage states of complex or big websites</p>
        </section>
      </section>
    </main>
  );
};

export default tech;
