import { useCallback, useEffect, useState } from 'react';
import { FOLDERS } from '../data';
import type { FolderId } from '../types';

export function isFolderId(value: string): value is FolderId {
  return FOLDERS.some((folder) => folder.id === value);
}

function readHash(): FolderId | null {
  try {
    const raw = window.location.hash.replace(/^#/, '');
    return isFolderId(raw) ? raw : null;
  } catch {
    return null;
  }
}

type Navigate = (next: FolderId | null) => void;

export function useFolderRoute(): readonly [FolderId | null, Navigate] {
  const [current, setCurrent] = useState<FolderId | null>(readHash);

  useEffect(() => {
    const onHashChange = (): void => setCurrent(readHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback<Navigate>((next) => {
    setCurrent(next);
    try {
      if (next) {
        window.location.hash = next;
      } else {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    } catch {}
  }, []);

  return [current, navigate] as const;
}
