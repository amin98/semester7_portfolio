import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// Layout
import Layout from './components/Layout';

// Route Definitions
import fitphoneRoutes from './routes/fitphoneRoutes';
import mainRoutes from './routes/mainRoutes';
import readingAppRoutes from './routes/readingAppRoutes';

// Helper function for breadcrumbs
import { createBreadcrumb } from './utils/createBreadcrumb';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      handle: { breadcrumb: () => createBreadcrumb('Home', '/') },
      children: [
        ...mainRoutes,
        readingAppRoutes,
        fitphoneRoutes,
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
