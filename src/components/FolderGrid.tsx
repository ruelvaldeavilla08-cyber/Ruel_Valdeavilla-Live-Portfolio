import { useEffect, useRef, useState, type CSSProperties, type ReactElement } from 'react';
import { FOLDERS } from '../data';
import type { FolderId } from '../types';
import { FolderIcon } from './FolderIcon';

const OPEN_MS = 520;

interface FolderGridProps {
  readonly onOpen: (id: FolderId) => void;
}

export function FolderGrid({ onOpen }: FolderGridProps): ReactElement {
  const [opening, setOpening] = useState<FolderId | null>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const handleClick = (id: FolderId): void => {
    if (opening) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      onOpen(id);
      return;
    }
    setOpening(id);
    timer.current = window.setTimeout(() => onOpen(id), OPEN_MS);
  };

  return (
    <div className="folder-grid" data-opening={opening ?? undefined}>
      {FOLDERS.map((folder, index) => {
        const isOpening = opening === folder.id;
        const style = { '--i': index } as CSSProperties;
        return (
          <button
            key={folder.id}
            type="button"
            className={`folder-btn${isOpening ? ' is-opening' : ''}`}
            style={style}
            onClick={() => handleClick(folder.id)}
            aria-label={`Open ${folder.label} folder: ${folder.blurb}`}
          >
            <FolderIcon tone={folder.tone} label={folder.label} open={isOpening} />

            <span className="folder-name">{folder.label}</span>

            <span className="folder-blurb">{folder.blurb}</span>
          </button>
        );
      })}
    </div>
  );
}
