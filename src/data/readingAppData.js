// src/data/readingAppData.js

// This file serves as the single source of truth for the content
// and structure of the Reading App case study sections.

export const analysisTopicLinks = [
  {
    path: 'analysis/problem-definition',
    label: 'Problem & Opportunity',
    description:
      'Defining the core problem and market opportunity for the app.',
    learningOutcomes: ['Analysis'],
  },
  {
    path: 'analysis/research-questions',
    label: 'Research Questions & Challenges',
    description:
      'The guiding questions and key challenges that shape the project.',
    learningOutcomes: ['Analysis'],
  },
  {
    path: 'analysis/target-audience',
    label: 'Target Audience & Personas',
    description: 'Understanding who the app is for and their needs.',
    learningOutcomes: ['Analysis'],
  },
  {
    path: 'analysis/competitive-analysis',
    label: 'Competitive Analysis',
    description:
      'Reviewing existing solutions and identifying differentiators.',
    learningOutcomes: ['Analysis'],
  },
];

export const featureLinks = [
  {
    path: 'features/welcome',
    label: 'Welcome Screen',
    description: 'First look and how to enter the app.',
    learningOutcomes: ['Design', 'Professional Skills'],
  },
  {
    path: 'features/onboarding',
    label: 'User Onboarding Flow',
    description: "Personalizing the user's journey from the start.",
    learningOutcomes: ['Analysis', 'Design', 'Professional Skills'],
  },
  {
    path: 'features/post-onboarding',
    label: 'Post-Onboarding Experience',
    description: 'Guiding users to their first moment of success.',
    learningOutcomes: ['Design', 'Advice'],
  },
  {
    path: 'features/reading-interface',
    label: 'Reading Interface',
    description: 'The core, distraction-free reading experience.',
    learningOutcomes: ['Design', 'Realisation'],
  },
  {
    path: 'features/home-interface',
    label: 'Home / Dashboard Screen',
    description: 'The central hub for user engagement and content discovery.',
    learningOutcomes: ['Design', 'Analysis'],
  },
];

export const techDesignLinks = [
  {
    path: 'technical-design/stack-justification',
    label: 'Technology Stack & Justification',
    description: 'Chosen technologies (e.g., Flutter, Firebase) and why.',
    learningOutcomes: ['Analysis', 'Advice', 'Design'],
  },
  // Add other tech design links here if you have them
];

export const projectManagementLinks = [
  {
    path: 'management/methodology-tools',
    label: 'Methodology & Tools',
    description: 'Agile practices, task management, and version control (Git).',
    learningOutcomes: ['Manage & Control'],
  },
  {
    path: 'management/testing', // New path
    label: 'Testing Strategy',    // New label
    description: 'My approach to manual testing, usability testing, and bug tracking.', // New description
    learningOutcomes: ['Manage & Control', 'Realisation'],
  },
  // Add other management links here
];

export const professionalDevelopmentLinks = [
  {
    path: 'professional-dev/overall-reflection',
    label: 'Overall Project Reflection',
    description: 'Key takeaways and what I would do differently.',
    learningOutcomes: ['Professional Skills'],
  },
  {
    path: 'professional-dev/feedback-processing',
    label: 'Feedback Processing',
    description: 'How formal and informal feedback was actioned.',
    learningOutcomes: ['Professional Skills', 'Manage & Control'],
  },
];
