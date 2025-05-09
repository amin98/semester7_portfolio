import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';

const homeInterfaceFeatureData = {
  featureTitle: 'Home Screen / Dashboard Interface',
  featureIntro:
    'The main landing area for returning users, showcasing current reads, recommendations, progress, and discovery features.',
  designVersions: [
    {
      versionName: 'V1 - Simple Book List',
      screenshotUrl: '/placeholder-feature-home-v1.jpg',
      changesDescription:
        'A basic list of books the user is currently reading or has in their library.',
      researchInsight:
        'Users primarily want quick access to their ongoing reads.',
      hmwQuestion:
        "How might we provide immediate access to the user's library and current progress?",
      learningOutcomes: ['Design'],
    },
    {
      versionName: 'V2 - Personalized Dashboard',
      screenshotUrl: '/placeholder-feature-home-v2.jpg',
      changesDescription:
        'Introduced sections for personalized recommendations, reading streaks/goals, and discovery carousels (new releases, popular). Improved visual hierarchy.',
      researchInsight:
        'A dynamic home screen that surfaces relevant content can increase app usage and discovery.',
      hmwQuestion:
        "How might we make the home screen a compelling and personalized hub for the user's reading journey?",
      learningOutcomes: ['Design', 'Advice', 'Analysis'],
    },
  ],
  reflectionText:
    'The home screen evolved from a static list to a dynamic dashboard to encourage exploration and re-engagement.',
};

const HomeInterfaceFeaturePage = () => {
  return <FeatureComponent {...homeInterfaceFeatureData} />;
};

export default HomeInterfaceFeaturePage;
