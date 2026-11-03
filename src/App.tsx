import type { ReactElement } from 'react';
import { FolderGrid } from './components/FolderGrid';
import { FolderView } from './components/FolderView';
import { PROFILE } from './data';
import { useFolderRoute } from './hooks/useFolderRoute';
import { Home } from './sections/Home';

export default function App(): ReactElement {
  const [current, navigate] = useFolderRoute();

  return (
    <>
      <div className="stripe" aria-hidden="true" />

      <header className="topbar">
        <div className="shell topbar-inner">
          <button type="button" className="brand" onClick={() => navigate(null)}>
            {PROFILE.name}
          </button>

          {current && (
            <button
              type="button"
              className="btn btn-blue-outline btn-sm"
              onClick={() => navigate(null)}
            >
              All folders
            </button>
          )}
        </div>
      </header>

      <main className="shell main">
        {current === null ? (
          <div className="desk">
            <Home onNavigate={navigate} landing />

            <section className="folder-shelf" aria-labelledby="shelf-title">
              <p className="eyebrow">Explore</p>
              <h2 className="desk-title" id="shelf-title">
                Browse my portfolio
              </h2>

              <FolderGrid onOpen={navigate} />
            </section>
          </div>
        ) : (
          <FolderView
            key={current}
            id={current}
            onSelect={navigate}
            onClose={() => navigate(null)}
          />
        )}
      </main>

      <footer className="footer">
        <div className="shell">
          &copy; 2026 {PROFILE.name}. A Front-end Developer at your service.
        </div>
      </footer>
    </>
  );
}
