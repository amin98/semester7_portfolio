import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const DesignIterations = () => {
  const iterations = [
    {
      version: 'App Version 1.0 - MVP Launch',
      image: '/placeholder-app-v1.jpg', // Replace with actual image path
      description:
        'Initial public release focusing on core reading functionality, basic library management, and initial onboarding flow.',
      rationale: [
        'Validated core user need for a simple, focused e-reader.',
        'Established baseline for future feature development.',
        'Key Feature Areas: Basic Reading Interface (V1), Initial Onboarding (V1)',
      ],
      featureLinks: [
        {
          path: '/reading-app/features/onboarding',
          label: 'Deep Dive: Onboarding V1',
        },
        {
          path: '/reading-app/features/reading-interface',
          label: 'Deep Dive: Reading Interface V1',
        },
      ],
    },
    {
      version: 'App Version 1.5 - Enhanced Personalization & UI Refresh',
      image: '/placeholder-app-v2.jpg', // Replace with actual image path
      description:
        'Major update introducing a more personalized home screen, customizable reading themes, and refined onboarding experience.',
      rationale: [
        'Addressed user feedback for more control and a modern feel.',
        'Aimed to improve engagement through tailored content discovery.',
        'Key Feature Areas: Personalized Home (V1), Customizable Reader (V2), Enhanced Onboarding (V2)',
      ],
      featureLinks: [
        {
          path: '/reading-app/features/home-interface',
          label: 'Explore Home Interface Evolution',
        },
        {
          path: '/reading-app/features/reading-interface',
          label: 'See Reader Customizations',
        },
      ],
    },
    {
      version: 'App Version 2.0 - Community & Advanced Tools',
      image: '/placeholder-app-v3.jpg', // Replace with actual image path
      description:
        'Introduced social features like book clubs and shared annotations, alongside advanced tools for power readers (e.g., improved search, tagging). Overhauled settings.',
      rationale: [
        'Expanded app scope to foster a community of readers.',
        'Catered to advanced user needs for better content organization and interaction.',
        'Key Feature Areas: Social Integration (New), Advanced Search (New), Settings Overhaul (New)',
      ],
      // No specific feature links here, or link to a general section about new V2 features
    },
  ];

  return (
    <div className="p-0">
      {' '}
      {/* Removed padding from parent as FeatureComponent might have its own */}
      {/* <h1 className="text-3xl font-bold mb-8 text-textPrimary">App Design Evolution</h1> */}
      {/* Title is now handled by parent ReadingApp.jsx section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {iterations.map((iteration, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-medium overflow-hidden border border-gray-200 flex flex-col"
          >
            <div className="aspect-video bg-palette-softLight flex items-center justify-center">
              <img
                src={iteration.image}
                alt={`Screenshot for ${iteration.version}`}
                className="object-contain w-full h-full p-2"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h2 className="text-xl font-semibold mb-3 text-textPrimary">
                {iteration.version}
              </h2>
              <p className="text-textSecondary mb-4 text-sm flex-grow">
                {iteration.description}
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-textPrimary text-sm mb-1">
                  Key Rationale:
                </h4>
                <ul className="space-y-1 list-disc list-inside text-sm">
                  {iteration.rationale.map((point, idx) => (
                    <li key={idx} className="text-textSecondary">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {iteration.featureLinks && iteration.featureLinks.length > 0 && (
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-textPrimary text-xs mb-2">
                    RELATED FEATURE DETAILS:
                  </h4>
                  <div className="space-y-1">
                    {iteration.featureLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="text-sm text-primary hover:underline block"
                      >
                        {link.label} &rarr;
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignIterations;
