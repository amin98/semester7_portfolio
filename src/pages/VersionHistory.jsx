import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

const VersionHistory = () => {
  // // TODO: Define version data (images, rationale)
  const versions = [
    {
      beforeImg: '/images/version1-before.png', // Placeholder path
      afterImg: '/images/version1-after.png', // Placeholder path
      rationale: 'First design based on wireframes we made.',
    },
    {
      beforeImg: '/images/version2-before.png',
      afterImg: '/images/version2-after.png',
      rationale: 'Used user feedback, made navigation better.',
    },
    // ... more versions
  ];

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Portfolio Version History', path: '/version-history' },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="text-h2 font-bold font-sans text-textPrimary mb-6 leading-tight">
        How Portfolio Changed Over Time
      </h1>
      <div className="space-y-12">
        {versions.map((version, index) => (
          <div
            key={index}
            className="p-8 border border-solid border-[#dee2e6] rounded-radius bg-background"
          >
            <h2 className="text-h3 font-semibold font-sans text-textPrimary mb-6">
              Version {index + 1} Changes Made
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-h5 font-medium font-sans text-textSecondary mb-2 text-center">
                  Picture Before
                </h3>
                <img
                  src={version.beforeImg}
                  alt={`Version ${index + 1} Picture Before`}
                  className="border border-solid border-[#dee2e6] rounded-radius mx-auto"
                />
              </div>
              <div>
                <h3 className="text-h5 font-medium font-sans text-textSecondary mb-2 text-center">
                  Picture After
                </h3>
                <img
                  src={version.afterImg}
                  alt={`Version ${index + 1} Picture After`}
                  className="border border-solid border-[#dee2e6] rounded-radius mx-auto"
                />
              </div>
            </div>
            <div>
              <h3 className="text-h6 font-semibold font-sans text-textPrimary mb-2">
                Reason Why:
              </h3>
              <p className="text-base font-normal font-sans text-textSecondary leading-base">
                {version.rationale}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VersionHistory;
