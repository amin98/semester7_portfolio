import React from 'react';
import { Link } from 'react-router-dom';

const ResearchAccessibleContentPage = () => {
  const learningOutcomes = ['Analysis'];
  const subQuestion =
    'What kind of reading content feels most accessible to non-readers?';
  const pageTitle = 'Research: Accessible Content for Non-Readers';
  const pageDescription =
    'Investigating what types of reading content are most approachable and engaging for individuals who do not read regularly.';

  return (
    <article className="max-w-5xl mx-auto py-8">
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl mb-4">
          {pageTitle}
        </h1>
        <p className="text-xl text-textSecondary">{pageDescription}</p>
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-textPrimary mb-1">
            Relevant Learning Outcome:
          </h4>
          <div className="flex flex-wrap gap-2">
            {learningOutcomes.map((lo, idx) => (
              <Link
                key={idx}
                to={`/lo/${lo.toLowerCase().replace(/ & | /g, '-')}`}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full hover:bg-indigo-200 transition-colors"
              >
                {lo}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-textPrimary mb-3">
            Recap: The Research Sub-question
          </h2>
          <blockquote className="border-l-4 border-primary pl-4">
            <p className="text-lg italic text-textSecondary">"{subQuestion}"</p>
          </blockquote>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-textPrimary mb-3">
            Methodology
          </h2>
          <p className="text-lg text-textSecondary">
            Example: "To answer this question, I conducted a literature review
            and a competitive analysis..."
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-textPrimary mb-3">
            Key Findings & Insights
          </h2>
          <p className="text-lg text-textSecondary">
            Example: "Key findings will be summarized here after the research is
            complete."
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-textPrimary mb-3">
            Conclusion & Implications for the Project
          </h2>
          <p className="text-lg text-textSecondary">
            Example: "The conclusions from this research will directly inform
            the design of the app's core features."
          </p>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-textPrimary mb-2">
            Full Research Document
          </h3>
          <p className="text-textSecondary mb-3">
            The full research document is available for review for a complete,
            in-depth look at the literature and sources.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            Download Full Document (PDF) →
          </a>
        </footer>
      </div>
    </article>
  );
};

export default ResearchAccessibleContentPage;
