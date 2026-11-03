import { useEffect, useRef, type ComponentType, type ReactElement } from 'react';
import { FOLDERS } from '../data';
import type { FolderId, SectionProps } from '../types';
import { About } from '../sections/About';
import { Contact } from '../sections/Contact';
import { Experience } from '../sections/Experience';
import { Projects } from '../sections/Projects';
import { Skills } from '../sections/Skills';

const PAGES: Record<FolderId, ComponentType<SectionProps>> = {
  about: About,
  skills: Skills,
  projects: Projects,
  experience: Experience,
  contact: Contact,
};

interface FolderViewProps {
  readonly id: FolderId;
  readonly onSelect: (id: FolderId) => void;
  readonly onClose: () => void;
}

export function FolderView({ id, onSelect, onClose }: FolderViewProps): ReactElement {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const meta = FOLDERS.find((folder) => folder.id === id);
  const Page = PAGES[id];

  useEffect(() => {
    titleRef.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0 });
  }, [id]);

  return (
    <section className="window view" aria-labelledby="view-title">
      <div className="window-bar">
        <span className="dots" aria-hidden="true">
          <i className="d-red" />
          <i className="d-white" />
          <i className="d-blue" />
        </span>

        <span className="path" aria-hidden="true">
          portfolio / {id}
        </span>

        <button type="button" className="close-btn" onClick={onClose}>
          All folders
        </button>
      </div>

      <div className="window-body">
        <nav className="tabs" aria-label="Folders">
          {FOLDERS.map((folder) => (
            <button
              key={folder.id}
              type="button"
              className="tab"
              data-tone={folder.tone}
              aria-current={folder.id === id ? 'page' : undefined}
              onClick={() => onSelect(folder.id)}
            >
              {folder.label}
            </button>
          ))}
        </nav>

        <h1 id="view-title" ref={titleRef} tabIndex={-1}>
          {meta?.label ?? id}
        </h1>

        <Page onNavigate={onSelect} />
      </div>
    </section>
  );
}
