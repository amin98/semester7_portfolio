// src/pages/reading-app/analysis/ResearchQuestionsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ResearchQuestionsPage = () => {
  const learningOutcomes = ['Analysis'];

  // --- PLACEHOLDER DATA: Replace this with your actual content ---
  const mainResearchQuestion =
    'How can a mobile application utilizing gamification, data, and AI, effectively increase reading engagement among young people 12-25 in a home leisure reading context?';

  const subQuestions = [
    {
      question:
        'What causes young people to lose interest in long-form reading?',
      path: 'research-reading-interest',
    },
    {
      question: 'How do teachers currently try to motivate reading?',
      path: 'research-teacher-motivation',
    },
    {
      question:
        'What tech do young people already use for entertainment and learning?',
      path: 'research-existing-tech',
    },
    {
      question:
        'What kind of reading content feels most accessible to non-readers?',
      path: 'research-accessible-content',
    },
  ];

  const designChallenges = [
    {
      title: 'Making Reading as Rewarding as Entertainment',
      description:
        'How might we make reading feel as rewarding as other forms of entertainment such as scrolling social media and gaming? This challenge focuses on creating an experience that competes with the instant gratification of digital entertainment.',
      path: 'rewarding-entertainment',
    },
    {
      title: 'Gamification for Habit Building',
      description:
        'How might we use gamification to build strong reading habits? The challenge is to design game-like systems that encourage consistent reading without feeling forced or superficial.',
      path: 'gamification-habits',
    },
    {
      title: 'Personal and Fun Reading Challenges',
      description:
        'How might we design reading challenges that feel personal and fun? The goal is to create challenges that are tailored to individual interests and motivations, making reading engaging for everyone.',
      path: 'personal-fun-challenges',
    },
    {
      title: 'Supporting Readers through Teachers and Parents',
      description:
        'How might we help teachers and parents to support the reader? This challenge is about designing tools and features that empower adults to encourage and assist young readers effectively.',
      path: 'support-adults',
    },
  ];
  // --- END OF PLACEHOLDER DATA ---

  return (
    <article className="max-w-5xl mx-auto py-8">
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl mb-4">
          Research Questions & Design Challenges
        </h1>
        <p className="text-xl text-textSecondary">
          Breaking down the main problem into specific, answerable research
          questions and identifying key design challenges to guide the project.
        </p>
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-textPrimary mb-1">
            Relevant Learning Outcome:
          </h4>
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
        <section aria-labelledby="main-research-question-title">
          <h2
            id="main-research-question-title"
            className="text-3xl font-semibold text-textPrimary mb-4"
          >
            Main Research Question
          </h2>
          <blockquote className="border-l-4 border-primary pl-6 py-2 bg-gray-50 rounded-r-lg">
            <p className="text-xl italic text-textPrimary leading-relaxed">
              "{mainResearchQuestion}"
            </p>
          </blockquote>
        </section>

        <section aria-labelledby="subquestions-title">
          <h2
            id="subquestions-title"
            className="text-3xl font-semibold text-textPrimary mb-6"
          >
            Sub-questions
          </h2>
          <div className="space-y-4 text-lg">
            {/* <ul className="list-decimal list-inside text-textSecondary space-y-3">
              {subQuestions.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul> */}
            <ul className="space-y-3">
              {/* Assuming subQuestions is now an array of objects with a path */}
              {subQuestions.map((question, index) => (
                <li
                  key={index}
                  className="p-4 bg-white border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all"
                >
                  <Link to={question.path} className="group">
                    <p className="font-semibold text-primary group-hover:underline">
                      {index + 1}. {question.question}
                    </p>
                    <p className="text-sm text-textSecondary mt-1">
                      Click to view detailed research and findings →
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="design-challenges-title">
          <h2
            id="design-challenges-title"
            className="text-3xl font-semibold text-textPrimary mb-6"
          >
            Design Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designChallenges.map((challenge, index) => (
              <Link
                key={index}
                to={challenge.path}
                className="group block bg-white p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:underline">
                  {challenge.title}
                </h3>
                <p className="text-textSecondary">{challenge.description}</p>
                <p className="text-sm text-textSecondary mt-4 font-semibold">
                  Click to view detailed exploration and ideas →
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};

export default ResearchQuestionsPage;
