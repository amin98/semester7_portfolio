// src/components/FeatureComponent.jsx (The Correct Component)

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link as RouterLink } from 'react-router-dom';
import remarkGfm from 'remark-gfm';

// The props list is now correct for our refined data structure
const FeatureComponent = ({
  featureTitle,
  summary,
  processAndAnalysis,
  mainHmwQuestion,
  designVersions = [],
  reflectionText,
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

  // Custom components to handle internal routing for Markdown links
  const markdownComponents = {
    p: ({ ...props }) => (
      <p className="text-textSecondary text-lg" {...props} />
    ),
    strong: ({ ...props }) => (
      <strong className="font-semibold text-textPrimary" {...props} />
    ),
    a: ({ ...props }) => {
      if (props.href && props.href.startsWith('/')) {
        return (
          <RouterLink
            to={props.href}
            {...props}
            className="text-primary hover:underline font-semibold"
          />
        );
      }
      return (
        <a
          {...props}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        />
      );
    },
  };

  return (
    <div className="max-w-6xl mx-auto py-4 sm:px-6">
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl tracking-tight text-textPrimary sm:text-5xl mb-4">
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

        {summary && (
          <p className="text-xl text-textSecondary mb-6">{summary.trim()}</p>
        )}

        {processAndAnalysis && (
          <div className="mt-6 text-lg prose prose-xl max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {processAndAnalysis}
            </ReactMarkdown>
          </div>
        )}

        {mainHmwQuestion && (
          <section className="my-8 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              Main How Might We Question:
            </h2>
            <p className="text-indigo-600 text-lg">"{mainHmwQuestion}"</p>
          </section>
        )}
      </header>

      {designVersions.length > 0 && (
        <section aria-labelledby="design-versions-title" className="mb-16">
          <h2
            id="design-versions-title"
            className="text-3xl font-semibold text-textPrimary mb-8"
          >
            Design Iterations
          </h2>
          {designVersions.length > 1 && (
            <div className="flex justify-between items-center mb-8 p-4 sticky top-0 z-10 bg-background/80 backdrop-blur-sm rounded-xl shadow-sm border">
              <button
                onClick={goToPreviousVersion}
                className="px-4 py-2 rounded-lg text-base font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 shadow-sm hover:shadow"
                aria-label="Previous version"
              >
                ← Previous
              </button>
              <h2 className="text-gray-800 text-2xl font-semibold tracking-tight text-center">
                {currentVersion.versionName}
              </h2>
              <button
                onClick={goToNextVersion}
                className="px-4 py-2 rounded-lg text-base font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 shadow-sm hover:shadow"
                aria-label="Next version"
              >
                Next →
              </button>
            </div>
          )}
          {currentVersion && (
            <article
              key={currentVersionIndex}
              className="bg-white rounded-xl overflow-hidden border border-gray-200"
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
                  <div className="space-y-6 text-lg">
                    {currentVersion.approach && (
                      <div>
                        <h4 className="font-semibold text-textPrimary mb-1">
                          Approach:
                        </h4>
                        <p className="text-textSecondary">
                          {currentVersion.approach}
                        </p>
                      </div>
                    )}
                    {currentVersion.justification && (
                      <div>
                        <h4 className="font-semibold text-textPrimary mb-1">
                          Justification (The "Golden Thread"):
                        </h4>
                        <div className="text-textSecondary prose max-w-none">
                          <ReactMarkdown
                            components={markdownComponents}
                            remarkPlugins={[remarkGfm]}
                          >
                            {currentVersion.justification}
                          </ReactMarkdown>
                        </div>
                      </div>
                    )}
                    {currentVersion.theoreticalGrounding && (
                      <div>
                        <h4 className="font-semibold text-textPrimary mb-1">
                          Theoretical Grounding:
                        </h4>
                        <div className="text-textSecondary prose max-w-none">
                          <ReactMarkdown
                            components={markdownComponents}
                            remarkPlugins={[remarkGfm]}
                          >
                            {currentVersion.theoreticalGrounding}
                          </ReactMarkdown>
                        </div>
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
                  </div>
                </div>

                {/* Screenshot Column */}
                {currentVersion.screenshotUrl && (
                  <div className="md:w-1/3 mt-6 md:mt-0">
                    <div className="p-4 sm:p-6 rounded-lg flex flex-col items-center">
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

      {/* Footer with reflection and next steps */}
      {reflectionText && (
        <div className="mt-16 pt-8 border-t border-gray-200">
          <section aria-labelledby="reflection-title">
            <h2
              id="reflection-title"
              className="text-3xl font-semibold text-textPrimary mb-3"
            >
              Reflection
            </h2>
            <div className="text-textSecondary prose prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {reflectionText}
              </ReactMarkdown>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default FeatureComponent;
