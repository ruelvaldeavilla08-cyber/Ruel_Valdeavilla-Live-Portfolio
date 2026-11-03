import type { ReactElement } from 'react';
import { FACTS, PROFILE } from '../data';

export function About(): ReactElement {
  return (
    <div className="about-grid">
      <div className="about-text">
        {PROFILE.aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <ul className="facts">
        {FACTS.map((fact) => (
          <li key={fact.title}>
            <strong>{fact.title}</strong>

            <span>{fact.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
