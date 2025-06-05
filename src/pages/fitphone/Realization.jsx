// src/pages/fitphone/Realization.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Realization = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl border border-gray-200">
    <h1 className="text-2xl font-semibold text-textPrimary mb-4">
      Making It Real & Coding
    </h1>
    <p className="text-textSecondary mb-4">
      {/* Provide a high-level overview of your Flutter/Firebase code, folder structure, and key technical decisions. */}
      Now, let's talk about tech. We made FitPhone with Flutter, using Riverpod
      for state management and Firebase for our backend. Some cool things we
      built are the onboarding steps, the way your virtual garden grows, and
      adding a social feed. You can see our project setup and a piece of the
      'challenge complete' code below.
    </p>
    {/* TODO: Insert screenshots of code, link to GitHub repo, sample code snippet */}
    <Link to="/fitphone" className="text-primary hover:underline">
      &larr; Go Back to FitPhone Overview
    </Link>
  </div>
);

export default Realization;
