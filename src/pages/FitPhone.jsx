import React from 'react';
// import DesignIterations from '../components/DesignIterations';

const FitPhone = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <header className="py-header-y px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            FitPhone Case Study
          </h1>
          <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto">
            A comprehensive look into the FitPhone group project, detailing our
            process, collaboration, and outcomes.
          </p>
        </header>

        <main className="px-6 pb-12">
          {/* Placeholder for FitPhone specific content */}
          <section className="py-12">
            <h2 className="text-3xl font-semibold text-textPrimary text-center mb-8">
              Project Details & Iterations
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-large border border-gray-200">
              <p className="text-textSecondary text-center">
                Content for FitPhone's design iterations, technical
                specifications, and other project-specific details will be
                showcased here. You can integrate a component similar to
                'DesignIterations.jsx' tailored for FitPhone.
              </p>
              {/* Example: <DesignIterations projectData={fitPhoneData} /> */}
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-semibold text-textPrimary text-center mb-8">
              Team Contributions & Learning
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-large border border-gray-200">
              <p className="text-textSecondary text-center">
                Details about individual contributions, team dynamics, and
                learnings from the FitPhone project will be documented in this
                section.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default FitPhone;
