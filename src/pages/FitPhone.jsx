import React from 'react';
import { Link, Outlet, useOutlet } from 'react-router-dom';

const fitPhoneSections = [
  {
    path: 'brainstorming',
    label: 'Ideas & Study',
    description: 'First ideas, user study, and user stories',
  },
  {
    path: 'design',
    label: 'Design Steps',
    description: 'Wireframes, mockups, and how visual design was made',
  },
  {
    path: 'prototype-testing',
    label: 'Testing Prototypes',
    description: 'Usability tests and getting feedback',
  },
  {
    path: 'feedback-implementation',
    label: 'Using Feedback',
    description: 'Putting user and team feedback into designs',
  },
  {
    path: 'realization',
    label: 'Making & Coding',
    description: 'How it was built and look at codebase',
  },
  {
    path: 'meetings',
    label: 'Meetings & Teamwork',
    description: 'Sprint plans, standups, and notes from retrospectives',
  },
  {
    path: 'way-of-working',
    label: 'How We Worked (Agile)',
    description: 'Our Agile way, Trello use, and tracking tasks',
  },
];

const FitPhone = () => {
  const outlet = useOutlet();

  return (
    <div className="min-h-screen bg-background">
      {outlet ? (
        // If there is a nested route active, render it here
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Outlet />
        </div>
      ) : (
        // Landing page with overview and section links
        <div className="min-h-screen bg-background p-6">
          <div className="max-w-7xl mx-auto">
            <header className="py-header-y px-6 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
                FitPhone Case Study
              </h1>
              <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto">
                A look into the FitPhone group project, showing the process,
                teamwork, and what we made.
              </p>
            </header>

            <main className="px-6 pb-12">
              <section className="px-6 py-8 border-t border-gray-200">
                <h2 className="text-3xl font-semibold text-textPrimary mb-8 text-start">
                  Parts of Case Study
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {fitPhoneSections.map((section) => (
                    <Link
                      key={section.path}
                      to={section.path}
                      className="block p-6 bg-white rounded-xl transition-shadow border border-gray-200 group hover:shadow-lg"
                    >
                      <h3 className="text-xl font-semibold text-primary mb-2 group-hover:underline">
                        {section.label}
                      </h3>
                      <p className="text-sm text-textSecondary">
                        {section.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default FitPhone;
