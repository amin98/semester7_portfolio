import React from 'react';

// Layout & Pages
import FitPhone from '../pages/FitPhone';
import Brainstorming from '../pages/fitphone/Brainstorming';
import DesignIterations from '../pages/fitphone/DesignIterations';
import FeedbackImplementation from '../pages/fitphone/FeedbackImplementation';
import Meetings from '../pages/fitphone/Meetings';
import PrototypeTesting from '../pages/fitphone/PrototypeTesting';
import Realization from '../pages/fitphone/Realization';
import WayOfWorking from '../pages/fitphone/WayOfWorking';
import { createBreadcrumb } from '../utils/createBreadcrumb';

const fitphoneRoutes = {
  path: 'fitphone',
  element: <FitPhone />,
  handle: {
    breadcrumb: () => createBreadcrumb('FitPhone Case Study', '/fitphone'),
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
          createBreadcrumb('Design Iterations', '/fitphone/design'),
      },
    },
    {
      path: 'prototype-testing',
      element: <PrototypeTesting />,
      handle: {
        breadcrumb: () =>
          createBreadcrumb('Prototype Testing', '/fitphone/prototype-testing'),
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
          createBreadcrumb('Realization & Coding', '/fitphone/realization'),
      },
    },
    {
      path: 'meetings',
      element: <Meetings />,
      handle: {
        breadcrumb: () =>
          createBreadcrumb('Meetings & Collaboration', '/fitphone/meetings'),
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
};

export default fitphoneRoutes;
