// src/pages/fitphone/Brainstorming.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// import howmightweWhiteboardImg from '../../../assets/brainstorming/';
// import howmightweWhiteboard2Img from '../../../assets/brainstorming/howmightwe_whiteboard2.jpeg';

const Brainstorming = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl border border-gray-200">
    <h1 className="text-2xl font-semibold text-textPrimary mb-4">
      Brainstorming & Research - Our Ideas and Study
    </h1>
    <p className="text-textSecondary mb-6">
      For starting, we did user surveys and looked at what other companies were
      doing. We also wrote our first user stories. You can see down below some
      of our first drawings, mind maps, our Miro boards where we worked on
      ideas, and the simple notes from our study.
    </p>

    <section className="mb-8">
      <h2 className="text-xl font-semibold text-textPrimary mb-3">
        Our Brainstorming Pictures (Images)
      </h2>
      {/* TODO: Insert image gallery component or individual <img> tags here */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <img
            src='howmightwe_whiteboard.jpeg'
            alt="Whiteboard with brainstorming notes under Personal, Social, Gamification, and Technical headings."
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
        <div>
          <img
            src='howmightwe_whiteboard.jpeg'
            alt="Whiteboard exploring 'How might we?' questions for FitPhone."
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
        <div>
          <img
            src='howmightwe_whiteboard.jpeg'
            alt="Mind map on a whiteboard detailing FitPhone features and ideas."
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-semibold text-textPrimary mb-3">
        Miro Whiteboard Links
      </h2>
      {/* TODO: Insert Miro embed code(s) here */}
      <div className="bg-gray-100 p-4 rounded-md text-center text-gray-500 mb-4">
        [Placeholder for Miro Board 1: For example, First Ideas]
        {/* Example: <iframe width="768" height="432" src="YOUR_MIRO_EMBED_URL" frameBorder="0" scrolling="no" allowFullScreen></iframe> */}
      </div>
      <div className="bg-gray-100 p-4 rounded-md text-center text-gray-500">
        [Placeholder for Miro Board 2: For example, User Journey Map]
      </div>
    </section>

    {/* TODO: Add section for raw research findings, user stories table, etc. if needed */}

    <Link to="/fitphone" className="text-primary hover:underline">
      &larr; Go Back to FitPhone Overview
    </Link>
  </div>
);

export default Brainstorming;
