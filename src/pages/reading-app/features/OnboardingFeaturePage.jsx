import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';

const onboardingFeatureData = {
  featureTitle: 'User Onboarding Flow',
  featureIntro:
    'A step-by-step process to gather user preferences (e.g., favorite genres, reading goals) and introduce key app functionalities.',
  designVersions: [
    {
      versionName: 'V1 - Multi-Page Form',
      screenshotUrl: '/placeholder-feature-onboarding-v1.jpg',
      changesDescription:
        'A standard multi-page form approach to collect preferences.',
      researchInsight:
        'Breaking down long forms into steps can reduce perceived effort.',
      hmwQuestion:
        'How might we collect necessary user data without overwhelming them?',
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'V2 - Interactive & Gamified Steps',
      screenshotUrl: '/placeholder-feature-onboarding-v2.jpg',
      changesDescription:
        'Introduced more interactive elements like selectable cards for genres and a progress bar. Added coach marks for key UI elements.',
      researchInsight:
        'Interactive and visually engaging onboarding can improve completion rates.',
      hmwQuestion:
        'How might we make the onboarding process feel less like a chore and more like an engaging discovery?',
      learningOutcomes: ['Design', 'Advice', 'Realisation'],
    },
  ],
  reflectionText:
    'The onboarding flow is critical for tailoring the app experience. The shift to a more interactive approach aimed to boost engagement and gather richer data.',
};

const OnboardingFeaturePage = () => {
  return <FeatureComponent {...onboardingFeatureData} />;
};

export default OnboardingFeaturePage;
