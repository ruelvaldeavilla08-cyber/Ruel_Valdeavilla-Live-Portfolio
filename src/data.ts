import type { ContactLink, Fact, FolderMeta, Job, Profile, Project, SkillGroup } from './types';
import photo from './2b2.png';

export const FOLDERS: readonly FolderMeta[] = [
  { id: 'about', label: 'About', blurb: 'My background', tone: 'red' },
  { id: 'skills', label: 'Skills', blurb: 'What I can do', tone: 'white' },
  { id: 'projects', label: 'Projects', blurb: 'Things I built', tone: 'blue' },
  { id: 'experience', label: 'Experience', blurb: 'Where I worked', tone: 'red' },
  { id: 'contact', label: 'Contact', blurb: 'Get in touch', tone: 'white' },
];

export const PROFILE: Profile = {
  name: 'Ruel A. Valdeavilla',
  role: 'Computer Engineer',
  bio: "I'm a fresh Computer Engineering graduate with hands-on administrative and data entry experience, now looking for a junior front-end developer, IT support or administrative support role. I like building clear, fast interfaces and keeping systems and records running smoothly.",
  resumeUrl: 'https://example.com/your-resume.pdf',
  photoAlt: 'Portrait of Your Name',
  aboutParagraphs: [
    'I graduated with a degree in Computer Engineering, where I studied programming, digital systems and computer hardware. Outside of class I practised front-end development by building small web projects with HTML, CSS, JavaScript, React and TypeScript.',
    'Before and during my studies I worked in administrative roles, handling records, schedules and data entry. That work taught me to be accurate, to meet deadlines and to communicate clearly with people who are not technical.',
    "I'm interested in IT because it combines problem solving with helping people get their work done. I'm happy to start in a junior role and keep learning.",
  ],
};

export const AVATAR_SRC = photo;

export const FACTS: readonly Fact[] = [
  {
    title: 'Computer Engineering',
    text: 'Programming, networks, electronics and hardware fundamentals.',
  },
  {
    title: 'Administrative experience',
    text: 'Scheduling, filing, correspondence and office coordination.',
  },
  { title: 'Data entry', text: 'Fast, accurate record keeping in spreadsheets and databases.' },
  {
    title: 'Interest in IT',
    text: 'Troubleshooting, user support and building useful web interfaces.',
  },
];

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    title: 'Front-end development',
    note: 'Building responsive, accessible pages.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
  },
  {
    title: 'Data',
    note: 'Keeping information accurate and easy to find.',
    skills: ['SQL', 'Data management'],
  },
  {
    title: 'IT support and office',
    note: 'Fixing problems and getting documents done.',
    skills: ['Hardware troubleshooting', 'Microsoft Office'],
  },
];

export const PROJECTS: readonly Project[] = [
   {
    title: 'E-commerce Shoe Website',
    summary: 'Created an e-commerce shoe website using HTML, CSS, and JavaScript with DOM manipulation to make the website interactive and improve the shopping experience."',
    stack: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
    github: 'https://github.com/ruelvaldeavilla08-cyber/E-commerce-shoe-store',
    demo: 'https://ruelvaldeavilla08-cyber.github.io/E-commerce-shoe-store/',
  },
  {
    title: 'Lottery Game',
    summary: 'A dynamic and interactive lottery game built from vanilla JavaScript, HTML, CSS, and DOM manipulation."',
    stack: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
    github: 'https://github.com/ruelvaldeavilla08-cyber/Lottery-Game',
    demo: 'https://ruelvaldeavilla08-cyber.github.io/Lottery-Game/',
  },
  {
    title: 'Black-Jack Game',
    summary: 'a HTML, CSS, JavaScript and DOM manipulation simple project building a Black Jack game',
    stack: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
    github: 'https://github.com/ruelvaldeavilla08-cyber/Black-Jack-Game',
    demo: 'https://ruelvaldeavilla08-cyber.github.io/Black-Jack-Game/',
  },
  {
    title: 'Sariaya Town Frontend Website',
    summary: 'a HTML and CSS showing all the beautiful destination in Sariaya Town',
    stack: ['HTML', 'CSS'],
    github: 'https://github.com/ruelvaldeavilla08-cyber/Sariaya-Town-Front-end-Website',
    demo: ' https://ruelvaldeavilla08-cyber.github.io/Sariaya-Town-Front-end-Website/',
  },
  {
    title: 'Passenger Counter',
    summary: 'a HTML, CSS, javascript, where it counts all the passenger in a train staion',
    stack: ['HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/ruelvaldeavilla08-cyber/Passenger-counter',
    demo: ' https://ruelvaldeavilla08-cyber.github.io/Passenger-counter/',
  },
  {
    title: 'Personal Portfolio',
    summary:
      'This site: a HTML, CSS, Javascript, React and TypeScript portfolio where each section is an animated folder.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
    github: 'https://github.com/ruelvaldeavilla08-cyber/Ruel_Valdeavilla-Live-Portfolio',
    demo: 'https://ruelvaldeavilla08-cyber.github.io/Ruel_Valdeavilla-Live-Portfolio/',
  },
  {
    title: 'Inventory Database',
    summary:
      'A relational database design for tracking office equipment, with queries for stock levels and assignments.',
    stack: ['MySQL', 'Data management'],
    github: 'https://github.com/your-username/inventory-database',
    demo: 'https://your-username.github.io/inventory-database',
  },
];

export const JOBS: readonly Job[] = [
  {
    period: 'Jan 2022 – May 2025',
    role: 'Administrative Assistant',
    org: 'Morong Agricultural Multi-Purpose Cooperative',
    highlights: [
      'Managed schedules, correspondence and filing for a small team.',
      'Prepared reports and documents in Microsoft Word and Excel.',
      'Answered inquiries from clients and staff by phone and email.',
    ],
  },
  {
    period: 'Feb 2025 – July 2025',
    role: 'Social Media Manager',
    org: 'A&V Events Place  |  Nice Day Coffee  |  GlutaMAX Men  |  Ergoworks',
    highlights: [
      'Entered and verified records with a high level of accuracy.',
      'Cleaned and organized spreadsheets and database records.',
    ],
  },
  {
    period: 'July 2025 – August 2025',
    role: 'IT Support Intern',
    org: 'IT Avenue',
    highlights: [
      'Diagnosed and repaired common hardware and software issues on desktops and laptops.',
      'Set up user accounts and helped colleagues with everyday computer problems.',
    ],
  },
];

export const CONTACTS: readonly ContactLink[] = [
  {
    label: 'Email',
    value: 'ruelvaldeavilla08@gmailcom',
    href: 'mailto:your.email@example.com',
    external: false,
    copyable: true,
  },
  {
    label: 'GitHub',
    value: 'Ruel Valdeavilla - Github',
    href: 'https://github.com/ruelvaldeavilla08-cyber',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'Ruel Valdeavilla - LinkedIn',
    href: 'https://www.linkedin.com/in/ruel-valdeavilla-105a18409/?isSelfProfile=true',
    external: true,
  },
];
