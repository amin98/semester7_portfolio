// src/routes/mainRoutes.jsx
import React from 'react';

// Layout & Shared Pages
import FeedbackProgress from '../pages/FeedbackProgress';
import GroupOverview from '../pages/GroupOverview';
import Home from '../pages/Home';
import IndividualOverview from '../pages/IndividualOverview';
import LearningOutcomes from '../pages/LearningOutcomes';
import Advice from '../pages/lo/Advice';
import Analysis from '../pages/lo/Analysis';
import Design from '../pages/lo/Design';
import ManageControl from '../pages/lo/ManageControl';
import Professional from '../pages/lo/Professional';
import Realisation from '../pages/lo/Realisation';
import Planning from '../pages/Planning';
import VersionHistory from '../pages/VersionHistory';
import { createBreadcrumb } from '../utils/createBreadcrumb';

const mainRoutes = [
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
      breadcrumb: () => createBreadcrumb('Improvements', '/feedback-progress'),
    },
  },
  {
    path: 'version-history',
    element: <VersionHistory />,
    handle: {
      breadcrumb: () => createBreadcrumb('Version History', '/version-history'),
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

  // ─────────── Individual Overview (if you want a dashboard page) ───────────
  {
    path: 'individual',
    element: <IndividualOverview />,
    handle: {
      breadcrumb: () => createBreadcrumb('Individual Project', '/individual'),
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
];

export default mainRoutes;
