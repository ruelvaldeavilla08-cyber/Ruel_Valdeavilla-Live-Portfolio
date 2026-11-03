import type { ReactElement } from 'react';
import type { FolderTone } from '../types';

interface FolderIconProps {
  readonly tone: FolderTone;
  readonly label: string;
  readonly open?: boolean;
}

export function FolderIcon({ tone, label, open = false }: FolderIconProps): ReactElement {
  return (
    <div className={`folder tone-${tone}${open ? ' is-open' : ''}`} aria-hidden="true">
      <div className="folder-back" />

      <div className="folder-paper">
        <i />
        <i />
        <i />
      </div>

      <div className="folder-front">{label}</div>
    </div>
  );
}
