export type FolderId = 'about' | 'skills' | 'projects' | 'experience' | 'contact';

export type FolderTone = 'blue' | 'red' | 'white';

export interface FolderMeta {
  readonly id: FolderId;
  readonly label: string;
  readonly blurb: string;
  readonly tone: FolderTone;
}

export interface Profile {
  readonly name: string;
  readonly role: string;
  readonly bio: string;
  readonly resumeUrl: string;
  readonly photoAlt: string;
  readonly aboutParagraphs: readonly string[];
}

export interface Fact {
  readonly title: string;
  readonly text: string;
}

export interface SkillGroup {
  readonly title: string;
  readonly note: string;
  readonly skills: readonly string[];
}

export interface Project {
  readonly title: string;
  readonly summary: string;
  readonly stack: readonly string[];
  readonly github: string;
  readonly demo: string;
}

export interface Job {
  readonly period: string;
  readonly role: string;
  readonly org: string;
  readonly highlights: readonly string[];
}

export interface ContactLink {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly external: boolean;
  readonly copyable?: boolean;
}

export interface SectionProps {
  readonly onNavigate: (id: FolderId) => void;
}
