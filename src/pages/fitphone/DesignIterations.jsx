// src/pages/fitphone/DesignIterations.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DesignIterations = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl border border-gray-200">
    <h1 className="text-2xl font-semibold text-textPrimary mb-4">
      Design Steps
    </h1>
    <p className="text-textSecondary mb-4">
      {/* Describe how wireframes and mockups evolved. */}
      Our design work started with easy sketches. Then we made them better with
      InVision mockups. Last, we made a very good Figma prototype. We asked for
      opinions at every step. You can see how it changed with before-and-after
      pictures below.
    </p>
    <div className="mb-6">
      <a
        href="https://www.figma.com/design/Rl6PoRXOb0GJQyGaP6TtzH/FitPhone-style?node-id=0-1&t=IFa4XYpubbvkhquk-1"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors text-base"
      >
        See High Fidelity Figma Prototype &rarr;
      </a>
    </div>
    {/* TODO: Insert a component or static images showing version 1, 2, 3, etc. */}
    <Link to="/fitphone" className="text-primary hover:underline">
      &larr; Go Back to FitPhone Overview
    </Link>
  </div>
);

export default DesignIterations;
