import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const entryPoints = [
    {
      title: 'Group Project',
      description:
        'Discover our collaborative effort, showcasing teamwork, shared responsibilities, and collective achievements against the Learning Outcomes.',
      link: '/group',
      cta: 'View Group Progress',
    },
    {
      title: 'Individual Case',
      description:
        'Explore my personal project, including design iterations, development progress, and reflections on the Learning Outcomes.',
      link: '/individual',
      cta: 'View Individual Progress',
    },
  ];

  return (
    <div className="p-6 bg-background min-h-screen">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto">
          This portfolio documents my journey, skills, and achievements
          throughout the semester. Navigate through my individual and group
          projects to see my progress against the learning outcomes.
        </p>
      </header>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {entryPoints.map((entry) => (
          <Link
            to={entry.link}
            key={entry.title}
            className="block bg-white p-8 rounded-lg transition-shadow duration-300 border border-gray-200 group"
          >
            <h2 className="text-2xl font-semibold text-textPrimary mb-3">
              {entry.title}
            </h2>
            <p className="text-textSecondary mb-6 text-base">
              {entry.description}
            </p>
            <span className="inline-block text-primary font-semibold group-hover:underline">
              {entry.cta} &rarr;
            </span>
          </Link>
        ))}
      </div>

      {/* You can add other sections here, e.g., about me, link to assessment feedback */}
      <div className="mt-16 text-center">
        <p className="text-textSecondary">
          Explore further using the sidebar navigation for detailed Learning
          Outcomes, improvements, and more.
        </p>
      </div>
    </div>
  );
};

export default Home;
