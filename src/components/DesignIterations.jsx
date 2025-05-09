import React from 'react';

const DesignIterations = () => {
  const iterations = [
    {
      version: 'Version 1',
      image: '/placeholder-v1.jpg', // Replace with actual image path
      description:
        'Initial prototype focusing on core reading functionality and basic user interface.',
      rationale: [
        'Based on user research showing need for distraction-free reading environment',
        'Addresses HMW question: "How might we create an engaging reading experience?"',
        'Connects to Design learning outcome: "Use a design process to create UX and technological designs"',
      ],
    },
    {
      version: 'Version 2',
      image: '/placeholder-v2.jpg', // Replace with actual image path
      description:
        'Enhanced version with improved navigation and reading progress tracking.',
      rationale: [
        'Incorporates feedback from initial user testing',
        'Addresses HMW question: "How might we help users track their reading progress?"',
        'Connects to Analysis learning outcome: "Critically analyze problems in smart-mobile context"',
      ],
    },
    {
      version: 'Version 3',
      image: '/placeholder-v3.jpg', // Replace with actual image path
      description:
        'Final iteration with social features and personalized recommendations.',
      rationale: [
        'Implements insights from A/B testing of social features',
        'Addresses HMW question: "How might we create a community of readers?"',
        'Connects to Realisation learning outcome: "Implement and validate an interactive product"',
      ],
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-textPrimary">
        Design Evolution
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {iterations.map((iteration, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-medium overflow-hidden border border-gray-200"
          >
            <div className="aspect-video bg-gray-100">
              {/* Replace with actual image component */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                [Design Screenshot]
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3 text-textPrimary">
                {iteration.version}
              </h2>
              <p className="text-textSecondary mb-4">{iteration.description}</p>
              <ul className="space-y-2">
                {iteration.rationale.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-textSecondary">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignIterations;
