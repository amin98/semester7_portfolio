import React from 'react';
import { Link, Outlet, useOutlet } from 'react-router-dom';

const featureLinks = [
  {
    path: 'features/welcome',
    label: 'Welcome & First Setup',
    description: 'First look and how to enter app.',
  },
  {
    path: 'features/onboarding',
    label: 'User Start Flow',
    description: "Making user's trip personal.",
  },
  {
    path: 'features/post-onboarding',
    label: 'After Start Experience',
    description: 'Helping users to first success.',
  },
  {
    path: 'features/reading-interface',
    label: 'Reading Screen & Buttons',
    description: 'The main reading part.',
  },
  {
    path: 'features/home-interface',
    label: 'Home Screen / Main Page',
    description: 'Place for user to do things.',
  },
];

const ReadingApp = () => {
  const outlet = useOutlet();

  return (
    <div className="min-h-screen bg-background">
      {outlet ? (
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      ) : (
        <>
          <div className="max-w-7xl mx-auto">
            <header className="py-4 px-6">
              <h1 className="text-4xl font-bold text-textPrimary mb-4">
                ReadingApp Case Study - How It Was Made
              </h1>
              <p className="text-textSecondary text-lg mb-10">
                A close look at the design process and how a mobile reading
                application changed over time.
              </p>
            </header>
          </div>

          <div className="max-w-7xl mx-auto">
            <section className="px-6 py-8 border-t border-gray-200">
              <h2 className="text-3xl font-semibold text-textPrimary mb-8 text-start">
                Design Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featureLinks.map((feature) => (
                  <Link
                    key={feature.path}
                    to={feature.path}
                    className="block p-6 bg-white rounded-xl transition-shadow border border-gray-200 group"
                  >
                    <h3 className="text-xl font-semibold text-primary mb-2 group-hover:underline">
                      {feature.label}
                    </h3>
                    <p className="text-sm text-textSecondary">
                      {feature.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Implementation Section */}
            <section className="px-6 py-8 border-t border-gray-200">
              <h2 className="text-3xl font-semibold text-textPrimary mb-6 text-start">
                Implementation
              </h2>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <p className="text-textSecondary mb-4">
                  The Reading App was made using new tech stack, with focus on a
                  good user interface and good state management. Important parts
                  of the development are component-based way of building and
                  connecting with backend services for story content and user
                  data.
                </p>
                <Link
                  to="implementation"
                  className="inline-block text-primary font-semibold hover:underline"
                >
                  See Details of Building & Code &rarr;
                </Link>
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default ReadingApp;
