import React from 'react';

const Badge = ({ status }) => {
  // Map status to color
  let bg = 'bg-warning';
  let text = 'text-dark';
  if (status === '✅') {
    bg = 'bg-success';
    text = 'text-light';
  } else if (status === '⚠️') {
    bg = 'bg-warning';
    text = 'text-dark';
  } else if (status === '⏳') {
    bg = 'bg-info';
    text = 'text-light';
  }
  return (
    <span
      className={`inline-block font-sans text-xs font-medium leading-base px-3 py-1 rounded-radius shadow-small ${bg} ${text}`}
      style={{ minWidth: 32, textAlign: 'center' }}
    >
      {status}
    </span>
  );
};

export default Badge;
 