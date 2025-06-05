// src/pages/fitphone/Meetings.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Meetings = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl border border-gray-200">
    <h1 className="text-2xl font-semibold text-textPrimary mb-4">
      Meetings & Working Together
    </h1>
    <p className="text-textSecondary mb-4">
      {/* Summarize stand-up notes, sprint planning records, and retrospectives. */}
      So everyone knew what was happening, we had short daily stand-ups, planned
      our sprints every week, and at the end of sprints, we looked back at how
      things went. We wrote everything in shared Google Docs – you can see some
      of our notes and important points below.
    </p>
    {/* TODO: Insert links or embedded Google Docs/Slack screenshots of meeting notes */}
    <Link to="/fitphone" className="text-primary hover:underline">
      &larr; Go Back to FitPhone Overview
    </Link>
  </div>
);

export default Meetings;
