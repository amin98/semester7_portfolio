import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder data - you'll replace this with your actual progress
const learningOutcomesData = [
  {
    id: 'analysis',
    title: 'Analysis',
    description:
      'Critically and methodically analyse a problem, opportunity or technology in a smart-mobile context.',
    progressItems: [
      'Conducted user research for the Reading App project.',
      'Analyzed competitor landscape for mobile reading applications.',
      'Identified key pain points in current user reading habits.',
    ],
    status: 'In Progress', // 'Done', 'In Progress', 'To Do'
  },
  {
    id: 'advice',
    title: 'Advice',
    description:
      'Based on relevant analysis, you advise on suitable user interaction and technological design, improvement of designs, research and/or methodology.',
    progressItems: [
      'Proposed three alternative UI designs for the Reading App.',
      'Advised on technology stack based on project requirements.',
    ],
    status: 'Done',
  },
  {
    id: 'design',
    title: 'Design',
    description:
      'Use a design process to create UX and technological designs and validate your choices, in a context which is complex and subject to change.',
    progressItems: [
      'Created high-fidelity prototypes for V1, V2, and V3 of the Reading App.',
      'Developed user flow diagrams and wireframes.',
      'Iterated on designs based on HMW questions and LO connections (see Design Iterations page).',
    ],
    status: 'In Progress',
  },
  {
    id: 'realisation',
    title: 'Realisation',
    description:
      'Based on a relevant design you implement, validate and deploy an interactive and reliable smart-mobile product.',
    progressItems: [
      'Developing the frontend of the Reading App using React.',
      'Setting up project structure and initial components.',
    ],
    status: 'In Progress',
  },
  {
    id: 'manage-control',
    title: 'Manage & Control',
    description:
      'Continuously apply methodologies to manage a development process and to assure its quality in direct communication with all stakeholders.',
    progressItems: [
      'Maintaining a Kanban board for task tracking.',
      'Regularly committing code to Git repository.',
    ],
    status: 'Done',
  },
  {
    id: 'professional-skills',
    title: 'Professional Skills',
    description:
      'Demonstrate your professional development as a mobile developer through authentic, professional IT tasks in which both the process and the result are visible.',
    progressItems: [
      'Documenting design choices and rationale.',
      'Actively seeking and incorporating feedback.',
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
          Individual Project Progress
        </h1>
        <p className="text-lg text-textSecondary mb-6">
          Overview of achievements and ongoing work for the individual project,
          organized by Learning Outcomes.
        </p>
        <Link
          to="/reading-app"
          className="inline-block bg-primary text-white font-semibold px-cta-x py-3 rounded-lg hover:bg-opacity-90 transition-colors shadow-medium hover:shadow-large"
        >
          View Reading App Case Study &rarr;
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
                No progress items documented for this outcome yet.
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
