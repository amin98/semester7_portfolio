import React from 'react';
import { Link } from 'react-router-dom';

// A simple and explicit mapping from the learning outcome label to its correct route.
// This avoids guessing paths and ensures they are always correct.
const loPathMap = {
  Analysis: '/lo/analysis',
  Advice: '/lo/advice',
  Design: '/lo/design',
  Realisation: '/lo/realisation',
  'Manage & Control': '/lo/manage-control',
  'Professional Skills': '/lo/professional',
};

const LearningOutcomes = ({ outcomes }) => {
  if (!outcomes || outcomes.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-semibold text-textSecondary mr-2">
        Learning Outcomes:
      </span>
      {outcomes.map((lo) => {
        const path = loPathMap[lo];
        if (!path) {
          // If a learning outcome is not in our map, render it as plain text
          // to avoid creating a broken link.
          return (
            <span
              key={lo}
              className="px-3 py-1 bg-gray-100 text-xs font-semibold text-gray-500 rounded-full"
              title={`Path not found for: ${lo}`}
            >
              {lo} (No Link)
            </span>
          );
        }
        return (
          <Link
            key={lo}
            to={path}
            className="px-3 py-1 bg-gray-100 text-xs font-semibold text-gray-700 rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
          >
            {lo}
          </Link>
        );
      })}
    </div>
  );
};

export default LearningOutcomes;
