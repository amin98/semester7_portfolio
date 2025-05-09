import React from 'react';
import { Link, Outlet, useOutlet } from 'react-router-dom';

const featureLinks = [
  {
    path: 'features/welcome',
    label: 'Welcome & Initial Setup',
    description: 'First impressions and app entry.',
  },
  {
    path: 'features/onboarding',
    label: 'User Onboarding Flow',
    description: "Personalizing the user's journey.",
  },
  {
    path: 'features/post-onboarding',
    label: 'Post-Onboarding Experience',
    description: 'Guiding users to initial success.',
  },
  {
    path: 'features/reading-interface',
    label: 'Reading Interface & Controls',
    description: 'The core reading experience.',
  },
  {
    path: 'features/home-interface',
    label: 'Home Screen / Dashboard',
    description: 'Hub for user engagement.',
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
                ReadingApp Case Study
              </h1>
              <p className="text-textSecondary text-lg mb-10">
                A deep dive into the design process and evolution of a mobile
                reading application.
              </p>
            </header>
          </div>

          <div className="max-w-7xl mx-auto">
            <section className="px-6 py-8 border-t border-gray-200">
              <h2 className="text-3xl font-semibold text-textPrimary mb-8 text-start">
                Feature Designs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featureLinks.map((feature) => (
                  <Link
                    key={feature.path}
                    to={feature.path}
                    className="block p-6 bg-white rounded-xl shadow-medium hover:shadow-large transition-shadow border border-gray-200 group"
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
          </div>
        </>
      )}
    </div>
  );
};

export default ReadingApp;
