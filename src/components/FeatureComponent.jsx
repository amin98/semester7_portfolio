// src/components/FeatureComponent.jsx
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const FeatureComponent = ({
  featureTitle,
  featureIntro,
  mainHmwQuestion,
  designVersions = [],
  reflectionText,
  nextStepsText,
  relevantLearningOutcomesOverall = [],
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

  const markdownComponents = {
    p: ({ ...props }) => (
      <p className="text-textSecondary text-lg mb-4" {...props} />
    ),
    strong: ({ ...props }) => (
      <strong className="font-semibold text-textPrimary" {...props} />
    ),
  };

  return (
    <div className="max-w-6xl mx-auto py-4  sm:px-62">
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl  tracking-tight text-textPrimary sm:text-5xl mb-4">
          {featureTitle}
        </h1>

        {relevantLearningOutcomesOverall?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {relevantLearningOutcomesOverall.map((lo, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full"
              >
                {lo}
              </span>
            ))}
          </div>
        )}

        {featureIntro && (
          <div className="text-xl text-textSecondary mb-6 prose prose-xl max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {featureIntro}
            </ReactMarkdown>
          </div>
        )}

        {mainHmwQuestion && (
          <section className="my-8 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              How Might We Question:
            </h2>
            <p className="text-indigo-600 text-lg">"{mainHmwQuestion}"</p>
          </section>
        )}
      </header>

      {designVersions.length > 0 && (
        <section aria-labelledby="design-versions-title" className="mb-16 ">
          <h2
            id="design-versions-title"
            className="text-3xl font-semibold text-textPrimary mb-8"
          >
            Design Iterations
          </h2>
          {designVersions.length > 1 && (
            <div className="flex justify-between items-center mb-8 p-4 sticky top-0 z-10 bg-gray-50 rounded-xl shadow-sm border">
              <button
                onClick={goToPreviousVersion}
                className="px-4 py-2 rounded-lg text-base font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 shadow-sm hover:shadow"
                aria-label="Previous version"
              >
                ← Previous
              </button>
              <h2 className="text-gray-800 text-2xl font-semibold tracking-tight">
                {currentVersion.versionName}
              </h2>
              <button
                onClick={goToNextVersion}
                className="px-4 py-2 rounded-lg text-base font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition-colors duration-150 ease-in-out shadow-sm hover:shadow"
                aria-label="Next version"
              >
                Next →
              </button>
            </div>
          )}
          {currentVersion && (
            <article
              key={currentVersionIndex}
              className="bg-white rounded-xl overflow-hidden"
            >
              <div
                className={`p-6 sm:p-8 ${
                  currentVersion.screenshotUrl
                    ? 'md:flex md:gap-8 items-start'
                    : ''
                }`}
              >
                <div
                  className={`${
                    currentVersion.screenshotUrl ? 'md:w-2/3' : 'w-full'
                  }`}
                >
                  {/* <h3 className="text-2xl font-medium text-primary mb-2">
                    {currentVersion.versionName ||
                      `Version ${currentVersionIndex + 1}`}
                  </h3> */}

                  {currentVersion.changesDescription && (
                    <div className="mb-6 max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={markdownComponents}
                      >
                        {currentVersion.changesDescription}
                      </ReactMarkdown>
                    </div>
                  )}

                  {/* Combined Rationale & Theoretical Grounding */}
                  {currentVersion.rationaleAndTheory && (
                    <div className="mt-6 text-lg">
                      <h4 className="font-semibold text-textPrimary mb-1">
                        Rationale & Theoretical Grounding:
                      </h4>
                      <div className="text-textSecondary prose max-w-none">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={markdownComponents}
                        >
                          {currentVersion.rationaleAndTheory}
                        </ReactMarkdown>
                      </div>
                    </div>
                  )}

                  {(currentVersion.researchInsight ||
                    currentVersion.hmwQuestion ||
                    currentVersion.learningOutcomes?.length > 0) && (
                    <div className="space-y-6 text-lg mt-6">
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
                            Iterative How Might We:
                          </h4>
                          <p className="text-textSecondary italic">
                            "{currentVersion.hmwQuestion}"
                          </p>
                        </div>
                      )}
                      {currentVersion.learningOutcomes?.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-textPrimary mb-1">
                            Learning Outcomes:
                          </h4>
                          <ul className="list-disc list-inside text-textSecondary space-y-1">
                            {currentVersion.learningOutcomes.map((lo, idx) => (
                              <li key={idx}>{lo}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {currentVersion.screenshotUrl && (
                  <div className="md:w-1/3 mt-6 md:mt-0">
                    <div className="p-4 sm:p-6 rounded-lg flex flex-col items-center">
                      {' '}
                      {/* Removed unnecessary bg-gray-50 if image has own bg */}
                      <img
                        src={currentVersion.screenshotUrl}
                        alt={
                          currentVersion.caption ||
                          `Screenshot for ${currentVersion.versionName}`
                        }
                        className="max-h-[500px] w-auto object-contain mx-auto border border-gray-200 rounded-2xl" // Standardized styling
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

      {/* ... (footer with reflection and next steps) ... */}
      {(reflectionText || nextStepsText) && (
        <div className="mt-16 pt-8 border-t border-gray-200 space-y-10">
          {reflectionText && (
            <section aria-labelledby="reflection-title">
              <h2
                id="reflection-title"
                className="text-3xl font-semibold text-textPrimary mb-3"
              >
                Reflection
              </h2>
              <div className="text-textSecondary prose max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={markdownComponents}
                >
                  {reflectionText}
                </ReactMarkdown>
              </div>
            </section>
          )}

          {nextStepsText && (
            <section aria-labelledby="next-steps-title">
              <h2 className="text-3xl font-semibold text-textPrimary mb-3">
                Next Steps
              </h2>
              <div className="text-textSecondary prose max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={markdownComponents}
                >
                  {nextStepsText}
                </ReactMarkdown>
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default FeatureComponent;
