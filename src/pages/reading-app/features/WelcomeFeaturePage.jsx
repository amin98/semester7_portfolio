import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent'; // Adjusted path

const welcomeFeatureData = {
  featureTitle: 'Welcome & Initial Setup',
  featureIntro:
    'Crafting a delightful first-time user experience, guiding users through initial preferences and app introduction.',
  designVersions: [
    {
      versionName: 'V1 - Basic Splash & Login',
      screenshotUrl: '/placeholder-feature-welcome-v1.jpg', // Replace with actual image
      caption: 'Initial concept for app entry.',
      changesDescription:
        'Focused on essential entry points: splash screen, login, and registration.',
      researchInsight:
        'Users expect a quick and straightforward way to start using a new app.',
      hmwQuestion:
        'How might we get users into the app core experience as seamlessly as possible?',
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'V2 - Personalized Greeting',
      screenshotUrl: '/placeholder-feature-welcome-v2.jpg',
      caption: 'Adding a touch of personalization.',
      changesDescription:
        'Introduced a personalized welcome message based on time of day or user name (if available post-login). Added a brief value proposition.',
      researchInsight:
        'Personalization, even minor, can increase initial engagement.',
      hmwQuestion:
        'How might we make the user feel immediately recognized and valued?',
      learningOutcomes: ['Design', 'Advice'],
    },
  ],
  reflectionText:
    'The welcome sequence is crucial for setting the tone. Iterations focused on reducing friction and immediately showing value.',
  // implementationPlanText: '...',
  // nextStepsText: 'Further A/B testing of welcome messages.',
};

const WelcomeFeaturePage = () => {
  return <FeatureComponent {...welcomeFeatureData} />;
};

export default WelcomeFeaturePage;
