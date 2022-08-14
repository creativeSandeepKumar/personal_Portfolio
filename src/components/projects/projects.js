import React from 'react';
import { project } from '../constants';

import "./projects.css"



const projects = () => {

  

  return (
    <main className="project-main" id='projects'>
      <div className="project-topLine"></div>
      <h2 className="project-heading">Projects</h2>
    <section className="project-container">
      {project.map((p, i) => {
        return (
          <section key={i} className="project-card">
              <img src={p.image} alt="abc" />
              <div className="project-title">
                <h2>{p.title}</h2>
                <hr />
              </div>
              <p className="project-desc">
                {p.description}
              </p>
              <div className="tag-title">Stack</div>
              <div className="tag-list">
                {p.tags.map((t, i) => {
                  return <p key={i} className="tag-listItem">
                    {t}
                  </p>
                })}
              </div>
              <section className="project-link">
                <ul>
                  <li className="project-linkItem">
                    <a href={p.visit} className="project-links">Visit</a>
                  </li>
                  <li className="project-linkItem">
                    <a href={p.source} className="project-links" target="_blank">Source</a>
                  </li>
                
                </ul>
              </section>
          </section>
        )
      })}
    </section>
    </main>
  )
}

export default projects