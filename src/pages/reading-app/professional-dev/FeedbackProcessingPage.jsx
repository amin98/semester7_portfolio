// src/pages/reading-app/professional-dev/FeedbackProcessingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FeedbackProcessingPage = () => {
  const learningOutcomes = ['Professional Skills', 'Manage & Control'];

  return (
    <article className="max-w-5xl mx-auto py-8">
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl mb-4">
          Processing Feedback
        </h1>
        <p className="text-xl text-textSecondary">
          Demonstrating a professional process for receiving, analyzing, and acting upon feedback to drive project improvement.
        </p>
        <div className="mt-4">
          {learningOutcomes.map((outcome) => (
            <div key={outcome} className="inline-flex items-center px-3 mx-1 py-1 mx-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {outcome}
            </div>
          ))}
        </div>
      </header>

      <div className="space-y-16">
        {/* <section aria-labelledby="process-title">
          <h2 id="process-title" className="text-3xl font-semibold text-textPrimary mb-4">
            My Feedback Loop
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed">
            I believe that feedback is the fastest way to grow. My process is to treat all feedback as a valuable resource: I capture it, analyze the core issue, and create a concrete action plan to address it. This page documents that process in action, focusing on the first formative assessment.
          </p>
        </section> */}

        <section aria-labelledby="feedback-log-title">
          <h2 id="feedback-log-title" className="text-3xl font-semibold text-textPrimary mb-6">
            Response to Formative Assessment 1
          </h2>
          <p className="text-lg text-textSecondary mb-6">
            The first formative assessment provided clear, critical feedback that has fundamentally shaped the structure and content of this portfolio. Below is a breakdown of the key feedback points and the direct actions I have taken in response.
          </p>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="space-y-6">

              {/* Item 1: The Core Problem */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  Feedback Point: Lack of Visibility & Process
                </h3>
                <blockquote className="border-l-4 border-gray-200 pl-4">
                  <p className="italic text-textSecondary">"Your portfolio does not show what you know and have done... You do not show a work process for making decisions... We specifically assess that process."</p>
                </blockquote>
                <p className="text-textSecondary mt-3">
                  <span className="font-semibold">Action Taken:</span> My primary action was to adopt the **"Process Visibility Template"** for all major features, such as the <Link to="/reading-app/features/welcome" className="text-primary hover:underline">Welcome Screen</Link>. Each page now explicitly documents the design versions, justifications, theoretical grounding, and reflection to make my process transparent.
                </p>
              </div>

              {/* Item 2: Planning & Control */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  Feedback Point: No Clear Plan
                </h3>
                <blockquote className="border-l-4 border-gray-200 pl-4">
                  <p className="italic text-textSecondary">"There is no clear project approach or planning... if you don't have a plan, how do you know when you need to have which things finished?"</p>
                </blockquote>
                <p className="text-textSecondary mt-3">
                  <span className="font-semibold">Action Taken:</span> To address this, I created the <Link to="/reading-app/management/methodology-tools" className="text-primary hover:underline">Methodology & Tools</Link> page. This page formally documents my agile-inspired process, my use of Notion for task management, and my Git strategy, serving as the project plan that was previously missing.
                </p>
              </div>

              {/* Item 3: Group Project Contribution */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  Feedback Point: Invisible Group Contribution
                </h3>
                <blockquote className="border-l-4 border-gray-200 pl-4">
                  <p className="italic text-textSecondary">"Especially with the group work... the group work, in particular, is very invisible right now."</p>
                </blockquote>
                <p className="text-textSecondary mt-3">
                  <span className="font-semibold">Action Taken:</span> I am creating a dedicated section on the <Link to="/fitphone" className="text-primary hover:underline">FitPhone case study page</Link> titled "My Role & Key Contributions." This section will use clear "I" statements and visual evidence (screenshots of designs, code, or our Trello board) to explicitly highlight my personal contributions to the team project.
                </p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default FeedbackProcessingPage;