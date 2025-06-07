// src/components/LOLayout.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAllProjectItems } from '../data/allPortfolioItems'; // Assuming central data store

export const LOLayout = ({ learningOutcomeName, learningOutcomeId }) => {
  // If loId is not passed as prop, try to get from URL (useful if used directly in route)
  const params = useParams();
  const currentLoId = learningOutcomeId || params.loId;

  const allItems = getAllProjectItems();

  // Helper to format loId (e.g., 'manage-control' to 'Manage & Control')
  // and match against LO names in your data (e.g., 'Analysis', 'Design', 'Manage & Control')
  const formatLoNameForFilter = (id) => {
    if (!id) return '';
    // This map should be comprehensive for all your LO IDs to titles
    const nameMap = {
      'analysis': 'Analysis',
      'advice': 'Advice',
      'design': 'Design',
      'realisation': 'Realisation',
      'manage-control': 'Manage & Control',
      'professional': 'Professional Skills'
    };
    return nameMap[id.toLowerCase()] || id.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  };

  const loNameToFilter = formatLoNameForFilter(currentLoId);
  const displayTitle = learningOutcomeName || loNameToFilter; // Use prop if provided, else derive

  const relevantItems = allItems.filter(item =>
    item.learningOutcomes?.includes(loNameToFilter)
  );

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-textPrimary mb-3">
          Learning Outcome: {displayTitle}
        </h1>
        <p className="text-xl text-textSecondary max-w-3xl">
          This page aggregates all portfolio items that demonstrate the "{displayTitle}" learning outcome. Click on any item to see the detailed evidence.
        </p>
      </header>

      {relevantItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relevantItems.map((item, index) => (
            <div key={`${item.project}-${item.path}-${index}`} className="flex flex-col bg-white rounded-xl border border-gray-200 group hover:shadow-xl hover:border-primary transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <Link to={`${item.projectPathPrefix}${item.path}`} className="block p-6 flex-grow">
                <p className="text-xs text-indigo-500 font-semibold mb-1 uppercase tracking-wider">{item.project}</p>
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-primary-dark transition-colors">
                  {item.label}
                </h3>
                <p className="text-base text-textSecondary group-hover:text-textPrimary transition-colors">
                  {item.description}
                </p>
              </Link>
              {item.learningOutcomes && item.learningOutcomes.length > 0 && (
                <div className="px-6 pt-2 pb-4 border-t border-gray-100 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {item.learningOutcomes.map((lo) => (
                      <span
                        key={lo.toLowerCase().replace(/ & | /g, '-')}
                        className={`px-3 py-1 text-xs rounded-full ${lo === loNameToFilter ? 'bg-indigo-100 text-indigo-700 font-semibold' : 'bg-gray-100 text-gray-700'}`}
                      >
                        {lo}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-textSecondary text-lg text-center py-10">
          No specific portfolio items have been tagged with the "{displayTitle}" learning outcome for the currently configured projects.
        </p>
      )}
    </div>
  );
};

// export default LOLayout;