// src/pages/reading-app/management/MethodologyToolsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// You would import screenshots of your actual tools
// import notionBoard from '../../../assets/lo_images/readingapp/management/notion-board.png';
// import gitHistory from '../../../assets/lo_images/readingapp/management/git-history.png';

const MethodologyToolsPage = () => {
  const learningOutcomes = ['Manage & Control', 'Professional Skills'];

  return (
    <article className="max-w-5xl mx-auto py-8">
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl mb-4">
          Methodology & Tools
        </h1>
        <p className="text-xl text-textSecondary">
          Detailing the agile-inspired methodology, task management tools, and
          version control strategy used to manage the project effectively.
        </p>
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {learningOutcomes.map((lo, idx) => (
              <Link
                key={idx}
                to={`/lo/${lo.toLowerCase().replace(/ & | /g, '-')}`}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full hover:bg-indigo-200 transition-colors"
              >
                {lo}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <div className="space-y-16">
        <section aria-labelledby="methodology-overview-title">
          <h2
            id="methodology-overview-title"
            className="text-3xl font-semibold text-textPrimary mb-4"
          >
            Project Methodology
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed">
            For this individual project, I adopted an **iterative, phase-based approach** inspired by agile principles. The work was organized logically: foundational **Analysis** first, followed by **Design & Prototyping**, and then **Implementation**. My task management in Notion reflected this, with weekly goals set to complete specific deliverables within each phase (e.g., "Finish Competitive Analysis," "Prototype Welcome Screen V1"). This allowed for a structured workflow while remaining flexible enough to incorporate feedback.
          </p>
        </section>

        <section aria-labelledby="task-management-title">
          <h2
            id="task-management-title"
            className="text-3xl font-semibold text-textPrimary mb-6"
          >
            Task Management: Notion
          </h2>
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
            <img
              src='https://placehold.co/600x400/EEE/31343C'
              alt="Screenshot of the project Notion board"
              className="w-full h-auto rounded-lg object-contain border border-gray-100 shadow-md"
            />
            <p className="text-sm text-gray-500 mt-3">
              My project board in Notion, using a Kanban-style layout.
            </p>
          </div>
          <p className="text-lg text-textSecondary mt-6">
            I used Notion to create a simple and effective Kanban board. This was my single source of truth for all tasks.
          </p>
          <ul className="list-disc list-inside text-lg text-textSecondary space-y-2 mt-4">
            <li>
              <span className="font-semibold">Backlog:</span> This column housed all tasks derived from my research and feature ideas. For example, after the analysis phase, tasks like "Design Onboarding" were created here.
            </li>
            <li>
              <span className="font-semibold">To Do / This Week:</span> At the start of each week, I pulled tasks from the Backlog into this column based on project dependencies and priorities.
            </li>
            <li>
              <span className="font-semibold">In Progress:</span> The single task I was actively working on.
            </li>
            <li>
              <span className="font-semibold">Done:</span> Completed tasks, providing a clear record of progress.
            </li>
          </ul>
        </section>

        <section aria-labelledby="version-control-title">
          <h2
            id="version-control-title"
            className="text-3xl font-semibold text-textPrimary mb-6"
          >
            Version Control: Git & GitHub
          </h2>
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
            <img
              src='https://placehold.co/600x400/EEE/31343C'
              alt="Screenshot of the main branch commit history on GitHub"
              className="w-full h-auto rounded-lg object-contain border border-gray-100"
            />
            <p className="text-sm text-gray-500 mt-3">
              The commit history on the `main` branch, showing clear, atomic commits.
            </p>
          </div>
          <p className="text-lg text-textSecondary mt-6">
            While larger, collaborative projects benefit from complex branching models like GitFlow, I made a conscious decision to adopt a simpler, **single-branch strategy for this solo project.**
          </p>
          <p className="text-lg text-textSecondary mt-4">
            **Justification:** This approach maximized development velocity and simplicity, which was appropriate for a single developer. It eliminated the overhead of managing feature branches and pull requests, allowing me to focus on rapid iteration.
          </p>
          <p className="text-lg text-textSecondary mt-4">
            To maintain code quality and a clear history within this single `main` branch, I relied on two key disciplines:
          </p>
          <ol className="list-decimal list-inside text-lg text-textSecondary space-y-2 mt-4">
            <li>
              <span className="font-semibold">Atomic & Well-Described Commits:</span> Each commit represents a single, logical piece of work (e.g., `feat: create welcome screen component`, `fix: button alignment on mobile`). I used conventional commit messaging to keep the history readable and professional.
            </li>
            <li>
              <span className="font-semibold">Regular Pushes to Remote:</span> All work was pushed to the remote GitHub repository daily. This ensured a constant backup and provided a transparent, timestamped log of my progress and activity.
            </li>
          </ol>
        </section>
      </div>
    </article>
  );
};

export default MethodologyToolsPage;