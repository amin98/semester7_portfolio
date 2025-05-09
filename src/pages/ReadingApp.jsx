import React from 'react';
import DesignIterations from '../components/DesignIterations';

const ReadingApp = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        <header className="py-8 px-6">
          <h1 className="text-4xl font-bold text-textPrimary mb-4">
            Reading App Case Study
          </h1>
          <p className="text-textSecondary text-lg">
            A deep dive into the design process and evolution of a mobile
            reading application.
          </p>
        </header>

        <main className="px-6 pb-12">
          <DesignIterations />
        </main>
      </div>
    </div>
  );
};

export default ReadingApp;
