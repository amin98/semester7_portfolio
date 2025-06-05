import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder data - you'll replace this with your actual progress
const learningOutcomesData = [
  {
    id: 'analysis',
    title: 'Analysis',
    description:
      'Look very close and step-by-step at a problem, chance or technology in a smart-mobile way.',
    progressItems: [
      'Did user research for the Reading App project.',
      'Looked at other mobile reading apps.',
      'Found main problems in how users read now.',
    ],
    status: 'In Progress', // 'Done', 'In Progress', 'To Do'
  },
  {
    id: 'advice',
    title: 'Advice',
    description:
      'Based on good analysis, you give advice on good user interaction and tech design, making designs better, research and/or how to do things.',
    progressItems: [
      'Suggested three different UI designs for the Reading App.',
      'Gave advice on tech stack from project needs.',
    ],
    status: 'Done',
  },
  {
    id: 'design',
    title: 'Design',
    description:
      'Use a design way to make UX and tech designs and check your choices, in a situation that is complex and can change.',
    progressItems: [
      'Made high-quality prototypes for V1, V2, and V3 of the Reading App.',
      'Made user flow charts and wireframes.',
      'Changed designs based on HMW questions and LO connections (see Design Steps page).',
    ],
    status: 'In Progress',
  },
  {
    id: 'realisation',
    title: 'Realisation',
    description:
      'Based on a good design, you make, check and put out an interactive and working smart-mobile product.',
    progressItems: [
      'Making the frontend of the Reading App using React.',
      'Setting up project files and first components.',
    ],
    status: 'In Progress',
  },
  {
    id: 'manage-control',
    title: 'Manage & Control',
    description:
      'Always use methods to manage a development way and make sure it is good quality, talking directly with all people involved.',
    progressItems: [
      'Keeping a Kanban board to track tasks.',
      'Putting code to Git repository often.',
    ],
    status: 'Done',
  },
  {
    id: 'professional-skills',
    title: 'Professional Skills',
    description:
      'Show your professional growth as a mobile developer with real, professional IT tasks where both the way of working and the result can be seen.',
    progressItems: [
      'Writing down design choices and reasons.',
      'Asking for and using feedback.',
    ],
    status: 'In Progress',
  },
];

const StatusBadge = ({ status }) => {
  let bgColor = 'bg-gray-200 text-gray-700';
  if (status === 'Done') bgColor = 'bg-success text-white';
  if (status === 'In Progress') bgColor = 'bg-warning text-textPrimary';

  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${bgColor}`}>
      {status}
    </span>
  );
};

const IndividualOverview = () => {
  return (
    <div className="p-6 bg-background min-h-screen">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-textPrimary mb-3">
          Individual Project
        </h1>
        <p className="text-lg text-textSecondary mb-6">
          Summary of what I did and work I am doing for my Individual Project, put by
          Learning Outcomes.
        </p>
        <Link
          to="/reading-app"
          className="inline-block bg-primary text-white font-semibold px-cta-x py-3 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          See Reading App Case Study &rarr;
        </Link>
      </header>

      <div className="space-y-12 mt-12">
        {learningOutcomesData.map((lo) => (
          <section key={lo.id} aria-labelledby={lo.id + '-heading'}>
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
              <h2
                id={lo.id + '-heading'}
                className="text-2xl font-semibold text-textPrimary"
              >
                {lo.title}
              </h2>
              {lo.status && <StatusBadge status={lo.status} />}
            </div>
            <p className="text-textSecondary mb-6 italic">{lo.description}</p>
            {lo.progressItems && lo.progressItems.length > 0 ? (
              <ul className="space-y-3 list-disc list-inside pl-1">
                {lo.progressItems.map((item, index) => (
                  <li key={index} className="text-textPrimary">
                    {item}
                    {/* TODO: Add links to specific evidence pages here */}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-textSecondary">
                No work items written for this goal yet.
              </p>
            )}
            {/* Consider adding expandable cards here for more detail */}
          </section>
        ))}
      </div>
    </div>
  );
};

export default IndividualOverview;
