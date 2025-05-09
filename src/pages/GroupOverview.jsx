import React from 'react';

// Placeholder data - you'll replace this with your actual progress for the group project
const learningOutcomesData = [
  {
    id: 'analysis',
    title: 'Analysis',
    description:
      'Critically and methodically analyse a problem, opportunity or technology in a smart-mobile context.',
    progressItems: [
      'Collaboratively defined project scope and objectives.',
      'Analyzed target user group for the group project.',
    ],
    status: 'In Progress',
  },
  {
    id: 'advice',
    title: 'Advice',
    description:
      'Based on relevant analysis, you advise on suitable user interaction and technological design, improvement of designs, research and/or methodology.',
    progressItems: [
      'Contributed to technology selection discussions.',
      'Provided input on UI/UX design choices for group application.',
    ],
    status: 'To Do',
  },
  {
    id: 'design',
    title: 'Design',
    description:
      'Use a design process to create UX and technological designs and validate your choices, in a context which is complex and subject to change.',
    progressItems: [
      'Participated in group brainstorming and design sessions.',
      'Contributed to the creation of shared design mockups.',
    ],
    status: 'In Progress',
  },
  {
    id: 'realisation',
    title: 'Realisation',
    description:
      'Based on a relevant design you implement, validate and deploy an interactive and reliable smart-mobile product.',
    progressItems: [
      'Developing specific modules/features for the group project.',
      'Integrating individual contributions into the main codebase.',
    ],
    status: 'In Progress',
  },
  {
    id: 'manage-control',
    title: 'Manage & Control',
    description:
      'Continuously apply methodologies to manage a development process and to assure its quality in direct communication with all stakeholders.',
    progressItems: [
      'Participated in sprint planning and review meetings.',
      'Utilized shared version control (e.g., Git) for collaborative development.',
    ],
    status: 'Done',
  },
  {
    id: 'professional-skills',
    title: 'Professional Skills',
    description:
      'Demonstrate your professional development as a mobile developer through authentic, professional IT tasks in which both the process and the result are visible.',
    progressItems: [
      'Effective communication and collaboration within the team.',
      'Peer reviewing code and providing constructive feedback.',
      'Contributing to group project documentation.',
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
          Group Project Progress
        </h1>
        <p className="text-lg text-textSecondary">
          Overview of contributions and team achievements for the group project,
          organized by Learning Outcomes.
        </p>
      </header>

      <div className="space-y-12">
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
                No progress items documented for this outcome yet.
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default GroupOverview;
