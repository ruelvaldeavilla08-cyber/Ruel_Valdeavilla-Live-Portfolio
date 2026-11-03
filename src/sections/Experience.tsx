import type { ReactElement } from 'react';
import { JOBS } from '../data';

export function Experience(): ReactElement {
  return (
    <ol className="timeline">
      {JOBS.map((job) => (
        <li key={`${job.role}-${job.org}`}>
          <span className="when">{job.period}</span>

          <h2>{job.role}</h2>

          <p className="org">{job.org}</p>

          <ul>
            {job.highlights.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
