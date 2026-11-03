import type { ReactElement } from 'react';
import { SKILL_GROUPS } from '../data';

export function Skills(): ReactElement {
  return (
    <div className="skill-groups">
      {SKILL_GROUPS.map((group) => (
        <div className="skill-group" key={group.title}>
          <h2>{group.title}</h2>

          <p>{group.note}</p>

          <ul className="chips">
            {group.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
