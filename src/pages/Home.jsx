import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const entryPoints = [
    {
      title: 'Group Project',
      description:
        'See our work together, showing teamwork, how we shared tasks, and what we achieved for the FitPhone project.',
      link: '/group',
      cta: 'See Group Work Done',
    },
    {
      title: 'Individual Case',
      description:
        'Take a look at my personal project, with design changes, how I developed it, and my thoughts on the Learning Outcomes.',
      link: '/individual',
      cta: 'See My Own Work Done',
    },
  ];

  return (
    <div className="p-6 bg-background min-h-screen">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
          Portfolio - Semester 7
        </h1>
        <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto">
          This portfolio shows my learning, skills, and what I did in the
          semester. Go through my own and group projects to see how I did with
          the Learning Outcomes.
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
          Look more using the menu on the side for details on Learning Outcomes,
          improvements, and more things.
        </p>
      </div>
    </div>
  );
};

export default Home;
