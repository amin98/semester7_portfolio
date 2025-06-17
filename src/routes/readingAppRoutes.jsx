// src/routes/readingAppRoutes.jsx
import React from 'react';

// Layout & Pages
import CompetitiveAnalysisPage from '../pages/reading-app/analysis/CompetitiveAnalysisPage';
import HowMightWeGamificationHabitsPage from '../pages/reading-app/analysis/howmightwe/HowMightWeGamificationHabitsPage';
import HowMightWePersonalFunChallengesPage from '../pages/reading-app/analysis/howmightwe/HowMightWePersonalFunChallengesPage';
import HowMightWeRewardingEntertainmentPage from '../pages/reading-app/analysis/howmightwe/HowMightWeRewardingEntertainmentPage';
import HowMightWeSupportAdultsPage from '../pages/reading-app/analysis/howmightwe/HowMightWeSupportAdultsPage';
import ProblemDefinitionPage from '../pages/reading-app/analysis/ProblemDefintionPage';
import ResearchQuestionsLayout from '../pages/reading-app/analysis/ResearchQuestionsLayout';
import ResearchQuestionsPage from '../pages/reading-app/analysis/ResearchQuestionsPage';
import ResearchAccessibleContentPage from '../pages/reading-app/analysis/subquestions/ResearchAccessibleContentPage';
import ResearchExistingTechPage from '../pages/reading-app/analysis/subquestions/ResearchExistingTechPage';
import ResearchReadingInterestPage from '../pages/reading-app/analysis/subquestions/ResearchReadingInterestPage';
import ResearchTeacherMotivationPage from '../pages/reading-app/analysis/subquestions/ResearchTeacherMotivationPage';
import TargetAudiencePage from '../pages/reading-app/analysis/TargetAudiencePage';
import HomeInterfaceFeaturePage from '../pages/reading-app/features/HomeInterfaceFeaturePage';
import OnboardingFeaturePage from '../pages/reading-app/features/OnboardingFeaturePage';
import PostOnboardingFeaturePage from '../pages/reading-app/features/PostOnboardingFeaturePage';
import ReadingInterfaceFeaturePage from '../pages/reading-app/features/ReadingInterfaceFeaturePage';
import WelcomeFeaturePage from '../pages/reading-app/features/WelcomeFeaturePage';
import Implementation from '../pages/reading-app/Implementation';
import MethodologyToolsPage from '../pages/reading-app/management/MethodologyToolsPage';
import StackJustificationPage from '../pages/reading-app/StackJustificationPage';
import ReadingApp from '../pages/ReadingApp';
import TestingPage from '../pages/reading-app/management/TestingPage';
import OverallReflectionPage from '../pages/reading-app/professional-dev/OverallreflectionPage';
import FeedbackProcessingPage from '../pages/reading-app/professional-dev/FeedbackProcessingPage';
import { createBreadcrumb } from '../utils/createBreadcrumb';

const readingAppRoutes = {
  path: 'reading-app',
  element: <ReadingApp />,
  handle: {
    breadcrumb: () => createBreadcrumb('Reading App Case', '/reading-app'),
  },
  children: [
    {
      path: 'analysis/target-audience',
      element: <TargetAudiencePage />,
      handle: {
        breadcrumb: () =>
          createBreadcrumb(
            'Target Audience',
            '/reading-app/analysis/target-audience'
          ),
      },
    },
    {
      path: 'analysis/competitive-analysis',
      element: <CompetitiveAnalysisPage />,
      handle: {
        breadcrumb: () =>
          createBreadcrumb(
            'Competitive Analysis',
            '/reading-app/analysis/competitive-analysis'
          ),
      },
    },
    {
      path: 'analysis/problem-definition',
      element: <ProblemDefinitionPage />,
      handle: {
        breadcrumb: () =>
          createBreadcrumb(
            'Problem & Opportunity',
            '/reading-app/analysis/problem-definition'
          ),
      },
    },
    {
      path: 'analysis/research-questions',
      element: <ResearchQuestionsLayout />,
      handle: {
        breadcrumb: () =>
          createBreadcrumb(
            'Research Questions & Challenges',
            '/reading-app/analysis/research-questions'
          ),
      },
      children: [
        {
          index: true,
          element: <ResearchQuestionsPage />,
        },
        {
          path: 'research-reading-interest',
          element: <ResearchReadingInterestPage />,
          handle: {
            breadcrumb: () =>
              createBreadcrumb('Reading Interest', 'research-reading-interest'),
          },
        },
        {
          path: 'research-teacher-motivation',
          element: <ResearchTeacherMotivationPage />,
          handle: {
            breadcrumb: () =>
              createBreadcrumb(
                'Teacher Motivation',
                'research-teacher-motivation'
              ),
          },
        },
        {
          path: 'research-existing-tech',
          element: <ResearchExistingTechPage />,
          handle: {
            breadcrumb: () =>
              createBreadcrumb('Existing Tech', 'research-existing-tech'),
          },
        },
        {
          path: 'research-accessible-content',
          element: <ResearchAccessibleContentPage />,
          handle: {
            breadcrumb: () =>
              createBreadcrumb(
                'Accessible Content',
                'research-accessible-content'
              ),
          },
        },
        {
          path: 'rewarding-entertainment',
          element: <HowMightWeRewardingEntertainmentPage />,
          handle: {
            breadcrumb: () =>
              createBreadcrumb(
                'Rewarding as Entertainment',
                'rewarding-entertainment'
              ),
          },
        },
        {
          path: 'gamification-habits',
          element: <HowMightWeGamificationHabitsPage />,
          handle: {
            breadcrumb: () =>
              createBreadcrumb(
                'Gamification for Habits',
                'gamification-habits'
              ),
          },
        },
        {
          path: 'personal-fun-challenges',
          element: <HowMightWePersonalFunChallengesPage />,
          handle: {
            breadcrumb: () =>
              createBreadcrumb(
                'Personal & Fun Challenges',
                'personal-fun-challenges'
              ),
          },
        },
        {
          path: 'support-adults',
          element: <HowMightWeSupportAdultsPage />,
          handle: {
            breadcrumb: () =>
              createBreadcrumb('Support from Adults', 'support-adults'),
          },
        },
      ],
    },
    {
      path: 'features/welcome',
      element: <WelcomeFeaturePage />,
      handle: {
        breadcrumb: () =>
          createBreadcrumb('Welcome Feature', '/reading-app/features/welcome'),
      },
    },
    {
      path: 'features/onboarding',
      element: <OnboardingFeaturePage />,
      handle: {
        breadcrumb: () =>
          createBreadcrumb(
            'Onboarding Feature',
            '/reading-app/features/onboarding'
          ),
      },
    },
    {
      path: 'features/post-onboarding',
      element: <PostOnboardingFeaturePage />,
      handle: {
        breadcrumb: () =>
          createBreadcrumb(
            'Post-Onboarding Feature',
            '/reading-app/features/post-onboarding'
          ),
      },
    },
    {
      path: 'features/reading-interface',
      element: <ReadingInterfaceFeaturePage />,
      handle: {
        breadcrumb: () =>
          createBreadcrumb(
            'Reading Interface Feature',
            '/reading-app/features/reading-interface'
          ),
      },
    },
    {
      path: 'features/home-interface',
      element: <HomeInterfaceFeaturePage />,
      handle: {
        breadcrumb: () =>
          createBreadcrumb(
            'Home Interface Feature',
            '/reading-app/features/home-interface'
          ),
      },
    },
    {
      path: 'technical-design/stack-justification',
      element: <StackJustificationPage />,
      handle: {
        breadcrumb: () =>
          createBreadcrumb(
            'Tech Stack Justification',
            '/reading-app/technical-design/stack-justification'
          ),
      },
    },
    {
      path: 'management/methodology-tools',
      element: <MethodologyToolsPage />,
      handle: {
        breadcrumb: () =>
          createBreadcrumb(
            'Methodology & Tools',
            '/reading-app/management/methodology-tools'
          ),
      },
    },
    {
      path: 'management/testing',
      element: <TestingPage />,
      handle: {
        breadcrumb: () =>
          createBreadcrumb(
            'Testing Strategy',
            '/reading-app/management/testing'
          ),
      },
    },
    {
      path: 'professional-dev/overall-reflection',
      element: <OverallReflectionPage />,
      handle: {
        breadcrumb: () =>
          createBreadcrumb('Overall Reflection', '/reading-app/professional-dev/overall-reflection'),
      },
    },
    {
      path: 'professional-dev/feedback-processing',
      element: <FeedbackProcessingPage />,
      handle: {
        breadcrumb: () =>
          createBreadcrumb('Feedback Processing', '/reading-app/professional-dev/feedback-processing'),
      },
    },
    {
      path: 'implementation',
      element: <Implementation />,
      handle: {
        breadcrumb: () =>
          createBreadcrumb(
            'Implementation Details',
            '/reading-app/implementation'
          ),
      },
    },
  ],
};

export default readingAppRoutes;
