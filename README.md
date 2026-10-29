# Portfolio (React + TypeScript)

A personal portfolio where each section is an animated folder. Click a folder on the desk and it opens, then you land on that page.

## Run it

```bash
npm install
npm run dev        # start the dev server
npm run typecheck  # TypeScript check (strict mode)
npm run build      # typecheck + production build into dist/
```

## Where to edit

- `src/data.ts` holds all the content: name, bio, skills, projects, jobs, links. Replace the placeholders.
- `src/types.ts` holds the shared types (`FolderId`, `Project`, `Job` and so on).
- `src/components/FolderGrid.tsx` is the folder desk and the open animation.
- `src/components/FolderView.tsx` is the open-folder window. Its `PAGES` record is typed `Record<FolderId, …>`, so adding a folder without a page is a compile error.
- `src/hooks/useFolderRoute.ts` keeps the open folder in sync with the URL hash (`/#projects`).
- `src/styles.css` holds the red, white and blue theme (CSS variables at the top).

## Photo

In `src/data.ts`, replace `AVATAR_SRC` with your own image:

```ts
import photo from './photo.jpg';
export const AVATAR_SRC = photo;
```
