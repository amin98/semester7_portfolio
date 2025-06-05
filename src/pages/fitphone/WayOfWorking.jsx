// src/pages/fitphone/WayOfWorking.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const WayOfWorking = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl border border-gray-200">
    <h1 className="text-2xl font-semibold text-textPrimary mb-4">
      How We Worked (Agile/Trello)
    </h1>
    <p className="text-textSecondary mb-4">
      {/* Describe your Agile/Trello workflow—columns, color-coding, swimlanes, etc. */}
      So, how did we keep it all organized? We used a Trello board with a normal
      Agile setup. We had columns for our Backlog, what we were doing in the
      current Sprint, what was In Progress, and so on, all up to Done. To see
      how much work, we sized tasks (XS to XL) and used colors for them. Every
      sprint, we moved tasks to the 'Sprint Backlog,' worked on them, and if
      something was not finished, it went back to the main Backlog for the next
      time.
    </p>
    <div className="mb-6">
      <img
        src="/assets/fitphone-trello-board.png"
        alt="FitPhone Trello Board"
        className="w-full rounded-lg shadow-md"
      />
    </div>
    <Link to="/fitphone" className="text-primary hover:underline">
      &larr; Go Back to FitPhone Overview
    </Link>
  </div>
);

export default WayOfWorking;
