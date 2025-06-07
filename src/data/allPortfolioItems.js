// src/data/allPortfolioItems.js

// Import from ReadingApp main page (top-level chapter links)
import {
  analysisTopicLinks as ra_analysisTopicLinks,
  professionalDevelopmentLinks as ra_professionalDevelopmentLinks,
  projectManagementLinks as ra_projectManagementLinks,
  techDesignLinks as ra_techDesignLinks,
} from '../pages/ReadingApp'; // Adjust path

// Import ALL data from Reading App individual feature pages
import { homeInterfaceFeatureDataWithProcess } from '../pages/reading-app/features/HomeInterfaceFeaturePage';
import { onboardingFeatureDataWithProcess } from '../pages/reading-app/features/OnboardingFeaturePage';
import { postOnboardingFeatureDataWithProcess } from '../pages/reading-app/features/PostOnboardingFeaturePage';
import { readingInterfaceFeatureDataWithProcess } from '../pages/reading-app/features/ReadingInterfaceFeaturePage';
import { welcomeFeatureDataWithProcess } from '../pages/reading-app/features/WelcomeFeaturePage';

// Consolidate all feature data into a single array for easier processing
const readingAppFeatures = [
  welcomeFeatureDataWithProcess,
  onboardingFeatureDataWithProcess,
  postOnboardingFeatureDataWithProcess,
  readingInterfaceFeatureDataWithProcess,
  homeInterfaceFeatureDataWithProcess,
];

// Placeholder for Reading App Implementation data if it has specific LOs
const readingAppImplementationDetails = {
  path: 'implementation', // from ReadingApp.jsx
  label: 'Development & Deployment Details',
  description:
    'Exploring the coding process, challenges, and deployment journey for the Reading App.',
  learningOutcomes: ['Realisation', 'Design', 'Professional Skills'], // Example
};

// --- Prepare Reading App items ---

// 1. Map over the consolidated feature data to create standardized items
const featureItems = readingAppFeatures.map((feature) => ({
  path: feature.path,
  label: feature.label,
  description: feature.description,
  learningOutcomes: feature.relevantLearningOutcomesOverall,
  project: 'Reading App',
  projectPathPrefix: '/reading-app/',
  type: 'feature',
}));

// 2. Map over the other categories from ReadingApp.jsx
const analysisItems = ra_analysisTopicLinks.map((item) => ({
  ...item,
  project: 'Reading App',
  projectPathPrefix: '/reading-app/',
  type: 'analysis_topic',
}));

const techDesignItems = ra_techDesignLinks.map((item) => ({
  ...item,
  project: 'Reading App',
  projectPathPrefix: '/reading-app/',
  type: 'tech_design_topic',
}));

const managementItems = ra_projectManagementLinks.map((item) => ({
  ...item,
  project: 'Reading App',
  projectPathPrefix: '/reading-app/',
  type: 'management_topic',
}));

const proDevItems = ra_professionalDevelopmentLinks.map((item) => ({
  ...item,
  project: 'Reading App',
  projectPathPrefix: '/reading-app/',
  type: 'pro_dev_topic',
}));

// 3. Add the standalone implementation item
const implementationItem = {
  ...readingAppImplementationDetails,
  project: 'Reading App',
  projectPathPrefix: '/reading-app/',
  type: 'implementation_main',
};

// 4. Combine all reading app items into one array
const readingAppItems = [
  ...featureItems,
  ...analysisItems,
  ...techDesignItems,
  ...managementItems,
  ...proDevItems,
  implementationItem,
];

// --- FITPHONE ITEMS (Example Structure - you'll need to create similar data exports for FitPhone) ---
// import { fitphone_BrainstormingData, ... } from '../pages/fitphone/Brainstorming';
// const fitPhoneItems = [
//   { ...fitphone_BrainstormingData, learningOutcomes: fitphone_BrainstormingData.relevantLearningOutcomesOverall, project: 'FitPhone', projectPathPrefix: '/fitphone/', type: 'fitphone_topic' },
//   // ... other FitPhone items
// ];
// --- END FITPHONE ITEMS ---

// --- Combine all projects ---
const allPortfolioItems = [
  ...readingAppItems,
  // ...fitPhoneItems, // Uncomment when ready
];

export const getAllProjectItems = () => allPortfolioItems;

// Export individual project items if needed elsewhere (e.g., for IndividualOverview.jsx)
export const getReadingAppItems = () => readingAppItems;
// export const getFitPhoneItems = () => fitPhoneItems;
