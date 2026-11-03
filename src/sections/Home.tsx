import type { ReactElement } from 'react';
import { AVATAR_SRC, PROFILE } from '../data';
import type { SectionProps } from '../types';

interface HomeProps extends SectionProps {
  readonly landing?: boolean;
}

export function Home({ onNavigate, landing = false }: HomeProps): ReactElement {
  return (
    <section className={`home${landing ? ' home-hero' : ''}`} aria-label="Introduction">
      <img className="avatar" src={AVATAR_SRC} alt={PROFILE.photoAlt} width={176} height={176} />

      <div className="home-copy">
        {landing ? (
          <h1 className="home-name">{PROFILE.name}</h1>
        ) : (
          <h2 className="home-name">{PROFILE.name}</h2>
        )}

        <p className="home-role">{PROFILE.role}</p>

        <p className="home-bio">{PROFILE.bio}</p>
      </div>

      <div className="actions">
        <a className="btn btn-red" href={PROFILE.resumeUrl} target="_blank" rel="noopener">
          Download Resume
        </a>

        <button
          type="button"
          className="btn btn-blue-outline"
          onClick={() => onNavigate('projects')}
        >
          View Projects
        </button>
      </div>
    </section>
  );
}
