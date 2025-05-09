import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';

const postOnboardingFeatureData = {
  featureTitle: 'Post-Onboarding Experience',
  featureIntro:
    'What users see immediately after completing the onboarding flow, focusing on first-use success and feature discovery.',
  designVersions: [
    {
      versionName: 'V1 - Dashboard Overview',
      screenshotUrl: '/placeholder-feature-postonboarding-v1.jpg',
      changesDescription:
        'Directs users to a main dashboard with highlights of different app sections.',
      researchInsight:
        'Users need clear guidance after setup to understand how to use the app effectively.',
      hmwQuestion:
        'How might we seamlessly transition users from setup to active app usage?',
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'V2 - Guided First Action',
      screenshotUrl: '/placeholder-feature-postonboarding-v2.jpg',
      changesDescription:
        'Prompts users to take a specific first meaningful action, like adding their first book or exploring a personalized recommendation.',
      researchInsight:
        'Guiding users to an early "aha!" moment can significantly boost retention.',
      hmwQuestion:
        'How might we help users achieve an immediate win or discover core value right after onboarding?',
      learningOutcomes: ['Design', 'Advice'],
    },
  ],
  reflectionText:
    'The goal here is to prevent users from feeling lost after setup. Iterations moved towards more actionable guidance.',
};

const PostOnboardingFeaturePage = () => {
  return <FeatureComponent {...postOnboardingFeatureData} />;
};

export default PostOnboardingFeaturePage;
