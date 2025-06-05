// src/pages/fitphone/PrototypeTesting.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PrototypeTesting = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl border border-gray-200">
    <h1 className="text-2xl font-semibold text-textPrimary mb-4">
      Testing Our Prototypes
    </h1>
    <p className="text-textSecondary mb-4">
      {/* Summarize your usability tests, findings, and how you collected feedback. */}
      We tested our clickable prototypes with users two times. Our main goals
      were to check if people could find things easily, use all features, and if
      they liked how it looked and felt. Below, you can find a short summary of
      how the tests went and what we found out.
    </p>
    {/* TODO: Insert test summaries, heatmaps, or user quotes */}
    <Link to="/fitphone" className="text-primary hover:underline">
      &larr; Go Back to FitPhone Overview
    </Link>
  </div>
);

export default PrototypeTesting;
