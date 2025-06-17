// src/pages/reading-app/management/TestingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const TestingPage = () => {
  const learningOutcomes = ['Manage & Control', 'Realisation', 'Analysis'];

  return (
    <article className="max-w-5xl mx-auto py-8">
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl mb-4">
          Testing Strategy
        </h1>
        <p className="text-xl text-textSecondary">
          My approach to testing the app, combining user feedback with developer checks to ensure the final product is high-quality.
        </p>
        <div className="mt-4">
          {/* Your LO tag rendering here */}
          {learningOutcomes.map((outcome) => (
            <div key={outcome} className="inline-flex items-center px-3 mx-1 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {outcome}
            </div>
          ))}
        </div>
      </header>

      <div className="space-y-16">
        <section aria-labelledby="testing-approach-title">
          <h2 id="testing-approach-title" className="text-3xl font-semibold text-textPrimary mb-4">
             Approach
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed">
            As a solo developer, testing wasn't a final step but rather it was a part of my daily process. My strategy was to use the right test at the right time to check both my ideas and my code. I tracked all findings in Notion, which helped me turn feedback into clear, actionable tasks.
          </p>
        </section>

        <section aria-labelledby="testing-methods-title">
          <h2 id="testing-methods-title" className="text-3xl font-semibold text-textPrimary mb-6">
            Testing in Action: From Concept to Code
          </h2>
          <div className="space-y-6">

            {/* Card 1: Early-stage Research */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-primary mb-2">
                1. Checking My Idea (Interviews & Surveys)
              </h3>
              <ul className="list-disc list-inside text-textSecondary space-y-2">
                <li>
                  <span className="font-semibold">What I Did:</span> I interviewed 3 peers and used a short online survey to figure out why young people actually stop reading.
                </li>
                <li>
                  <span className="font-semibold">What I Found:</span> A major problem is the "discovery problem"—users feel overwhelmed and don't know what book to pick next.
                </li>
                <li>
                  <span className="font-semibold">How It Changed My Project:</span> This proved my idea was on the right track. It showed that I needed a unique, 'vibe-based' <Link to="/reading-app/features/onboarding" className="text-primary hover:underline">Onboarding Flow</Link>, because a simple list of genres wouldn't solve the user's real frustration.
                </li>
              </ul>
            </div>

            {/* Card 2: Design Validation */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-primary mb-2">
                2. Checking My Design (Usability Testing)
              </h3>
              <ul className="list-disc list-inside text-textSecondary space-y-2">
                <li>
                  <span className="font-semibold">What I Did:</span> I showed a Figma prototype of the Welcome Screen to 2 users and asked them to try it out.
                </li>
                <li>
                  <span className="font-semibold">What I Found:</span> One user said the original tagline felt "a bit cheesy."
                </li>
                <li>
                  <span className="font-semibold">How It Changed My Project:</span> This direct feedback led me to change the text to "Find your vibe" in the <Link to="/reading-app/features/welcome" className="text-primary hover:underline">final design</Link>. This small test made the app's tone of voice much better.
                </li>
              </ul>
            </div>

            {/* Card 3: Implementation Quality */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-primary mb-2">
                3. Checking My Code (Developer Testing)
              </h3>
              <ul className="list-disc list-inside text-textSecondary space-y-2">
                <li>
                  <span className="font-semibold">What I Did:</span> After building a feature, I always did manual "smoke tests" to make sure it worked on both iOS and Android emulators.
                </li>
                <li>
                  <span className="font-semibold">What I Found:</span> I found a bug where tapping the 'Next' button too fast in the onboarding flow would skip a step.
                </li>
                <li>
                  <span className="font-semibold">How It Changed My Project:</span> I fixed the bug by adding a "debouncer" to the button. This made the app more stable and reliable for the user, proving my commitment to technical quality.
                </li>
              </ul>
            </div>
            
          </div>
        </section>
      </div>
    </article>
  );
};

export default TestingPage;