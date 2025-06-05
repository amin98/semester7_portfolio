import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder data - you'll replace this with your actual progress for the group project
const learningOutcomesData = [
  {
    id: 'analysis',
    title: 'Analysis',
    description:
      'Look very close and step-by-step at a problem, chance or technology in a smart-mobile way.',
    progressItems: [
      'Together, we decided the project plan and goals.',
      'Looked at the target user group for our group project.',
    ],
    status: 'In Progress',
  },
  {
    id: 'advice',
    title: 'Advice',
    description:
      'Based on good analysis, you give advice on good user interaction and tech design, making designs better, research and/or how to do things.',
    progressItems: [
      'Helped in talks about choosing technology.',
      'Gave ideas on UI/UX design choices for group app.',
    ],
    status: 'To Do',
  },
  {
    id: 'design',
    title: 'Design',
    description:
      'Use a design way to make UX and tech designs and check your choices, in a situation that is complex and can change.',
    progressItems: [
      'Took part in group idea sessions and design meetings.',
      'Helped to make shared design mockups.',
    ],
    status: 'In Progress',
  },
  {
    id: 'realisation',
    title: 'Realisation',
    description:
      'Based on a good design, you make, check and put out an interactive and working smart-mobile product.',
    progressItems: [
      'Making some parts/features for the group project.',
      'Putting individual work into the main codebase.',
    ],
    status: 'In Progress',
  },
  {
    id: 'manage-control',
    title: 'Manage & Control',
    description:
      'Always use methods to manage a development way and make sure it is good quality, talking directly with all people involved.',
    progressItems: [
      'Took part in sprint planning and review meetings.',
      'Used shared version control (like Git) for working together on development.',
    ],
    status: 'Done',
  },
  {
    id: 'professional-skills',
    title: 'Professional Skills',
    description:
      'Show your professional growth as a mobile developer with real, professional IT tasks where both the way of working and the result can be seen.',
    progressItems: [
      'Good talking and working together in the team.',
      'Looking at team code and giving good feedback.',
      'Helping with group project documents.',
    ],
    status: 'In Progress',
  },
];

const StatusBadge = ({ status }) => {
  let bgColor = 'bg-gray-200 text-gray-700'; // Default for 'To Do' or other statuses
  if (status === 'Done') bgColor = 'bg-success text-white';
  if (status === 'In Progress') bgColor = 'bg-warning text-textPrimary';

  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${bgColor}`}>
      {status}
    </span>
  );
};

const GroupOverview = () => {
  return (
    <div className="p-6 bg-background min-h-screen">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-textPrimary mb-3">
          Group Project Work Done
        </h1>
        <p className="text-lg text-textSecondary mb-6">
          Summary of what we did and team successes for the group project, put
          by Learning Outcomes.
        </p>
        <Link
          to="/fitphone"
          className="inline-block bg-primary text-white font-semibold px-cta-x py-3 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          See FitPhone Case Study &rarr;
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
                    {/* TODO: Add links to specific evidence pages or team documents here */}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-textSecondary">
                No work items written for this goal yet.
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default GroupOverview;
