// src/data/allPortfolioItems.js

// Import from the new dedicated data file
import {
  analysisTopicLinks,
  professionalDevelopmentLinks,
  projectManagementLinks,
  techDesignLinks,
} from './readingAppData'; // Corrected Path

// Import ALL data from Individual Case individual feature pages
import { homeInterfaceFeatureDataWithProcess } from '../pages/reading-app/features/HomeInterfaceFeaturePage';
import { onboardingFeatureDataWithProcess } from '../pages/reading-app/features/OnboardingFeaturePage';
import { postOnboardingFeatureDataWithProcess } from '../pages/reading-app/features/PostOnboardingFeaturePage';
import { readingInterfaceFeatureDataWithProcess } from '../pages/reading-app/features/ReadingInterfaceFeaturePage';
import { welcomeFeatureData } from './readingapp/welcomeFeatureData';

// Import the data from the implementation page
import { implementationData } from '../pages/reading-app/Implementation';

// Consolidate all feature data into a single array for easier processing
const readingAppFeatures = [
  welcomeFeatureData,
  onboardingFeatureDataWithProcess,
  postOnboardingFeatureDataWithProcess,
  readingInterfaceFeatureDataWithProcess,
  homeInterfaceFeatureDataWithProcess,
];

// Use the imported data directly, no need for a placeholder
const readingAppImplementationDetails = implementationData;

// --- Prepare Individual Case items ---

// 1. Map over the consolidated feature data to create standardized items
const featureItems = readingAppFeatures.map((feature) => ({
  path: feature.path,
  label: feature.label,
  description: feature.description,
  learningOutcomes: feature.relevantLearningOutcomesOverall,
  project: 'Individual Case',
  projectPathPrefix: '/reading-app/',
  type: 'feature',
}));

// 2. Map over the other categories from the new data file
const analysisItems = analysisTopicLinks.map((item) => ({
  ...item,
  project: 'Individual Case',
  projectPathPrefix: '/reading-app/',
  type: 'analysis_topic',
}));

const techDesignItems = techDesignLinks.map((item) => ({
  ...item,
  project: 'Individual Case',
  projectPathPrefix: '/reading-app/',
  type: 'tech_design_topic',
}));

const managementItems = projectManagementLinks.map((item) => ({
  ...item,
  project: 'Individual Case',
  projectPathPrefix: '/reading-app/',
  type: 'management_topic',
}));

const proDevItems = professionalDevelopmentLinks.map((item) => ({
  ...item,
  project: 'Individual Case',
  projectPathPrefix: '/reading-app/',
  type: 'pro_dev_topic',
}));

// 3. Add the standalone implementation item
const implementationItem = {
  ...readingAppImplementationDetails,
  project: 'Individual Case',
  projectPathPrefix: '/reading-app/',
  type: 'implementation_main',
};

// 4. Combine all Individual Case items into one array
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
