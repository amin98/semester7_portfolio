import React from 'react';

const FeatureComponent = ({
  featureTitle,
  featureIntro,
  designVersions = [],
  reflectionText,
  implementationPlanText,
  nextStepsText,
}) => {
  if (!featureTitle) return <p>Feature details are not available.</p>;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
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
            Design Evolution
          </h2>
          <div className="space-y-16">
            {designVersions.map((version, index) => (
              <article
                key={index}
                className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200"
              >
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-medium text-primary mb-2">
                    {version.versionName || `Version ${index + 1}`}
                  </h3>
                  {version.changesDescription && (
                    <p className="text-textSecondary mb-6 italic">
                      {version.changesDescription}
                    </p>
                  )}
                </div>

                {version.screenshotUrl && (
                  <div className="bg-palette-softLight p-4 sm:p-6">
                    <img
                      src={version.screenshotUrl}
                      alt={
                        version.caption ||
                        `Screenshot for ${
                          version.versionName || `Version ${index + 1}`
                        }`
                      }
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-md border border-gray-300"
                    />
                    {version.caption && (
                      <p className="text-center text-sm text-palette-softGray mt-3">
                        {version.caption}
                      </p>
                    )}
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    {version.researchInsight && (
                      <div>
                        <h4 className="font-semibold text-textPrimary mb-1">
                          Research Insight:
                        </h4>
                        <p className="text-textSecondary">
                          {version.researchInsight}
                        </p>
                      </div>
                    )}
                    {version.hmwQuestion && (
                      <div>
                        <h4 className="font-semibold text-textPrimary mb-1">
                          How Might We:
                        </h4>
                        <p className="text-textSecondary">
                          {version.hmwQuestion}
                        </p>
                      </div>
                    )}
                    {version.learningOutcomes &&
                      version.learningOutcomes.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-textPrimary mb-1">
                            Learning Outcomes:
                          </h4>
                          <ul className="list-disc list-inside text-textSecondary">
                            {version.learningOutcomes.map((lo, idx) => (
                              <li key={idx}>{lo}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                </div>
              </article>
            ))}
          </div>
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
