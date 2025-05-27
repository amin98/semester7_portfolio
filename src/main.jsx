import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// Import Page Components
import Layout from './components/Layout'; // Layout will be the main element for parent route
import FeedbackProgress from './pages/FeedbackProgress';
import FitPhone from './pages/FitPhone';
import GroupOverview from './pages/GroupOverview';
import Home from './pages/Home';
import IndividualOverview from './pages/IndividualOverview';
import LearningOutcomes from './pages/LearningOutcomes';
import Advice from './pages/lo/Advice';
import Analysis from './pages/lo/Analysis';
import Design from './pages/lo/Design';
import ManageControl from './pages/lo/ManageControl';
import Professional from './pages/lo/Professional';
import Realisation from './pages/lo/Realisation';
import Planning from './pages/Planning';
import ReadingApp from './pages/ReadingApp';
import VersionHistory from './pages/VersionHistory';

// Import new specific feature pages
import HomeInterfaceFeaturePage from './pages/reading-app/features/HomeInterfaceFeaturePage';
import OnboardingFeaturePage from './pages/reading-app/features/OnboardingFeaturePage';
import PostOnboardingFeaturePage from './pages/reading-app/features/PostOnboardingFeaturePage';
import ReadingInterfaceFeaturePage from './pages/reading-app/features/ReadingInterfaceFeaturePage';
import WelcomeFeaturePage from './pages/reading-app/features/WelcomeFeaturePage';
import Implementation from './pages/reading-app/Implementation';

// Helper function for breadcrumbs (can be kept here or in a utils file)
const createBreadcrumb = (label, path) => ({ label, path });

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout component wraps all pages
    handle: { breadcrumb: () => createBreadcrumb('Home', '/') }, // Home breadcrumb at root
    children: [
      { index: true, element: <Home /> }, // Index route for Home page
      {
        path: 'learning-outcomes',
        element: <LearningOutcomes />,
        handle: {
          breadcrumb: () =>
            createBreadcrumb('Learning Outcomes', '/learning-outcomes'),
        },
      },
      {
        path: 'lo/analysis',
        element: <Analysis />,
        handle: {
          breadcrumb: () => createBreadcrumb('Analysis', '/lo/analysis'),
        },
      },
      {
        path: 'lo/advice',
        element: <Advice />,
        handle: { breadcrumb: () => createBreadcrumb('Advice', '/lo/advice') },
      },
      {
        path: 'lo/design',
        element: <Design />,
        handle: { breadcrumb: () => createBreadcrumb('Design', '/lo/design') },
      },
      {
        path: 'lo/realisation',
        element: <Realisation />,
        handle: {
          breadcrumb: () => createBreadcrumb('Realisation', '/lo/realisation'),
        },
      },
      {
        path: 'lo/manage-control',
        element: <ManageControl />,
        handle: {
          breadcrumb: () =>
            createBreadcrumb('Manage & Control', '/lo/manage-control'),
        },
      },
      {
        path: 'lo/professional',
        element: <Professional />,
        handle: {
          breadcrumb: () =>
            createBreadcrumb('Professional Skills', '/lo/professional'),
        },
      },
      {
        path: 'feedback-progress',
        element: <FeedbackProgress />,
        handle: {
          breadcrumb: () =>
            createBreadcrumb('Improvements', '/feedback-progress'),
        },
      },
      {
        path: 'version-history',
        element: <VersionHistory />,
        handle: {
          breadcrumb: () =>
            createBreadcrumb('Version History', '/version-history'),
        },
      },
      {
        path: 'planning',
        element: <Planning />,
        handle: { breadcrumb: () => createBreadcrumb('Planning', '/planning') },
      },
      {
        path: 'reading-app',
        element: <ReadingApp />,
        handle: {
          breadcrumb: () =>
            createBreadcrumb('Reading App Case', '/reading-app'),
        },
        children: [
          {
            path: 'features/welcome', // Static path
            element: <WelcomeFeaturePage />,
            handle: {
              breadcrumb: () =>
                createBreadcrumb(
                  'Welcome Feature',
                  '/reading-app/features/welcome'
                ),
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
      },
      {
        path: 'individual',
        element: <IndividualOverview />,
        handle: {
          breadcrumb: () =>
            createBreadcrumb('Individual Project', '/individual'),
        },
      },
      {
        path: 'group',
        element: <GroupOverview />,
        handle: {
          breadcrumb: () => createBreadcrumb('Group Project', '/group'),
        },
      },
      {
        path: 'fitphone',
        element: <FitPhone />,
        handle: {
          breadcrumb: () => createBreadcrumb('FitPhone Case', '/fitphone'),
        },
      },
      // TODO: Add other child routes here
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
