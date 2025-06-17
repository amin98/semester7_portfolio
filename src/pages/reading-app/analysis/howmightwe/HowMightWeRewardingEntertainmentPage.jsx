import React from 'react';

const HowMightWeRewardingEntertainmentPage = () => {
  const question =
    'How might we make reading feel as rewarding as other forms of entertainment such as scrolling social media and gaming?';
  const pageTitle = 'How Might We: Make Reading as Rewarding as Entertainment';
  const pageDescription =
    'Exploring ways to make reading feel as rewarding and engaging as popular digital entertainment experiences.';

  return (
    <article className="max-w-5xl mx-auto py-8">
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl mb-4">
          {pageTitle}
        </h1>
        <p className="text-xl text-textSecondary">{pageDescription}</p>
      </header>
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-textPrimary mb-3">
            The Challenge
          </h2>
          <blockquote className="border-l-4 border-primary pl-4">
            <p className="text-lg italic text-textSecondary">"{question}"</p>
          </blockquote>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-textPrimary mb-3">
            Design Exploration
          </h2>
          <p className="text-lg text-textSecondary">
            // TODO: Add your design ideas, sketches, or research here.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-textPrimary mb-3">
            Potential Solutions
          </h2>
          <p className="text-lg text-textSecondary">
            // TODO: Summarize possible solutions and their implications.
          </p>
        </section>
      </div>
    </article>
  );
};

export default HowMightWeRewardingEntertainmentPage;
