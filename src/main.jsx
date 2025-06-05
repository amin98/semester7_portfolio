import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';


// Layout & Shared Pages
import Layout from './components/Layout';
import Home from './pages/Home';
import FeedbackProgress from './pages/FeedbackProgress';
import VersionHistory from './pages/VersionHistory';
import Planning from './pages/Planning';
import LearningOutcomes from './pages/LearningOutcomes';
import Analysis from './pages/lo/Analysis';
import Advice from './pages/lo/Advice';
import Design from './pages/lo/Design';
import Realisation from './pages/lo/Realisation';
import ManageControl from './pages/lo/ManageControl';
import Professional from './pages/lo/Professional';

// Individual Project (Reading App)
import ReadingApp from './pages/ReadingApp';
import WelcomeFeaturePage from './pages/reading-app/features/WelcomeFeaturePage';
import OnboardingFeaturePage from './pages/reading-app/features/OnboardingFeaturePage';
import PostOnboardingFeaturePage from './pages/reading-app/features/PostOnboardingFeaturePage';
import ReadingInterfaceFeaturePage from './pages/reading-app/features/ReadingInterfaceFeaturePage';
import HomeInterfaceFeaturePage from './pages/reading-app/features/HomeInterfaceFeaturePage';
import Implementation from './pages/reading-app/Implementation';
import IndividualOverview from './pages/IndividualOverview';

// Group Overview (if you still want a landing page)
/** (You can keep this or remove if you only want /fitphone) */
import GroupOverview from './pages/GroupOverview';

// **FitPhone Case Study (Group Project)**
import FitPhone from './pages/FitPhone';
import Brainstorming from './pages/fitphone/Brainstorming';
import DesignIterations from './pages/fitphone/DesignIterations';
import PrototypeTesting from './pages/fitphone/PrototypeTesting';
import FeedbackImplementation from './pages/fitphone/FeedbackImplementation';
import Realization from './pages/fitphone/Realization';
import Meetings from './pages/fitphone/Meetings';
import WayOfWorking from './pages/fitphone/WayOfWorking';

// Helper function for breadcrumbs (can be kept here or in a utils file)
const createBreadcrumb = (label, path) => ({ label, path });

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      handle: { breadcrumb: () => createBreadcrumb('Home', '/') },
      children: [
        // ─────────── Home ───────────
        { index: true, element: <Home /> },

        // ─────────── Learning Outcomes ───────────
        {
          path: 'learning-outcomes',
          element: <LearningOutcomes />,
          handle: {
            breadcrumb: () =>
              createBreadcrumb('Learning Outcomes', '/learning-outcomes'),
          },
        },
        { path: 'lo/analysis', element: <Analysis /> },
        { path: 'lo/advice', element: <Advice /> },
        { path: 'lo/design', element: <Design /> },
        { path: 'lo/realisation', element: <Realisation /> },
        { path: 'lo/manage-control', element: <ManageControl /> },
        { path: 'lo/professional', element: <Professional /> },

        // ─────────── Feedback & Versions ───────────
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

        // ─────────── Planning (for both projects) ───────────
        {
          path: 'planning',
          element: <Planning />,
          handle: {
            breadcrumb: () => createBreadcrumb('Planning', '/planning'),
          },
        },

        // ─────────── Reading App (Individual) ───────────
        {
          path: 'reading-app',
          element: <ReadingApp />,
          handle: {
            breadcrumb: () =>
              createBreadcrumb('Reading App Case', '/reading-app'),
          },
          children: [
            {
              path: 'features/welcome',
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

        // ─────────── Individual Overview (if you want a dashboard page) ───────────
        {
          path: 'individual',
          element: <IndividualOverview />,
          handle: {
            breadcrumb: () =>
              createBreadcrumb('Individual Project', '/individual'),
          },
        },

        // ─────────── Group Overview (optional) ───────────
        {
          path: 'group',
          element: <GroupOverview />,
          handle: {
            breadcrumb: () => createBreadcrumb('Group Project', '/group'),
          },
        },

        // ─────────── FitPhone Case Study with Nested Children ───────────
        {
          path: 'fitphone',
          element: <FitPhone />,
          handle: {
            breadcrumb: () =>
              createBreadcrumb('FitPhone Case Study', '/fitphone'),
          },
          children: [
            {
              path: 'brainstorming',
              element: <Brainstorming />,
              handle: {
                breadcrumb: () =>
                  createBreadcrumb(
                    'Brainstorming & Research',
                    '/fitphone/brainstorming'
                  ),
              },
            },
            {
              path: 'design',
              element: <DesignIterations />,
              handle: {
                breadcrumb: () =>
                  createBreadcrumb(
                    'Design Iterations',
                    '/fitphone/design'
                  ),
              },
            },
            {
              path: 'prototype-testing',
              element: <PrototypeTesting />,
              handle: {
                breadcrumb: () =>
                  createBreadcrumb(
                    'Prototype Testing',
                    '/fitphone/prototype-testing'
                  ),
              },
            },
            {
              path: 'feedback-implementation',
              element: <FeedbackImplementation />,
              handle: {
                breadcrumb: () =>
                  createBreadcrumb(
                    'Feedback Implementation',
                    '/fitphone/feedback-implementation'
                  ),
              },
            },
            {
              path: 'realization',
              element: <Realization />,
              handle: {
                breadcrumb: () =>
                  createBreadcrumb(
                    'Realization & Coding',
                    '/fitphone/realization'
                  ),
              },
            },
            {
              path: 'meetings',
              element: <Meetings />,
              handle: {
                breadcrumb: () =>
                  createBreadcrumb(
                    'Meetings & Collaboration',
                    '/fitphone/meetings'
                  ),
              },
            },
            {
              path: 'way-of-working',
              element: <WayOfWorking />,
              handle: {
                breadcrumb: () =>
                  createBreadcrumb(
                    'Way of Working (Agile)',
                    '/fitphone/way-of-working'
                  ),
              },
            },
          ],
        },

        // You can add more top-level routes here if needed...
      ],
    },
  ],
  {
    basename: '/semester7/portfolio/',
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

