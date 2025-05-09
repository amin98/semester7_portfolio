import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import learningOutcomes from '../data/learningOutcomes';

const LearningOutcomes = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-h1 font-bold font-sans text-textPrimary mb-8 leading-tight">
        Learning Outcomes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {learningOutcomes.map((lo) => (
          <Link
            to={`/lo/${lo.id}`}
            key={lo.id}
            className="block bg-background border border-solid border-[#dee2e6] rounded-radius shadow-small p-6 hover:shadow-medium transition focus:outline-none focus:ring-2 focus:ring-primary"
            style={{ textDecoration: 'none' }}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-h3 font-semibold font-sans text-textPrimary leading-tight">
                {lo.title}
              </h2>
              <Badge status={lo.status} />
            </div>
            <p className="text-base font-normal font-sans text-textSecondary leading-base">
              {lo.blurb}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LearningOutcomes;
