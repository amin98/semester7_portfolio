import React, { useState } from 'react';

const FeatureComponent = ({
  featureTitle,
  featureIntro,
  designVersions = [],
  reflectionText,
  implementationPlanText,
  nextStepsText,
}) => {
  const [currentVersionIndex, setCurrentVersionIndex] = useState(0);

  if (!featureTitle) return <p>Feature details are not available.</p>;

  const goToNextVersion = () => {
    setCurrentVersionIndex((prevIndex) =>
      prevIndex === designVersions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousVersion = () => {
    setCurrentVersionIndex((prevIndex) =>
      prevIndex === 0 ? designVersions.length - 1 : prevIndex - 1
    );
  };

  const currentVersion = designVersions[currentVersionIndex];

  return (
    <div className="max-w-5xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
      {/* Feature Title and Intro */}
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl mb-4">
          {featureTitle}
        </h1>
        {featureIntro && (
          <p className="text-xl text-textSecondary">{featureIntro}</p>
        )}
      </header>

      {/* Design Versions Section */}
      {designVersions.length > 0 && (
        <section aria-labelledby="design-versions-title" className="mb-16">
          <h2
            id="design-versions-title"
            className="text-3xl font-semibold text-textPrimary mb-8"
          >
            Design Iterations
          </h2>
          {designVersions.length > 1 && (
            <div className="flex justify-between items-center mb-6 px-1">
              <button
                onClick={goToPreviousVersion}
                className="text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                aria-label="Previous version"
              >
                &larr; Previous
              </button>
              <h2 className="text-textSecondary text-base font-semibold">
                {/* Version {currentVersionIndex + 1} of {designVersions.length} */}
                {currentVersion.versionName}
              </h2>
              <button
                onClick={goToNextVersion}
                className="text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                aria-label="Next version"
              >
                Next &rarr;
              </button>
            </div>
          )}
          {/* Display current version */}
          {currentVersion && (
            <article
              key={currentVersionIndex} // Use currentVersionIndex for key if designVersions can change
              className="bg-white rounded-xl overflow-hidden border border-gray-200"
            >
              <div
                className={`p-6 sm:p-8 ${
                  currentVersion.screenshotUrl
                    ? 'md:flex md:gap-8 items-start'
                    : ''
                }`}
              >
                {/* Textual Content Column (Left) */}
                <div
                  className={`${
                    currentVersion.screenshotUrl ? 'md:w-2/3' : 'w-full'
                  }`}
                >
                  <h3 className="text-2xl font-medium text-primary mb-2">
                    {currentVersion.versionName ||
                      `Version ${currentVersionIndex + 1}`}
                  </h3>
                  {currentVersion.changesDescription && (
                    <p className="text-textSecondary mb-6 italic">
                      {currentVersion.changesDescription}
                    </p>
                  )}

                  {/* Sub-sections: Research Insight, HMW, Learning Outcomes */}
                  {(currentVersion.researchInsight ||
                    currentVersion.hmwQuestion ||
                    (currentVersion.learningOutcomes &&
                      currentVersion.learningOutcomes.length > 0)) && (
                    <div className="space-y-6 text-sm mt-6">
                      {currentVersion.researchInsight && (
                        <div>
                          <h4 className="font-semibold text-textPrimary mb-1">
                            Research Insight:
                          </h4>
                          <p className="text-textSecondary">
                            {currentVersion.researchInsight}
                          </p>
                        </div>
                      )}
                      {currentVersion.hmwQuestion && (
                        <div>
                          <h4 className="font-semibold text-textPrimary mb-1">
                            How Might We:
                          </h4>
                          <p className="text-textSecondary">
                            {currentVersion.hmwQuestion}
                          </p>
                        </div>
                      )}
                      {currentVersion.learningOutcomes &&
                        currentVersion.learningOutcomes.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-textPrimary mb-1">
                              Learning Outcomes:
                            </h4>
                            <ul className="list-disc list-inside text-textSecondary space-y-1">
                              {currentVersion.learningOutcomes.map(
                                (lo, idx) => (
                                  <li key={idx}>{lo}</li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                    </div>
                  )}
                </div>

                {/* Screenshot Column (Right) */}
                {currentVersion.screenshotUrl && (
                  <div className="md:w-1/3 mt-6 md:mt-0">
                    <div className="  p-4 sm:p-6 rounded-lg flex flex-col items-center">
                      <img
                        src={currentVersion.screenshotUrl}
                        alt={
                          currentVersion.caption ||
                          `Screenshot for ${currentVersion.versionName}`
                        }
                        className="max-h-[500px] w-auto object-contain mx-auto border border-gray-200 rounded-2xl"
                      />
                      {currentVersion.caption && (
                        <p className="text-center text-xs text-gray-500 mt-2 max-w-xs mx-auto">
                          {currentVersion.caption}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </article>
          )}
        </section>
      )}

      {/* Optional Bottom Sections */}
      {(reflectionText || implementationPlanText || nextStepsText) && (
        <footer className="mt-16 pt-8 border-t border-gray-200 space-y-10">
          {reflectionText && (
            <section aria-labelledby="reflection-title">
              <h2
                id="reflection-title"
                className="text-2xl font-semibold text-textPrimary mb-3"
              >
                Reflection
              </h2>
              <p className="text-textSecondary whitespace-pre-line">
                {reflectionText}
              </p>
            </section>
          )}
          {implementationPlanText && (
            <section aria-labelledby="implementation-plan-title">
              <h2
                id="implementation-plan-title"
                className="text-2xl font-semibold text-textPrimary mb-3"
              >
                Implementation Plan
              </h2>
              <p className="text-textSecondary whitespace-pre-line">
                {implementationPlanText}
              </p>
            </section>
          )}
          {nextStepsText && (
            <section aria-labelledby="next-steps-title">
              <h2
                id="next-steps-title"
                className="text-2xl font-semibold text-textPrimary mb-3"
              >
                Next Steps
              </h2>
              <p className="text-textSecondary whitespace-pre-line">
                {nextStepsText}
              </p>
            </section>
          )}
        </footer>
      )}
    </div>
  );
};

export default FeatureComponent;
