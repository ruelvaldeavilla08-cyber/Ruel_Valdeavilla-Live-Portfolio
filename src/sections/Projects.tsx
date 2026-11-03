import type { ReactElement } from 'react';
import { PROJECTS } from '../data';

export function Projects(): ReactElement {
  return (
    <div className="cards">
      {PROJECTS.map((project) => (
        <article className="card" key={project.title}>
          <h2>{project.title}</h2>

          <p>{project.summary}</p>

          <ul className="chips">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="links">
            <a
              className="btn btn-blue-outline btn-sm"
              href={project.github}
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>

            <a className="btn btn-red btn-sm" href={project.demo} target="_blank" rel="noopener">
              Live demo
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
