import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs'; // Assuming Breadcrumbs is in components folder

const Implementation = () => {
  // Breadcrumb items for navigation
  const breadcrumbItems = [
    { label: 'Reading App', path: '/reading-app' },
    { label: 'Implementation', path: '/reading-app/implementation' },
  ];

  return (
    <div className="p-6 bg-background min-h-screen">
      <Breadcrumbs items={breadcrumbItems} />
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-textPrimary mb-3">
          Project Implementation & Realization
        </h1>
        <p className="text-lg text-textSecondary mb-6">
          This section details the technical realization of the Reading App,
          including the development process, technologies used, and links to the
          source code.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-textPrimary mb-6">
          Application Showcase
        </h2>
        <div className="bg-white p-8 rounded-xl border border-gray-200 mb-8">
          <p className="text-textSecondary mb-4">
            Here you would typically embed a live demo, screenshots, or a video
            walkthrough of the final application. Since this is a portfolio, a
            detailed description of the app's state and functionality is key.
          </p>
          {/* Placeholder for embedded content or detailed description */}
          <div className="text-center p-4 border border-dashed border-gray-300 rounded-md">
            <p className="text-gray-500">
              [Placeholder for App Showcase: Embed a video, link to a live demo,
              or add detailed screenshots and descriptions of the app's
              functionality here.]
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-textPrimary mb-6">
          Development Process & Technologies
        </h2>
        <div className="bg-white p-8 rounded-xl border border-gray-200">
          <p className="text-textSecondary mb-4">
            Briefly describe the development methodology (e.g., Agile sprints,
            Kanban) and the key technologies, frameworks, and libraries used in
            building the application (e.g., React Native, Firebase, Expo,
            specific UI libraries).
          </p>
          <ul className="list-disc list-inside space-y-2 text-textSecondary">
            <li>
              <strong>Frontend:</strong> [e.g., React, Tailwind CSS,
              Redux/Context API]
            </li>
            <li>
              <strong>Backend (if applicable):</strong> [e.g., Node.js,
              Firebase, Supabase]
            </li>
            <li>
              <strong>Development Tools:</strong> [e.g., VS Code, Git, ESLint,
              Prettier]
            </li>
            <li>
              <strong>Deployment (if applicable):</strong> [e.g., Vercel,
              Netlify, App Stores]
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-textPrimary mb-6">
          GitHub Repository
        </h2>
        <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
          <p className="text-textSecondary mb-4">
            The complete source code for the Reading App project is available on
            GitHub. Feel free to explore the codebase, issues, and commit
            history.
          </p>
          <a
            href="#" // <!-- // TODO: Add actual GitHub link here -->
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors text-lg"
          >
            View on GitHub
          </a>
        </div>
      </section>

      <div className="mt-12 text-center">
        <Link to="/reading-app" className="text-primary hover:underline">
          &larr; Back to Reading App Case Study Overview
        </Link>
      </div>
    </div>
  );
};

export default Implementation;
