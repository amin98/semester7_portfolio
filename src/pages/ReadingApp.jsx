// src/pages/ReadingApp.jsx
import React from 'react';
import { Link, Outlet, useOutlet } from 'react-router-dom';
import {
  analysisTopicLinks,
  featureLinks,
  professionalDevelopmentLinks,
  projectManagementLinks,
  techDesignLinks,
} from '../data/readingAppData';

const ReadingApp = () => {
  const outlet = useOutlet();

  const renderSectionLinks = (linksArray) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {linksArray.map((item) => (
        <div className="flex flex-col bg-white rounded-xl border border-gray-200 group hover:shadow-xl hover:border-primary transition-all duration-300 ease-in-out transform hover:-translate-y-1">
          <Link
            to={`/reading-app/${item.path}`}
            key={item.label}
            className="block p-6 flex-grow"
          >
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
                    key={lo}
                    to={`/lo/${lo.toLowerCase().replace(/ & | /g, '-')}`}
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
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-4">
      {/* 
        This is the key change. We check if an outlet (a child page) exists.
        If it does, we render it.
        If not, we render the default overview content with all the cards.
      */}
      {outlet ? (
        <Outlet />
      ) : (
        <>
          <header className="py-8 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-200 mb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-textPrimary mb-3 tracking-tight">
              Individual Case: Reading App
            </h1>
            <p className="text-textSecondary text-lg sm:text-xl max-w-3xl mx-auto">
              A comprehensive look at the analysis, design, development, and
              management of a mobile reading application.
            </p>
          </header>

          <div className="space-y-16 pb-16">
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
              <h2 className="text-3xl font-semibold text-textPrimary mb-8 text-start border-l-4 border-primary pl-4">
                4. Realisation & Deployment
              </h2>
              {/* This section might be different, linking to a single implementation page */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-textSecondary mb-4 text-lg">
                  The Reading App was developed using a modern technology stack,
                  with a strong focus on creating a responsive user interface
                  and robust state management.
                </p>
                <Link
                  to="/reading-app/implementation"
                  className="inline-flex items-center text-primary font-semibold hover:underline text-lg"
                >
                  Explore Development & Deployment Details →
                </Link>
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
