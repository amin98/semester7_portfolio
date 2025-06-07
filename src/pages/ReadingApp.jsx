// src/pages/ReadingApp.jsx
import React from 'react';
import { Link, Outlet, useOutlet } from 'react-router-dom';

export const analysisTopicLinks = [
  {
    path: 'analysis/problem-definition',
    label: 'Problem & Opportunity',
    description:
      'Defining the core problem and market opportunity for the app.',
    learningOutcomes: ['Analysis'],
  },
  {
    path: 'analysis/target-audience',
    label: 'Target Audience & Personas',
    description: 'Understanding who the app is for and their needs.',
    learningOutcomes: ['Analysis'],
  },
  {
    path: 'analysis/competitive-landscape',
    label: 'Competitive Analysis',
    description:
      'Reviewing existing solutions and identifying differentiators.',
    learningOutcomes: ['Analysis'],
  },
];

export const featureLinks = [
  // For "Design & Prototyping Process"
  {
    path: 'features/welcome',
    label: 'Welcome Screen',
    description: 'First look and how to enter app.',
    // These should ideally match the 'relevantLearningOutcomesOverall' from the WelcomeFeaturePage data
    learningOutcomes: ['Analysis', 'Advice', 'Design', 'Professional Skills'],
  },
  {
    path: 'features/onboarding',
    label: 'User Start Flow',
    description: "Making user's trip personal.",
    learningOutcomes: ['Analysis', 'Advice', 'Design', 'Professional Skills'], // Example, adjust as per OnboardingFeaturePage
  },
  {
    path: 'features/post-onboarding',
    label: 'After Start Experience',
    description: 'Helping users to first success.',
    learningOutcomes: ['Design', 'Advice'], // Example
  },
  {
    path: 'features/reading-interface',
    label: 'Reading Screen & Buttons',
    description: 'The main reading part.',
    learningOutcomes: ['Design', 'Realisation'], // Example
  },
  {
    path: 'features/home-interface',
    label: 'Home Screen / Main Page',
    description: 'Place for user to do things.',
    learningOutcomes: ['Design', 'Analysis'], // Example
  },
];

export const techDesignLinks = [
  {
    path: 'technical-design/stack-justification',
    label: 'Technology Stack & Justification',
    description: 'Chosen technologies (Flutter, Firebase, etc.) and why.',
    learningOutcomes: ['Analysis', 'Advice', 'Design'], // Primarily Advice & Design
  },
  {
    path: 'technical-design/architecture',
    label: 'Software Architecture',
    description: 'High-level architecture and data flow diagrams.',
    learningOutcomes: ['Design', 'Realisation'], // Primarily Design
  },
  {
    path: 'technical-design/non-functionals',
    label: 'Non-Functional Requirements',
    description: 'Addressing performance, scalability, and security in design.',
    learningOutcomes: ['Advice', 'Design'], // Primarily Advice & Design
  },
];

export const projectManagementLinks = [
  {
    path: 'management/methodology-tools',
    label: 'Methodology & Tools',
    description:
      'Agile practices, task management (Trello/Jira), and version control (Git).',
    learningOutcomes: ['Manage & Control'],
  },
  {
    path: 'management/stakeholder-communication',
    label: 'Stakeholder Communication',
    description:
      'Interactions with mentors/teachers and feedback incorporation.',
    learningOutcomes: ['Manage & Control', 'Professional Skills'],
  },
  {
    path: 'management/quality-assurance',
    label: 'Quality Assurance',
    description: 'Testing strategies and ensuring app quality.',
    learningOutcomes: ['Manage & Control', 'Realisation'],
  },
];

export const professionalDevelopmentLinks = [
  {
    path: 'professional-dev/overall-reflection',
    label: 'Overall Project Reflection & Learnings',
    description: 'Key takeaways and what I would do differently.',
    learningOutcomes: ['Professional Skills'],
  },
  {
    path: 'professional-dev/feedback-processing',
    label: 'Feedback Processing',
    description: 'How formal and informal feedback was actioned.',
    learningOutcomes: ['Professional Skills', 'Manage & Control'],
  },
  {
    path: 'professional-dev/skill-development',
    label: 'Skill Development',
    description: 'New technical and soft skills gained during the project.',
    learningOutcomes: ['Professional Skills'],
  },
];

const ReadingApp = () => {
  const outlet = useOutlet();

  const renderSectionLinks = (linksArray) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {linksArray.map((item) => (
        <div
          key={item.path}
          className="flex flex-col bg-white rounded-xl border border-gray-200 group hover:shadow-xl hover:border-primary transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <Link to={item.path} className="block p-6 flex-grow">
            <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-primary-dark transition-colors">
              {item.label}
            </h3>
            <p className="text-base text-textSecondary group-hover:text-textPrimary transition-colors">
              {item.description}
            </p>
          </Link>
          {item.learningOutcomes && item.learningOutcomes.length > 0 && (
            <div className="px-6 pt-2 pb-4 border-t border-gray-100 mt-auto">
              <div className="flex flex-wrap gap-2">
                {item.learningOutcomes.map((lo) => (
                  <Link
                    key={lo.toLowerCase().replace(/ & | /g, '-')} // More robust key/path generation
                    to={`/lo/${lo.toLowerCase().replace(/ & | /g, '-')}`} // e.g., /lo/manage-control
                    className="px-3 py-1 bg-gray-100 text-xs text-gray-700 rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                  >
                    {lo}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {outlet ? (
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-4">
          <Outlet />
        </div>
      ) : (
        <>
          <div className="max-w-7xl mx-auto">
            <header className="py-8 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-200 mb-8">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-textPrimary mb-3 tracking-tight">
                Individual Case: Reading App
              </h1>
              <p className="text-textSecondary text-lg sm:text-xl max-w-3xl mx-auto">
                A comprehensive look at the analysis, design, development, and
                management of a mobile reading application, showcasing the
                iterative process and key learnings.
              </p>
            </header>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-16">
            <section className="py-8">
              <h2 className="text-3xl font-semibold text-textPrimary mb-8 text-start border-l-4 border-primary pl-4">
                1. Analysis & Discovery
              </h2>
              {renderSectionLinks(analysisTopicLinks)}
            </section>

            <section className="py-8">
              <h2 className="text-3xl font-semibold text-textPrimary mb-8 text-start border-l-4 border-primary pl-4">
                2. Design & Prototyping Process
              </h2>
              {renderSectionLinks(featureLinks)}
            </section>

            <section className="py-8">
              <h2 className="text-3xl font-semibold text-textPrimary mb-8 text-start border-l-4 border-primary pl-4">
                3. Technical Design & Architecture
              </h2>
              {renderSectionLinks(techDesignLinks)}
            </section>

            <section className="py-8">
              <h2 className="text-3xl font-semibold text-textPrimary mb-6 text-start border-l-4 border-primary pl-4">
                4. Realisation & Deployment
              </h2>
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-textSecondary mb-4 text-lg">
                  The Reading App was developed using a modern technology stack,
                  with a strong focus on creating a responsive user interface
                  and robust state management. Key development aspects include a
                  component-based architecture and integration with backend
                  services for content and user data. This section details the
                  coding process, challenges, and the journey to deploying the
                  application.
                </p>
                <Link
                  to="implementation"
                  className="inline-flex items-center text-primary font-semibold hover:underline text-lg"
                >
                  Explore Development & Deployment Details →
                </Link>
                {/* Add LO tags for this main implementation link if desired */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Realisation', 'Design'].map(
                    (
                      lo // Example LOs for the main implementation page
                    ) => (
                      <Link
                        key={lo.toLowerCase().replace(/ & | /g, '-')}
                        to={`/lo/${lo.toLowerCase().replace(/ & | /g, '-')}`}
                        className="px-3 py-1 bg-gray-100 text-xs text-gray-700 rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                      >
                        {lo}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </section>

            <section className="py-8">
              <h2 className="text-3xl font-semibold text-textPrimary mb-8 text-start border-l-4 border-primary pl-4">
                5. Project Management & Collaboration
              </h2>
              {renderSectionLinks(projectManagementLinks)}
            </section>

            <section className="py-8">
              <h2 className="text-3xl font-semibold text-textPrimary mb-8 text-start border-l-4 border-primary pl-4">
                6. Professional Development & Reflection
              </h2>
              {renderSectionLinks(professionalDevelopmentLinks)}
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default ReadingApp;
