// src/pages/fitphone/FeedbackImplementation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FeedbackImplementation = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl border border-gray-200">
    <h1 className="text-2xl font-semibold text-textPrimary mb-4">
      Using Feedback in Our Design
    </h1>
    <p className="text-textSecondary mb-4">
      {/* Explain how you incorporated peer/team feedback into your designs. */}
      After testing our prototypes, we put all feedback into three groups:
      'must-haves,' 'should-fixes,' and 'nice-to-haves.' We did the important
      things first, like making sure it was easy to move around and buttons were
      easy to use. Then we kept making it better. The table below shows how
      specific feedback made us change the design.
    </p>
    {/* TODO: Insert a table or before/after images illustrating feedback changes */}
    <Link to="/fitphone" className="text-primary hover:underline">
      &larr; Go Back to FitPhone Overview
    </Link>
  </div>
);

export default FeedbackImplementation;
