import React from 'react';
import { Link } from 'react-router-dom';

const ProblemDefinitionPage = () => {
  const learningOutcomes = ['Analysis']; // This page is a prime example of the Analysis LO

  return (
    <article className="max-w-5xl mx-auto py-8">
      {/* 1. Header Section */}
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl mb-4">
          Problem & Opportunity
        </h1>
        <p className="text-xl text-textSecondary">
          Defining the core problem of declining reading rates and identifying
          the market opportunity for a new digital solution.
        </p>
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

      {/* Main Content Sections */}
      <div className="space-y-16">
        {/* 2. Problem Definition Section */}
        <section aria-labelledby="problem-definition-title">
          <h2
            id="problem-definition-title"
            className="text-3xl font-semibold text-textPrimary mb-4"
          >
            The Core Problem
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed">
            Reading rates among children and young adults in the Netherlands are
            declining, particularly of long-form content like books. This trend
            is driven by a shift towards short-form, visually rich digital
            media such as social media, games, and video content. This creates a
            significant challenge in fostering deep reading habits and sustained
            attention.
          </p>
        </section>

        {/* 3. Guiding Research Question Section */}
        <section aria-labelledby="research-question-title">
          <h2
            id="research-question-title"
            className="text-3xl font-semibold text-textPrimary mb-4"
          >
            Guiding Research Question
          </h2>
          <blockquote className="border-l-4 border-primary pl-6 py-2 bg-gray-50 rounded-r-lg">
            <p className="text-xl italic text-textPrimary leading-relaxed">
              "How can a mobile application utilizing gamification, data, and
              AI, effectively increase reading engagement among young people
              12-25 in a home leisure reading context?"
            </p>
          </blockquote>
        </section>

        {/* 4. Stakeholder Analysis Section */}
        <section aria-labelledby="stakeholder-analysis-title">
          <h2
            id="stakeholder-analysis-title"
            className="text-3xl font-semibold text-textPrimary mb-6"
          >
            Stakeholder Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stakeholder Card: Young Students */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Young Students
              </h3>
              <p className="text-textSecondary">
                Children in primary and secondary schools are the primary users
                directly experiencing the problem. They are the target audience
                for the app's core engagement mechanics.
              </p>
            </div>
            {/* Stakeholder Card: Parents/Guardians */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Parents/Guardians
              </h3>
              <p className="text-textSecondary">
                Concerned about their children's academic performance and
                digital habits, parents play a role in encouraging app usage and
                monitoring its impact. They are a secondary audience concerned
                with educational outcomes.
              </p>
            </div>
            {/* Stakeholder Card: Teachers/Educators */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Teachers/Educators
              </h3>
              <p className="text-textSecondary">
                They see the effects of declining reading habits in the
                classroom and could implement the app as part of their
                curriculum (e.g., via reading competitions), making them key
                facilitators for in-school adoption.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Research & Design Approach Section */}
        <section aria-labelledby="research-approach-title">
          <h2
            id="research-approach-title"
            className="text-3xl font-semibold text-textPrimary mb-6"
          >
            Research & Design Approach (DOT Framework)
          </h2>
          <p className="text-lg text-textSecondary mb-6">
            To structure the research and design process, I will be using the
            DOT framework, which is divided into the following key phases:
          </p>
          <div className="space-y-4 text-lg">
            <div>
              <h3 className="font-semibold text-textPrimary">
                1. Secondary Research
              </h3>
              <ul className="list-disc list-inside text-textSecondary ml-4 mt-1">
                <li>Existing literature and findings review.</li>
                <li>
                  Trends in tech and innovation relevant to digital reading
                  engagement.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-textPrimary">
                2. Primary Research
              </h3>
              <ul className="list-disc list-inside text-textSecondary ml-4 mt-1">
                <li>User observation.</li>
                <li>Collecting data (field research).</li>
                <li>
                  Stakeholder interviews to identify behaviors, motivations, and
                  desires.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-textPrimary">3. Tests</h3>
              <ul className="list-disc list-inside text-textSecondary ml-4 mt-1">
                <li>User/usability testing.</li>
                <li>Prototyping.</li>
                <li>
                  Iterative evaluation methods and refinement based on user
                  feedback.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Initial Platform Rationale Section */}
        <section aria-labelledby="platform-rationale-title">
          <h2
            id="platform-rationale-title"
            className="text-3xl font-semibold text-textPrimary mb-4"
          >
            Initial Platform Rationale
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed">
            The app is primarily intended as a **native mobile application** due
            to the widespread use and engagement of smartphones among the
            target audience. However, it can also extend to a **native desktop
            version**, offering users the advantage of larger screens, which are
            often preferred for longer reading sessions. It's important to
            emphasize this approach differs from a PWA or mobile website; it
            instead focuses on providing an optimized, native experience for
            each device.
          </p>
        </section>
      </div>
    </article>
  );
};

export default ProblemDefinitionPage;