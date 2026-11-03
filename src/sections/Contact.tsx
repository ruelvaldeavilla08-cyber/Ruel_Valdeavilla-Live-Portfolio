import type { ReactElement } from 'react';
import { CONTACTS } from '../data';
import { useCopy, type CopyStatus } from '../hooks/useCopy';

const COPY_LABEL: Record<CopyStatus, string> = {
  idle: 'Copy',
  copied: 'Copied',
  failed: 'Copy failed',
};

export function Contact(): ReactElement {
  const [status, copy] = useCopy();

  return (
    <>
      <p className="lead">
        I'm available for junior front-end, IT support and administrative support roles. Send me a
        message and I'll reply as soon as I can.
      </p>

      <ul className="contact-list">
        {CONTACTS.map((item) => (
          <li key={item.label}>
            <span className="label">{item.label}</span>

            <div className="row">
              <a
                className="value"
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener' } : {})}
              >
                {item.value}
              </a>

              {item.copyable && (
                <button type="button" className="copy-btn" onClick={() => void copy(item.value)}>
                  {COPY_LABEL[status]}
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
