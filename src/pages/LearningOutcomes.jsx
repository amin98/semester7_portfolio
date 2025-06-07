// src/pages/LearningOutcomes.jsx
// Your existing code is good here.
// It links to /lo/analysis, /lo/advice, etc.
// The content of those individual LO pages is what needs to change.

import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge'; // Assuming you have this component
import learningOutcomesData from '../data/learningOutcomes'; // Assuming you have this data file

const LearningOutcomes = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-10">
        <h1 className="text-4xl font-bold font-sans text-textPrimary mb-4 leading-tight"> {/* Adjusted class for consistency */}
          Learning Outcomes Summary
        </h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {learningOutcomesData.map((lo) => ( // Renamed 'learningOutcomes' to 'learningOutcomesData' to avoid conflict if imported elsewhere
          <Link
            to={`/lo/${lo.id}`} // lo.id should be 'analysis', 'design', etc.
            key={lo.id}
            className="block bg-white border border-solid border-gray-200 rounded-xl p-6 transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary" // Updated styling
            style={{ textDecoration: 'none' }}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold font-sans text-textPrimary leading-tight"> {/* Adjusted class */}
                {lo.title}
              </h2>
              {lo.status && <Badge status={lo.status} /> }
            </div>
            <p className="text-base font-normal font-sans text-textSecondary leading-base">
              {lo.blurb} {/* 'blurb' for short description */}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LearningOutcomes;