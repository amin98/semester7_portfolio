import React from 'react';

const DocLinkCard = ({ title, href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-background text-textPrimary font-sans rounded-radius border border-solid border-[#dee2e6] p-4 transition hover:bg-light focus:outline-none focus:ring-2 focus:ring-primary mb-4"
    style={{ textDecoration: 'none' }}
  >
    <div className="flex items-center gap-2">
      <span className="text-2xl" aria-hidden="true">
        {icon}
      </span>
      <span
        className="text-base font-semibold leading-base"
        style={{ fontFamily: "'Arial', sans-serif" }}
      >
        {title}
      </span>
    </div>
  </a>
);

export default DocLinkCard;
